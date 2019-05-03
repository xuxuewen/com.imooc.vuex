<template>
  <div class="task-list">
    <template v-for="(task,index) in taskListByState">
      <Card class="task" :key="index">
        <Checkbox @click.prevent.native="progress(task)" v-if="state === 0">
          <span class="name">{{task.name}}</span>
        </Checkbox>
        <Checkbox @click.prevent.native="done(task)" v-if="state === 1">
          <span class="name">{{task.name}}</span>
        </Checkbox>
        <Checkbox @click.prevent.native="todo(task)" v-if="state === 2">
          <span class="name">{{task.name}}</span>
        </Checkbox>

      </Card>
    </template>
  </div>
</template>

<script>
export default {
  name:'TaskList',
  props:{
    state:{
      type:Number,
      required:true
    }
  },
  data(){
    return{

    }
  },
  computed:{
    taskListByState(){
      return this.$store.state.taskList.filter(task=>{
        return task.state === this.state;
      })
    }
  },
  methods:{
    todo(task){
      this.$store.commit('updateTask',{
        task:{
          ...task,
          state:0
        }
      })
    },
    progress(task){
      this.$store.commit('updateTask',{
        task:{
          ...task,
          state:1
        }
      })
    },
    done(task){
      this.$store.commit('updateTask',{
        task:{
          ...task,
          state:2
        }
      })
    }
  }
}
</script>
<style lang="less">
.task-list{
  padding: 10px;
  .task{
    margin-bottom: 10px;
    .name{
      margin-left: 20px;
    }
  }
}
</style>
