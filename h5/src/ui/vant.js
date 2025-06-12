import { Tabbar, Popup, TabbarItem, Overlay, Button, Picker, Cell, CellGroup, Loading, Uploader, Toast, RadioGroup, Radio, NavBar, Icon, Tab, Tabs, List, Form, Field, Swipe, SwipeItem, Search, Sidebar, SidebarItem, Empty, PullRefresh, Checkbox, Steps, Step,NoticeBar} from 'vant'

const vant = {
  install: function (Vue) {
    Vue.use(NoticeBar)
    Vue.use(Steps)
    Vue.use(Step)
    Vue.use(Overlay)
    Vue.use(Button)
    Vue.use(Loading)
    Vue.use(Uploader)
    Vue.use(Toast)
    Vue.use(Tabbar)
    Vue.use(TabbarItem)
    Vue.use(NavBar)
    Vue.use(Icon)
    Vue.use(Tab)
    Vue.use(Tabs)
    Vue.use(List)
    Vue.use(Form)
    Vue.use(Field)
    Vue.use(CellGroup)
    Vue.use(Cell)
    Vue.use(RadioGroup)
    Vue.use(Radio)
    Vue.use(Picker)
    Vue.use(Popup),
      Vue.use(Swipe),
      Vue.use(SwipeItem),
      Vue.use(Search),
      Vue.use(Sidebar)
    Vue.use(SidebarItem),
      Vue.use(Empty),
      Vue.use(PullRefresh),
      Vue.use(Checkbox)
  }
}

export default vant
