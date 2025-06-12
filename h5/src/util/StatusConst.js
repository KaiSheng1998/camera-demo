const warnLevel1 = 1; //严重
const warnLevel2 = 2; //主要
const warnLevel3 = 3; //次要
const warnLevel4 = 4; //提示
const warnLevelData = [
  {
    label:'严重',
    value:warnLevel1
  },
  {
    label:'主要',
    value:warnLevel2
  },
  {
    label:'次要',
    value:warnLevel3
  },
  {
    label:'提示',
    value:warnLevel4
  }
]
const warnLevelList = {
  [warnLevel1]: '严重',
  [warnLevel2]: '主要',
  [warnLevel3]: '次要',
  [warnLevel4]: '提示'
}
const warnColor = {
  1:'#F66C6C',
  2:'#FF8900',
  3:'#4BC364',
  4:'#2575E5'
}
export {
  warnLevel1,
  warnLevel2,
  warnLevel3,
  warnLevel4,
  warnLevelData,
  warnLevelList,
  warnColor
}
