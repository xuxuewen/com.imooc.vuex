<template>
  <div class="main">
    <h4>{{title}}</h4>
    <!-- 任务页面容器 -->
    <div class="task-wrap">
      <!-- todo 待处理任务 -->
      <div class="todo-task-list">
        <div class="header">
          <span><Icon type="ios-refresh" />待处理 {{todoLength}}</span>
          <div class="action">
            <Button @click="showDetail">添加任务</Button>
            <Button @click="progressAll">全部开始处理</Button>
          </div>
        </div>
          <TaskList :state="StateDit.todo"/>
      </div>
      <!-- progress 处理中任务 -->
      <div class="progress-task-list">
        <div class="header">
          <span><Icon type="ios-refresh" />处理中 {{progressLength}}</span>
          <div class="action">
            <Button @click="doneAll">全部完成</Button>
          </div>
        </div>
        <TaskList :state="StateDit.progress"/>
      </div>
      <!-- done 已完成任务 -->
      <div class="done-task-list">
        <div class="header">
          <span><Icon type="ios-refresh" />已经完成 {{doneLength}}</span>
          <div class="action">
            <Button @click="todoAll">全部待处理</Button>
          </div>
        </div>
        <TaskList :state="StateDit.done"/>
      </div>
    </div>

    <!-- 添加task/task详情 -->
    <div class="task-add-detail" :class="{show:isShowDetail}">
      <Icon type="ios-arrow-dropright" class="arrow" @click="hiddenDetail"/>
      <Task />
    </div>
  </div>
</template>

<script>
import Task from './components/Task.vue'
import TaskList from './components/TaskList.vue'
const StateDit = {
  todo:0,
  progress:1,
  done:2
}
export default {
  name:'App',
  components:{
    Task,
    TaskList
  },
  data(){
    return {
      StateDit
    }
  },
  computed:{
    isShowDetail(){
      return this.$store.state.isShowDetail;
    },
    title(){
      return this.$store.state.title
    },
    taskTodoList(){
      return this.$store.state.taskList
    },
    todoLength(){
      return this.$store.state.taskList.filter(task=>{
        return task.state === this.StateDit.todo
      }).length
    },
    progressLength(){
      return this.$store.state.taskList.filter(task=>{
        return task.state === this.StateDit.progress
      }).length
    },
    doneLength(){
      return this.$store.state.taskList.filter(task=>{
        return task.state === this.StateDit.done
      }).length
    },
  },
  methods:{
    showDetail(){
      this.$store.commit('updateIsShowDetail',{
        isShowDetail:true
      })
    },
    hiddenDetail(){
      this.$store.commit('updateIsShowDetail',{
        isShowDetail:false
      })
    },
    progressAll(){
      this.$store.commit('progressAll')
    },
    doneAll(){
      this.$store.commit('doneAll')
    },
    todoAll(){
      this.$store.commit('todoAll')
    },
  }
}
</script>

<style lang="less">
.main{
  height: 100vh;
  padding-top: 40px;
  width: 100%;
  overflow: hidden;
  h4{
    position: absolute;
    text-align: center;
    width: 100%;
    top: 0;
    height: 40px;
    line-height: 40px;
    font-size: 24px;
    color: red;
  }
  .task-wrap{
    display: flex;
    width: 1200px;
    margin: 0 auto;
    height: 100%;
    overflow: hidden;
    // 直接div
    &>div{
      flex:1;
      border: 1px solid #e5e5e5;
      border-radius: 2px;
      margin-left: 20px;
      background: #f7f7f7;
      &:first-child{
        margin-left: 0;
      }
      .header{
        padding: 4px 10px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: rgba(74,144,226,0.04);
        color: #40485b;
        border-bottom: 1px solid #e5e5e5;
        font-size: 16px;
        span{
          i{
            font-size: 20px;
          }
          &:hover{
            cursor: pointer;
          }
        }
        .action{
          display: flex;
          justify-items: flex-end;
          button{
            margin-left: 10px;
          }
        }
      }
    }
  }
  .task-add-detail{
    position: absolute;
    top: 0;
    bottom: 0;
    right: -800px;
    width: 500px;
    background-color: #fff;
    border: 1px solid #e5e5e5;
    transition: right .4s cubic-bezier(.4,0,.2,1);
    overflow: hidden;
    padding-top: 40px;
    padding-left: 80px;
    padding-right: 80px;
    .arrow{
      font-size: 60px;
      position: absolute;
      left: 0;
      top: 50%;
      margin-top: -30px;
      color: #e5e5e5;
      &:hover{
        cursor: pointer;
      }
    }
    &.show{
      right: 0;
    }
  }
}
</style>
