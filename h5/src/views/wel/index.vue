<template>
  <div>
    <el-row class="over_ride_content_box">
      <el-col :span="24"> </el-col>
    </el-row>
  </div>
</template>

<script>
import { getToken } from "@/util/auth";

export default {
  name: "wel",
  data() {
    return {};
  },
  computed: {},
  mounted() {
    console.log(getToken());
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
</style>

