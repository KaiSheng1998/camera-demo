import { setToken, setRefreshToken } from '@/util/auth'
import { setStore, getStore } from '@/util/store'
import { login, refreshToken, getUserMobileRoleList } from '@/api/user'
import vm from '../../main'


const user = {
  state: {
    userInfo: getStore({ name: 'userInfo' }) || [],
    token: getStore({ name: 'token' }) || '',
    refreshToken: getStore({ name: 'refreshToken' }) || '',
    roleList: getStore({ name: 'roleList' }) || [],
    role: getStore({ name: 'role' }) || '',
  },
  actions: {
    login({ commit, dispatch }, code) {
      return new Promise((resolve, reject) => {
        login(code).then(res => {
          const data = res.data;
          if (data.error_description) {
            vm.$toast({
              message: data.error_description,
              type: 'fail'
            })
          } else {
            commit('SET_TOKEN', data.access_token);
            commit('SET_REFRESH_TOKEN', data.refresh_token);
            commit('SET_USER_INFO', data);

            //过期时间倒计时
            let expireTime = (data.expires_in - 10) * 1000;
            let timeout = setTimeout(() => {
              dispatch('refreshToken')
              clearTimeout(timeout)
            }, expireTime);

          }
          resolve();
        }).catch(error => {
          reject(error);
        })
      })
    },
    //刷新token
    refreshToken({ state, commit, dispatch }) {
      return new Promise((resolve, reject) => {
        refreshToken(state.refreshToken).then(res => {
          const data = res.data;
          commit('SET_TOKEN', data.access_token);
          commit('SET_REFRESH_TOKEN', data.refresh_token);
          commit('SET_USER_INFO', data);
          resolve();

          //过期时间倒计时
          const expireTime = (data.expires_in - 10) * 1000;
          let interval = setInterval(() => {
            dispatch('refreshToken')
            clearInterval(interval)
          }, expireTime)

        }).catch(error => {
          reject(error)
        })
      })
    },
    //获取角色列表
    getRoleList: ({ commit }) => {
      return new Promise((resolve, reject) => {
        getUserMobileRoleList().then(res => {
          if (res.data && res.data.data && res.data.data.length > 0) {
            commit('SET_ROLE_List', res.data.data);
            commit('SET_ROLE_SELECT', res.data.data[0]);
            resolve(res.data.data);
          }
          else {
            commit('SET_ROLE_List', []);
            commit('SET_ROLE_SELECT', {});
            resolve([]);
          }
        }).catch(error => {
          let msg = error.message
          vm.$dialog({
            title: '',
            text: msg,
            showCancelBtn: false,
            confirm(content) {
              location.reload();
            },
          })
          reject(error)
        })
      })
    }

  },
  mutations: {
    SET_TOKEN: (state, token) => {
      setToken(token);
      state.token = token;
    },
    SET_REFRESH_TOKEN: (state, refreshToken) => {
      setRefreshToken(refreshToken)
      state.refreshToken = refreshToken;
    },
    SET_USER_INFO: (state, userInfo) => {
      state.userInfo = userInfo;
      setStore({ name: 'userInfo', content: state.userInfo })
    },
    SET_ROLE_List: (state, roleList) => {
      state.roleList = roleList;
      setStore({ name: 'roleList', content: state.roleList })
    },
    SET_ROLE_SELECT: (state, role) => {
      state.role = role;
      setStore({ name: 'role', content: state.role })
    }
  }

}
export default user
