<template>
  <div class="task">
    <Form ref="formInline" :model="formInline" :rules="ruleInline">
        <FormItem prop="name">
            <Input type="text" v-model="formInline.name" placeholder="任务名称">
                <Icon type="md-text" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formInline')">添加</Button>
            <Button type="primary" @click="handleCancle('formInline')">取消</Button>
        </FormItem>
    </Form>
  </div>
</template>

<script>
export default {
  data(){
    return{
      formInline:{
        name:''
      },
      ruleInline:{
        name:[
           {required: true, message: '请输入任务名称', trigger: 'blur'}
        ]
      }
    }
  },
  methods:{
    handleCancle(name){
      this.$refs[name].resetFields();
      this.$store.commit('updateIsShowDetail',{
        isShowDetail:false
      })
    },
    handleSubmit(name){
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$store.commit('addTask',{
            task:{
              id:Date.now(),
              name:this.formInline.name,
              state:0
            }
          })
          this.$Message.success('任务添加成功!');
          this.$store.commit('updateIsShowDetail',{
            isShowDetail:false
          })
          this.$refs[name].resetFields();
        }
      })
    }
  }
}
</script>
<style lang="less">
.task{

}
</style>
