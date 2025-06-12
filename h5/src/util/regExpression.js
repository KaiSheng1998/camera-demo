/*** 输入框的配置*/
export const inputConfig={
  maxLength:32,
  maxLength2:64,
  maxLength3:255,
  inputPattern:/^[\u4e00-\u9fa5a-zA-Z0-9_]+$/,
}
/*** 文本域的配置*/
export const textareaConfig={
  maxLength:200,
  /*** 特殊字符 /[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]/    */
  inputPattern:/[`""''“”‘’&\<\>|\/\\]/,    
}