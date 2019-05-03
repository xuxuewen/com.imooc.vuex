import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);


const store = new Vuex.Store({
  namespace:true,
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
  modules:{
    user:{
      namespaced: true,
      state:{
        title:'username'
      },
      mutations:{
        updateTitle(state,payload){
          state.title = payload.title
        }
      },
      actions:{
        updateTitle(context,payload){
          debugger
          context.commit('updateTitle',payload)
        }
      },
      getters:{
        newTitle(state,getters){
          console.log(state)
          return state.title + Date.now()
        }
      }
    },
    product:{
      state:{
        title:'produce'
      }
    }
  }
})

export default store;