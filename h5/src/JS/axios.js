/**
 * 全站http配置
 *
 * axios参数说明
 * isSerialize是否开启form表单提交
 * isToken是否需要token
 */
import axios from 'axios';
// import store from '@/store/';
// import router from '@/router/router';
import { serialize } from '@/util/util';
import { getToken } from '@/util/auth';
import website from '@/config/website';
import { Base64 } from 'js-base64';
import vm from '../main'

//默认超时时间
axios.defaults.timeout = 20000;
//返回其他状态码
axios.defaults.validateStatus = function (status) {
  return status >= 200 && status <= 500;
};
//跨域请求，允许保存cookie
axios.defaults.withCredentials = true;

//http request拦截
axios.interceptors.request.use(config => {
  const meta = (config.meta || {});
  const isToken = meta.isToken === false;
  config.headers['Authorization'] = `Basic ${Base64.encode(`${website.clientId}:${website.clientSecret}`)}`;
  //让每个请求携带token
  if (getToken() && !isToken) {
    config.headers[website.tokenHeader] = 'bearer ' + getToken()
  }
  //headers中配置text请求
  if (config.text === true) {
    config.headers["Content-Type"] = "text/plain";
  }
  //headers中配置serialize为true开启序列化
  if (config.method === 'post' && meta.isSerialize === true) {
    config.data = serialize(config.data);
  }
  else {//最大限度保持原本配置 只是未开启isSerialize的请求参数在这里处理字段值的前后空格
    // 处理所有请求参数字段值的前后空格
    for (const key in config.params) {
      if (typeof config.params[key] === 'string') {
        config.params[key] = config.params[key].trim();
      }
    }
    // 处理所有请求体字段值的前后空格
    for (const key in config.data) {
      if (typeof config.data[key] === 'string') {
        config.data[key] = config.data[key].trim();
      }
    }
  }
  return config
}, error => {
  return Promise.reject(error)
});
//http response 拦截
axios.interceptors.response.use(res => {
  const config = res.config;
  console.log('config', config);
  //不需要toast提示的接口，外部需要特殊处理
  let noToastList = ['/api/blade-auth/oauth/token', '/api/blade-system/role/getUserMobileRoleList']
  //获取状态码
  const status = res.data.code || res.status;
  const statusWhiteList = website.statusWhiteList || [];
  const message = res.data.msg || res.data.error_description || '未知错误';
  //如果在白名单里则自行catch逻辑处理
  if (statusWhiteList.includes(status)) return Promise.reject(res);
  //如果是401则跳转到登录页面
  // if (status === 401) store.dispatch('FedLogOut').then(() => router.push({path: '/login'}));
  // 如果请求为非200否者默认统一处理
  if (status !== 200) {
    if (!noToastList.includes(config.url) && !config.url.includes(noToastList[0])) { //不需要默认toast
      vm.$toast({
        msg: message,
        type: "fail",
      });
    }
    return Promise.reject(new Error(message))
  }
  return res;
}, error => {
  return Promise.reject(new Error(error));
});

export default axios;
