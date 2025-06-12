<template>
    <div>
        <van-nav-bar id="all"  :title="title" />
    </div>
  </template>
  <script>
  export default {
    name: 'tarBar',
    props:{
        title:String
    },
    data () {
      return {
    
      } 
    },
    methods: {
   
    },
    mounted () {
      this.maxLength = this.length ? this.length : 20
    }
  }
  /*  使用例子 只有type = input 时是有输入框的
      this.$dialog({
          title: '流程结束',
          text: '您未开启下节点处理，确定后审批流程结束，不需要下节点处理人操作！',
          // type: 'input',
          // placeholder: '请输入内容文本...',
          // length: 10,
          showCancelBtn: false,
          confirmText: '确认',
          confirm () {
          }
        })
    */
  </script>
  
  <style lang="less" scoped> 
    #all{
        background-color: #4868F1;
    //     position: fixed;
    // top: 0px;
    // left: 0px;
    // width: 100%;
    // z-index: 999;
    }
    #all /deep/ .van-ellipsis{
        color: white !important;
    }
  </style>
  