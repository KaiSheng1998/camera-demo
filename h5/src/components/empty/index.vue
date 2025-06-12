<!-- 空状态 -->
<template>
  <div class="empty-box flex-col align-center justify-center">
    <img src="./bg.png" alt="">
    <p>{{ description }}</p>
  </div>
</template>
<script>
export default {
  name: '',
  props: {
    description: {
      type: String,
      default: '暂无数据',
    }
  },
  data() {
    return {
    }
  },
  mounted() {

  },
  methods: {

  },
}
</script>
<style scoped lang='scss'>
.empty-box {
  width: 100%;
  height: 100%;
  margin-top: 0 !important;

  img {
    max-width: 60%;
  }
}
</style>
