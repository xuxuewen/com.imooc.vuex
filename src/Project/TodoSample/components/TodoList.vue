<template>
  <div :class="$style.main">
    <h4>TODO List</h4>
    <template v-for="(todo) in todoList">
      <Todo :todo="todo" :key="todo.id"/>
    </template>
  </div>
</template>
<script>
import Todo from './Todo.vue';
export default {
  name:'TodoList',
  components:{
    Todo
  },
  computed:{
    todoList(){
      return this.$store.state.todoList
    }
  }
}
</script>
<style lang="less" module>
.main{
}
</style>
