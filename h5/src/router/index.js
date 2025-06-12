import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  //auth是否需要登陆后才可以展示，默认为false
  //keepAlive 是否缓存当前页
  //meta 是否显示底部导航，true为显示，false为不显示
  {
    path: 'welcome',
    name: '首页',
    meta: {
      i18n: 'dashboard'
    },
    component: () =>
      import( /* webpackChunkName: "views" */ '@/views/wel/index')
  },
  {
    path: '/faceCollect',
    name: 'faceCollect',
    component: () => import('../views/faceCollect/index.vue'),
    meta: { title: '人脸采集', keepAlive: true, meta: true, auth: true }
  },
  {
    path: '/faceValidate',
    name: 'faceValidate',
    component: () => import('../views/faceValidate/index.vue'),
    meta: { title: '人脸核验', keepAlive: true, meta: true, auth: true }
  },
  {
    path: '/collectRecords',
    name: 'collectRecords',
    component: () => import('../views/collectRecords/index.vue'),
    meta: { title: '采集记录', keepAlive: true, meta: true, auth: true }
  },
  {
    path: '/',
    name: 'photograph',
    component: () => import('../views/photograph/index2.vue'),
    meta: { title: '采集拍照', keepAlive: true, meta: true, auth: true }
  },
]

const router = new VueRouter({
  routes,
  scrollBehavior: () => ({ y: 0 })
})

export default router
