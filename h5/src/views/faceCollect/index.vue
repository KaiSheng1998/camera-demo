<!-- 人脸采集 -->
<template>
  <div class="faceCollect">
    <tar-bar :title="'人脸采集'" rightText=" " @onClickRight="$router.push('/')" />
    <div class="face-collect-content">
      <img style="width:160px" src="./img/default-avatar.png" alt="">
      <div class="face-collect-content-info">
        <div v-for="(item, index) in info" :key="index">
          <span>{{ item.name }}：</span>
          <span v-if="item.prop == 'number'">{{ showNumber ? item.value : cardHide(item.value) }}
            <img @click="showNumber = !showNumber" v-show="showNumber" src="./img/eye.png" alt="">
            <img @click="showNumber = !showNumber" v-show="!showNumber" src="./img/noeye.png" alt="">
          </span>
          <span v-else>
            {{ item.value }}
          </span>
        </div>
      </div>
      <div class="face-collect-content-btn">
        <van-button type="info" @click="startCollect">开始采集</van-button>
      </div>
      <div class="face-collect-content-agree " :class="shake ? 'shake' : ''">
        <van-checkbox v-model="agreeCheck"></van-checkbox>
        <div>
          我已认真阅读并同意<span @click="viewAgreement" style="color: #008CFF;">《用户隐私协议》</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import tarBar from "../../components/tarBar/index1.vue";
export default {
  name: '',
  components: {
    tarBar,
  },
  data() {
    return {
      info: [
        { name: '姓名', value: '张三', prop: 'name' },
        { name: '学工号', value: '20243532', },
        { name: '班级', value: '现代教育技术中心' },
        { name: '人员类别', value: '学生' },
        { name: '身份证号', value: '123456789012345678', prop: 'number' },
      ],
      agreeCheck: false,
      showNumber: false,
      shake: false
    }
  },
  mounted() {

  },
  methods: {
    viewAgreement() { },


    startCollect() {
      if (!this.agreeCheck) {
        this.shake = true
        let timer = setTimeout(() => {
          this.shake = false
          clearTimeout(timer)
        }, 1000)
      }
      else {
        if (!("mediaDevices" in navigator) || !("getUserMedia" in navigator.mediaDevices)) {
          this.$toast({ msg: 'Media Capture API is not supported', type: 'error' })
          return;
        }
      }
    },
    cardHide(card) {
      const reg = /^(.{6})(?:\d+)(.{4})$/; // 匹配身份证号前6位和后4位的正则表达式
      const maskedIdCard = card.replace(reg, '$1******$2'); // 身份证号脱敏，将中间8位替换为“*”
      return maskedIdCard; // 输出：371782******5896
    }
  },
}
</script>
<style scoped lang='scss'>
$baseMargin2: calc(#{$baseMargin} * 2);

.faceCollect {
  height: 100%;
  background: #ffffff;
  padding-top: 46px;
  overflow: auto;

  .face-collect-content {
    padding: $baseMargin2;
    display: flex;
    flex-direction: column;
    align-items: center;

    .face-collect-content-info {
      margin-top: $baseMargin2;

      &>div {
        display: flex;
        line-height: 40px;

        span:first-child {
          width: 80px;
        }

        span:last-child {
          width: 180px;
          display: flex;
          align-items: center;
        }
      }

      img {
        width: 16px;

      }
    }

    .face-collect-content-btn {
      margin-top: $baseMargin;
      padding: 0 $baseMargin;
      width: 100%;

      /deep/ .van-button--normal {
        width: 100%;
        letter-spacing: 3px;
        font-size: 16px;
      }
    }

    .face-collect-content-agree {
      margin-top: $baseMargin2;
      display: flex;
      align-items: center;

      &>div {
        margin-left: 8px;
        color: #323233;
        line-height: 20px;
      }
    }
  }
}

.shake {
  animation: shake 0.6s;
}

@keyframes shake {

  0%,
  100% {
    transform: translateX(0);
  }

  10%,
  90% {
    transform: translateX(-1px);
  }

  20%,
  80% {
    transform: translateX(2px);
  }

  30%,
  70% {
    transform: translateX(-4px);
  }

  40%,
  60% {
    transform: translateX(4px);
  }

  50% {
    transform: translateX(-4px);
  }
}


</style>
