<template>
  <div id="app">
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
  </div>
</template>

<script>

export default {
  name: "App",
  data() {
    return {
    };
  },
  computed: {

  },
  created() {
  },
  methods: {

  }
}
</script>

<style lang="less"></style>
