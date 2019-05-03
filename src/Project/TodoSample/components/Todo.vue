<template>
  <div :class="$style.main">
    <!-- Todo template -->
    <Checkbox 
      v-model="single" 
      @click.prevent.native="handleCheckbox">
      <span :class="todo.status?$style.comp:''">{{todo.text}}</span>
      <!-- <span>{{todo.status}}</span>  -->
      <Icon type="md-close"  @click="reomoveTodo"/>
    </Checkbox>
  </div>
</template>
<script>
export default {
  name:'Todo',
  props:{
    todo:{
      type:Object,
      required:true
    }
  },
  data:()=>({
    single:false
  }),
  methods:{
    handleCheckbox(){
      this.single = !this.single;
      // 提交状态变更
      this.$store.commit('updateTodo',{
        ...this.todo,
        status:this.single?1:0
      })
    },
    reomoveTodo(){
      this.$store.commit('reomoveTodo',{
        ...this.todo,
      })
    }
  }
}
</script>

<style lang="less" module>
.main{

  border: 1px solid #22ecd8;
  margin: 12px 0;
  padding: 8px;
  border-radius: 4px;
  .comp{
    text-decoration: line-through;
    color: #999;
  }
  :global{
    .ivu-checkbox-wrapper {
      font-size: 20px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      align-self: flex-start;
      &>span,&>i{
        flex: 1;
      }
    }
  }
}
</style>
