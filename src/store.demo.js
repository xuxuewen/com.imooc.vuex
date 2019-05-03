

import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    title:'Vuex基础入门',
    persion:{
      name:'andy 大叔',
      age:33,
      country:'中国',
      sex:'男'
    }
  },

  getters:{
    info(state,getters){
      return `姓名:${state.persion.name},姓别:${state.persion.sex}`
    }
  },

  mutations:{
    /** 更新标题 */
    updateTitle(state,payload){
      state.title = payload.title
    }
  },

  actions:{
    updateTitle(context,payload){
      context.commit('updateTitle',payload);
    }
  }
  
})

const store = new Vuex.Store({
  state:{
    title:'Vuex基础入门',
    persion:{
      name:'andy 大叔',
      age:33,
      country:'中国',
      sex:'男'
    }
  },
  getters:{
    info(state,getters){
      return `姓名:${state.persion.name},姓别:${state.persion.sex}`
    }
  }
})