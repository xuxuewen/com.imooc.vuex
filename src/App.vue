<template>
  <div :class="$style.main">
    <!-- Logo 区域 -->
    <img :src="vueLogoImg" alt="vue-logo" />

    <!-- add todo form  -->
    <Form ref="form" :model="form" :rules="rules" inline>
      <FormItem prop="todo">
        <Input v-model="form.todo" placeholder="请输入Todo内容" />
      </FormItem>
      <FormItem>
        <Button type="primary" icon="ios-add-circle-outline" @click="handleSubmit('form')">增加TODO</Button>
      </FormItem>
    </Form>

    <h5> list length:{{todoListLength}} </h5>
    
    <!-- Todo list -->
    <TodoList />

    <Button @click="updateUserTitle">修改user title</Button>
    <p>{{userTitle}}</p>
  </div>
</template>
<script>
import TodoList from './components/TodoList.vue';
import vueLogoImg from './images/vue-logo.png';
export default {
  name:'App',
  components:{
    TodoList
  },
  data:function(){
    return {
      vueLogoImg,
      form:{
        todo:null
      },
      rules:{
        todo:[
          { required: true, message: '请输入Todo内容', trigger: 'blur' }
        ]
      }
    }
  },
  methods:{
    handleSubmit(name){
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$store.commit('addTodo',{
            text:this.form.todo,
            id:Date.now(),
            status:0
          })
          this.$Message.success('Success!');
        } 
      })
    },
    updateUserTitle(){
      this.$store.dispatch('user/updateTitle',{title:'1232'})
    }
  },
  computed:{
    todoListLength(){
      return this.$store.state.todoList.length
    },
    userTitle(){
      return this.$store.state.user.title
    }
  },
  mounted:function(){
    console.log(this.$root.$data)
  }
}
</script>
<style lang="less" module>
.main{
  width: 600px;
  margin: 0 auto;
  &>img{
    display: block;
    width: 200px;
    margin: 0 auto
  }
}
</style>
