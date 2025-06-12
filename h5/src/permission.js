/**
 * 全站权限配置
 *
 */
import { getToken } from '@/util/auth'
import router from './router/index'
import { Dialog } from 'vant'
import store from './store'
import dd from 'dingtalk-jsapi'


router.beforeEach(async (to, from, next) => {
  // if (getToken() && from.name) { //有token并且不是刷新页面
  //   next()
  // } else {
  //   try {
  //     //通过钉钉api获取code，拿着code调用登录接口获取token
  //     const corpId = 'ding20cbb2fd0d3bb1bff5bf40eda33b7ba0' //钉钉企业id
  //     console.log('//////////',dd.env.platform);
  //     if (dd.env.platform !== 'notInDingTalk') { //如果我在钉钉内部打开
  //       dd.ready(() => {
  //         dd.runtime.permission.requestAuthCode({
  //           corpId: corpId,
  //           onSuccess: (info) => {
  //             var axios = require('axios')
  //             axios.post(`/api/blade-auth/oauth/token?tenantId=000000&code=${info.code}&grant_type=dingh5&scope=all&type=account`, null, {
  //               headers: {
  //                 'tenant-id': '000000'
  //               },
  //             }).then(res => {
  //               const data = res.data || {};
  //               store.commit('SET_TOKEN', data.access_token);
  //               store.commit('SET_REFRESH_TOKEN', data.refresh_token);
  //               store.commit('SET_USER_INFO', data);

  //               //过期时间倒计时
  //               let expireTime = (data.expires_in - 10) * 1000;
  //               let timeout = setTimeout(() => {
  //                 store.dispatch('refreshToken')
  //                 clearTimeout(timeout)
  //               }, expireTime);
  //               next()

  //             })
  //               .catch(error => {
  //                 Dialog.alert({
  //                   message: error.message || error.msg || error.error_description || '未知错误',
  //                 }).then(() => {
  //                   location.reload()
  //                 });
  //               })
  //           },
  //           onFail: (err) => {
  //             console.log('444', err);
  //             Dialog.alert({
  //               message: JSON.stringify(err),
  //             }).then(() => {
  //               location.reload()
  //             });
  //           }
  //         })
  //       })
  //     } else {
  //       //外部打开  随便定义code
  //       store.dispatch("login", '12345678910').then(() => {
  //         next()
  //       }).catch((err) => {
  //         Dialog.alert({
  //           message: err.message,
  //         }).then(() => {
  //           location.reload()
  //         });
  //       })
  //     }
  //   } catch (err) {
  //   }
  // }
  next()
})


router.afterEach(() => {
  let title = '人脸库后台-湖州职业技术学院';
  document.title = title;
});
