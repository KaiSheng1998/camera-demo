//引入钉钉api封装

import * as dd from 'dingtalk-jsapi'
export default {
  install(Vue, options) {
    Vue.prototype.dd = {
      openLink(url) {
        dd.openLink({
          url: url,
          success: () => { },
          fail: () => { },
          complete: () => { },
        });
      },
      //判断是否在钉钉内部打开
      isInDingTalk() {
        return dd.env.platform != 'notInDingTalk'
      },
      downloadFile(url) {
        dd.downloadFile({
          header: {},
          url: url,
          success: (res) => {
            const { filePath } = res;
            console.log('filePath', filePath);
            dd.openLocalFile(filePath)
          },
          fail: () => { },
          complete: () => { },
        });
      },
      openLocalFile(url) {
        dd.openLocalFile({
          url: url,
          success: () => { },
          fail: () => { },
          complete: () => { },
        });
      }

    }
  }
}