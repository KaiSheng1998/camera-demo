<!-- 采集记录 -->
<template>
  <div class="collectRecords">
    <tar-bar :title="'采集记录'" rightText=" " @onClickRight="$router.push('/')" />
    <van-notice-bar left-icon="warning-o" :text="tipText" />
    <div class="collectRecords-content">
      <div class="collectRecords-content-item" v-for="item in contentList" :key="item.name">
        <img :src="item.card" alt="">
        <div class="collectRecords-content-item-right">
          <div class="name">
            <span>
              {{ item.name }}
            </span>
            <img v-show="item.status == 1" src="./img/success.png" alt="">
            <img v-show="item.status == 0" src="./img/error.png" alt="">
          </div>
          <div class="time">采集时间：{{ item.collectTime }}</div>
          <div class="desc">{{ item.desc }}</div>
          <div v-if="item.status == 0" class="noGoReason">
            <span>未通过原因：{{ item.noGoReason }}</span>
            <span>
              <img src="./img/camera.png" alt="">
              更换照片</span>
          </div>
        </div>
      </div>
    </div>
    <div class="collectRecords-btn">
      <span @click="cancle">撤销授权</span>
      <van-button type="info" @click="startCollect">全部重新采集</van-button>
    </div>
  </div>
</template>
<script>
import tarBar from "../../components/tarBar/index1.vue";
export default {
  name: '',
  components: {
    tarBar
  },
  data() {
    return {
      tipText: "共2个场景认证未通过，可更换对应场景照片重新认证",
      contentList: [
        {
          name: "照片质量检测",
          status: 1,
          collectTime: '2021-07-01',
          desc: '将采集照片与本人二代居民身份证证件人像图片比对，进行身份核验。',
          noGoReason: '五官有遮挡',
          card: require("./img/1h.png")
        },
        {
          name: "智能门禁认证",
          status: 0,
          collectTime: '2021-07-01',
          desc: '认证通过后，可刷脸通行学校大门、图书馆宿舍等门禁闸道。',
          noGoReason: '五官有遮挡',
          card: require("./img/1h.png")
        },
        {
          name: "照片质量检测",
          status: 0,
          collectTime: '2021-07-01',
          desc: '将采集照片与本人二代居民身份证证件人像图片比对，进行身份核验。',
          noGoReason: '认证接口连接超时',
          card: require("./img/1h.png")
        },
        {
          name: "照片质量检测",
          status: 1,
          collectTime: '2021-07-01',
          desc: '将采集照片与本人二代居民身份证证件人像图片比对，进行身份核验。',
          noGoReason: '五官有遮挡',
          card: require("./img/1h.png")
        },
        {
          name: "照片质量检测",
          status: 1,
          collectTime: '2021-07-01',
          desc: '将采集照片与本人二代居民身份证证件人像图片比对，进行身份核验。',
          noGoReason: '五官有遮挡',
          card: require("./img/1h.png")
        },
        {
          name: "照片质量检测",
          status: 1,
          collectTime: '2021-07-01',
          desc: '将采集照片与本人二代居民身份证证件人像图片比对，进行身份核验。',
          noGoReason: '五官有遮挡',
          card: require("./img/1h.png")
        },
      ]
    }
  },
  mounted() {

  },
  methods: {
    cancle() {
      this.$toast({ msg: '撤销授权', type: 'error' });
    },
    startCollect() {
       this.$toast({ msg: '全部重新采集', type: 'error' });
    }
  },
}
</script>
<style scoped lang='scss'>
$baseMargin2: calc(#{$baseMargin} * 2);

.collectRecords {
  height: 100%;
  background: #ffffff;
  padding-top: 46px;
  display: flex;
  flex-direction: column;

  .collectRecords-content {
    padding: $baseMargin2;
    flex: 1;
    height: 0;
    overflow: auto;

    &>div {
      display: flex;
      margin-bottom: $baseMargin;

      &>img {
        width: 80px;
        height: 106px;
        margin-right: $baseMargin;
      }

      .collectRecords-content-item-right {
        flex: 1;
        width: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .name {
          width: 100%;

          span {
            display: inline-block;
            width: calc(100% - 70px);
          }

          img {
            width: 70px;
          }
        }

        .time {
          color: #999999;
          font-size: 14px;
        }

        .desc {
          color: #999999;
          font-size: 14px;
        }

        .noGoReason {
          font-size: 14px;
          color: #F87E7E;
          display: flex;
          align-items: center;

          span:first-child {
            width: calc(100% - 80px);
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }

          span:last-child {
            display: inline-block;
            width: 80px;
            color: #008CFF;
            background: #F4F6FC;
            border-radius: 4px;
            font-size: 12px;
            padding: 6px;

            img {
              width: 15px;
              vertical-align: sub;
            }
          }

        }
      }
    }
  }

  .collectRecords-btn {
    padding: $baseMargin;
    width: 100%;
    display: flex;
    align-items: center;

    &>span {
      color: #666666;
      margin-right: $baseMargin;
    }

    /deep/ .van-button--normal {
      flex: 1;
      letter-spacing: 3px;
      font-size: 16px;
    }
  }
}

/deep/ .van-notice-bar {
  background: #FFF9ED;
  color: #F66C6C;
}
</style>
