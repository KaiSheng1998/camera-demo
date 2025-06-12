import request from '@/JS/axios';

//获取当前用户所属的角色
export const getUserMobileRoleList = () => request({
  url: '/api/blade-system/role/getUserMobileRoleList',
  method: 'get',

})



export const login = (code) => request({
  url: '/api/blade-auth/oauth/token',
  method: 'post',
  headers: {
    'tenant-id': '000000'
  },
  params: {
    tenantId: '000000',
    code,
    grant_type: 'dingh5',
    scope: 'all',
    type: 'account',
  }
})

export const refreshToken = (refresh_token) => request({
  url: '/api/blade-auth/oauth/token',
  method: 'post',
  headers: {
    'tenant-id': '000000'
  },
  params: {
    tenantId: '000000',
    refresh_token,
    grant_type: "refresh_token",
    scope: "all",
  }
});



