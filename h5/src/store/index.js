import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import common from './modules/common'
import getters from './getters'

Vue.use(Vuex) 
const store = new Vuex.Store({
  state:{
    
  },
  mutations: {
    
  },
  modules: {
    user,
    common,
  },
  getters,
  actions:{
    
  }
})

export default store
