import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 创建store
const store = new Vuex.Store({
  // 初始化state
  state:{
    title:'任务管理器',
    isShowDetail:false,
    taskList:[]
  },
  mutations:{
    updateIsShowDetail(state,payload){
      state.isShowDetail = payload.isShowDetail;
    },
    addTask(state,payload){
      state.taskList = [
        ...state.taskList,
        payload.task
      ]
    },
    updateTask(state,payload){
      let newTaskList = state.taskList.map(task=>{
        if(task.id === payload.task.id){
          return payload.task
        }else{
          return task
        }
      })
      state.taskList = newTaskList
    },
    progressAll(state){
      let newTaskList = state.taskList.map(task=>{
        if(task.state === 0){
          return {
            ...task,
            state:1
          }
        }else{
          return task
        }
      })
      state.taskList = newTaskList
    },
    doneAll(state){
      let newTaskList = state.taskList.map(task=>{
        if(task.state === 1){
          return {
            ...task,
            state:2
          }
        }else{
          return task
        }
      })
      state.taskList = newTaskList
    },
    todoAll(state){
      let newTaskList = state.taskList.map(task=>{
        if(task.state === 2){
          return {
            ...task,
            state:0
          }
        }else{
          return task
        }
      })
      state.taskList = newTaskList
    }
  }
})

export default store;