/**
* 获取今天的日期 yyyy-mm-dd
*/
export const getTodayDate2 = () => {
  let y = new Date().getFullYear() + '-';
  let m = (new Date().getMonth() + 1 < 10) ? '0' + (new Date().getMonth() + 1) + '-' : (new Date().getMonth() + 1) + '-';
  let d = (new Date().getDate() < 10) ? '0' + new Date().getDate() : new Date().getDate();
  let currentDate = y + m + d;
  return currentDate;
}
/**
* 获取几天前的日期
*/
export const getBeforeDate = (x) => {
  var n = x;
  var d = new Date();
  var year = d.getFullYear();
  var mon = d.getMonth() + 1;
  var day = d.getDate();
  if (day <= n) {
      if (mon > 1) {
          mon = mon - 1;
      } else {
          year = year - 1;
          mon = 12;
      }
  }
  d.setDate(d.getDate() - n);
  year = d.getFullYear();
  mon = d.getMonth() + 1;
  day = d.getDate();
  var s = year + "-" + (mon < 10 ? ('0' + mon) : mon) + "-" + (day < 10 ? ('0' + day) : day);
  return s;
}
/**
* 将new Date()转为yyyy-mm-dd
*/
export const forMatDate = (date) => {
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  m = m < 10 ? ('0' + m) : m;
  var d = date.getDate();
  d = d < 10 ? ('0' + d) : d;
  // var h = date.getHours();
  // var minute = date.getMinutes();
  // minute = minute < 10 ? ('0' + minute) : minute;
  // return y + '-' + m + '-' + d + ' ' + h + ':' + minute;
  return y + '-' + m + '-' + d + ' ';

}



