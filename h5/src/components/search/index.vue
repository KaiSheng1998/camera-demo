<!-- 头部搜索 -->
<template>
  <div class="search-box">
    <van-icon name="arrow-left" size="24" @click="$router.go(-1)" />
    <van-search clearable :value="value" @input="inputSearch($event)" show-action placeholder="搜索关键词"
      @search="onSearch">
      <template #action>
        <div @click="onSearch">搜索</div>
      </template>
      <!-- 左侧自定义插槽 -->
      <template #left> 
        <slot name="left" />
      </template>
    </van-search>
   

  </div>
</template>
<script>
export default {
  name: '',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
     
    }
  },
  mounted() {

  },
  methods: {
    onSearch() {
      this.$emit('goSearch')
    },
    inputSearch($event) {
      console.log($event);
      this.$emit('input', $event)
    },
  
  },
}
</script>
<style scoped lang='scss'>
.search-box {
  display: flex;
  align-items: center;
}

/deep/ .van-search {
  flex: 1;
  background: #ffffff;
  padding: 0;
  border-radius: 16px;
  margin-left: 10px
}

/deep/ .van-search__content {
  background: #ffffff;
  border-radius: 16px;
}

/deep/ .van-search__action {
  padding: 0 12px;
  color: #999999;
  font-size: 15px;
}

/deep/ .van-icon-search:before {
  color: #999999;
  font-size: 16px;
}
</style>
