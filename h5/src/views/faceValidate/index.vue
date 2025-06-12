<!--  -->
<template>
  <div class="faceValidate">
    <tar-bar :title="'人脸采集'" rightText=" " @onClickRight="$router.push('/')" />
    <div class="face-validate-content">
      <div class="face-validate-content-text">照片核验中，请稍候</div>
      <div class="face-validate-content-img">
        <img src="./img/头像女@2x (1).png" alt="">
        <div class="sweep-line" :class="sweepLine ? 'sweepLine' : ''"></div>
      </div>
      <div class="face-validate-content-step">
        <div class="steps">
          <div class="step-item">
            <img v-if="aleadyStep < 1" src="./img/1h.png" alt="">
            <img v-else src="./img/yes.png" alt="">
            <span>照片质量检测</span>
          </div>
          <div class="step-line" :class="{ 'step-line-active': aleadyStep >= 1 }"></div>
          <div class="step-item">
            <img v-if="aleadyStep < 2" src="./img/2h.png" alt="">
            <img v-else src="./img/yes.png" alt="">
            <span>公安网认证</span>
          </div>
          <div class="step-line" :class="{ 'step-line-active': aleadyStep >= 2 }"></div>
          <div class="step-item">
            <img v-if="aleadyStep < 3" src="./img/3h.png" alt="">
            <img v-else src="./img/yes.png" alt="">
            <span>各场景人脸特征提前</span>
          </div>
        </div>
      </div>

      <div class="face-validate-content-other">
        <div class="other-item" v-for="item in otherList" :key="item.title">
          <span>{{ item.title }}</span>
          <van-icon v-show="!item.loading" name="checked" color="#45ad49" size="18" />
          <van-loading v-show="item.loading" type="spinner" color="#1989fa" />
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
      steptList: [
        {
          title: '照片质量检测',
        },
        {
          title: '公安网认证',
        },
        {
          title: '各场景人脸特征提取',
        },

      ],
      otherList: [
        {
          title: '智能门禁',
          loading: false,
        },
        {
          title: '一卡通',
          loading: true,
        },
        {
          title: '阳光长跑',
          loading: true,
        },
        {
          title: '体测',
          loading: true,
        },

      ],
      sweepLine: true, //照片扫描状态

      aleadyStep: 0
    }
  },
  mounted() {
    // this.$dialog({
    //   title: '',
    //   text: '照片中未识别到人脸请参考人脸采集规范重新拍摄',
    //   icon: 'close',
    //   iconColor: 'red',
    //   showCancelBtn: false,
    //   confirmText: '确认',
    //   confirm(content) {
    //   },
    // })
    let step = 0
    let timer = setInterval(() => {
      this.setCurrentStept(step)
      step += 1
      if (step > 3) {
        step = 1
        clearInterval(timer)
      }
    }, 3000)
  },
  methods: {
    setCurrentStept(step) {
      this.aleadyStep = step
      if (step == 3) {
        this.sweepLine = false
      }
    },

  },
}
</script>
<style scoped lang='scss'>
$baseMargin2: calc(#{$baseMargin} * 2);

.faceValidate {
  height: 100%;
  background: #ffffff;
  padding-top: 46px;
  overflow: auto;

  .face-validate-content {
    padding: $baseMargin2;
    display: flex;
    flex-direction: column;
    align-items: center;

    .face-validate-content-text {
      margin-bottom: $baseMargin2;
    }

    .face-validate-content-img {
      width: 180px;
      padding: $baseMargin;
      background: url('./img/avatorBg.png') no-repeat;
      background-size: 100% 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      img {
        width: 100%;
      }
    }

    .face-validate-content-step {
      margin-top: $baseMargin2;

      img {
        width: 22px;
      }

      .steps {
        &>div {
          display: flex;
          align-items: center;


          span {
            margin-left: 6px;
          }
        }

        .step-line {
          width: 100%;
          height: 20px;
          position: relative;

          &::before {
            content: '';
            position: absolute;
            left: 11px;
            top: 2px;
            bottom: 2px;
            width: 1px;
            background: #ccc;
          }
        }

        .step-line-active {
          &::before {
            background: #008cff;
          }
        }
      }
    }

    .face-validate-content-other {
      width: 40%;
      margin-top: $baseMargin2;

      .other-item {
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
  }
}

/deep/ .van-step--vertical {
  font-size: 16px;
}

/deep/ .van-step--vertical .van-step__line {
  display: none;
}

/deep/ .van-loading__spinner {
  width: 20px;
  height: 20px;
}



$container-width: 400px;
/*组件宽度*/
$container-height: 232px;
/*组件高度*/
$scan-wake-size: 5px;
/*扫描拖光的长度*/
$scan-wake-color: #2a9cfa;

.sweep-line {
  width: 100%;
  height: $scan-wake-size;
  position: absolute;
}
.sweepLine {
  animation: shake 4s linear infinite;
}

/*扫描拖光颜色*/
@keyframes shake {

  0% {
    /*最开始块从顶部往下移动，块的位置需要溢出容器，处于容器顶部上方，块的背景颜色从底部到顶部由绿色逐渐透明*/
    top: 0;
    background: linear-gradient(#0000 0%, $scan-wake-color 100%);
  }

  49% {
    /*动画进行到一半时间时，块必须移动到容器底部并溢出，完成从上到下扫描效果*/
    top:calc(#{$container-height} - #{$scan-wake-size});
    background: linear-gradient(#0000 0%, $scan-wake-color 100%);
  }

  50% {
    /*调转颜色方向，准备往回扫（从下往上）*/
    top: calc(#{$container-height} - #{$scan-wake-size});
    background: linear-gradient($scan-wake-color 0%, #0000 100%);
  }

  100% {
    /*往回扫*/
    top: 0;
    background: linear-gradient($scan-wake-color 0%, #0000 100%);
  }
}
</style>
