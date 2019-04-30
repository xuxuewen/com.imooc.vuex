import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    todoList:[
      
    ]
  },
  mutations:{
    addTodo(state,todo){
      state.todoList = [
        ...state.todoList,
        todo
      ]
    },
    updateTodo(state,todo){
      let newTodoList = state.todoList.map((oldTodo)=>{
        if(oldTodo.id === todo.id){
          return todo
        }else{
          return oldTodo
        }
      })
      state.todoList = newTodoList;
    },
    reomoveTodo(state,todo){
      let newTodoList = state.todoList.filter((oldTodo)=>{
        return oldTodo.id !== todo.id
      })
      state.todoList = newTodoList;
    }
  },
  getters:{
    // 
    getName:(state, getters)=>{
      return state.name;
    }
  },
  // actions:{
  //   update
  // }
})

export default store;