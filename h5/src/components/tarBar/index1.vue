<template>
  <div>
    <van-nav-bar id="all" :title="title" :right-text="rightText" left-arrow @click-left="onClickLeft"
      @click-right="onClickRight" />
  </div>
</template>
<script>
export default {
  name: 'tarBar',
  props: {
    title: String,
    rightText: {
      type: String,
      default: '全部公告'
    }
  },
  data() {
    return {

    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    onClickRight() {
      this.$emit('onClickRight')
    }
  },
  mounted() {
  }
}
</script>

<style lang="less" scoped>
#all {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  z-index: 999;

}


/deep/ .van-nav-bar__title {
  font-weight: 600;
  font-size: 18px;
}
/deep/ .van-nav-bar__right{
  font-size: 16px;
}

/deep/ .van-nav-bar__content {
  background: linear-gradient(334deg, #C1DFFD 0%, #FFFFFF 100%);
}

/deep/ .van-icon-arrow-left:before {
  color: #333333;
  font-size: 20px;
}
</style>