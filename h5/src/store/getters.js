const getters = {
  language: state => state.common.language,
  website: state => state.common.website,
  userInfo: state => state.user.userInfo,
  colorName: state => state.common.colorName,
  themeName: state => state.common.themeName,
  isShade: state => state.common.isShade,
  isCollapse: state => state.common.isCollapse,
  screen: state => state.common.screen,
  isLock: state => state.common.isLock,
  isFullScren: state => state.common.isFullScren,
  isMenu: state => state.common.isMenu,
  lockPasswd: state => state.common.lockPasswd,
  token: state => state.user.token,
  roles: state => state.user.roles,
  permission: state => state.user.permission,
  menuId: state => state.user.menuId,
  menuAll: state => state.user.menuAll,
  roleList:state => state.user.roleList,
  roleId:state => state.user.role.id
}
export default getters
