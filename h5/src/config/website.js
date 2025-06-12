/**
 * 全局配置文件
 */
export default {
  title: "saber",
  logo: "S",
  key: 'saber',//配置主键,目前用于存储
  indexTitle: '',
  clientId: 'saber', // 客户端id
  clientSecret: 'saber_secret', // 客户端密钥
  tenantMode: false, // 是否开启租户模式
  tenantId: "000000", // 管理组租户编号
  lockPage: '/lock',
  tokenTime: 3000,
  tokenHeader: 'Blade-Auth',
  //http的status默认放行列表
  statusWhiteList: [],
  //配置首页不可关闭
  isFirstPage: true,
  menuWidthOne: 100, //一个按钮的菜单宽度
  menuWidthTwo: 130, //二个按钮的菜单宽度
  menuWidthThree: 160, //仨个按钮的菜单宽度
  menuWidthFour: 200, //超过三个带省略号个按钮的菜单宽度
}
