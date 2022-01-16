/*
 * @Description: 应用入口
 * @Date: 2020-03-29 07:15:32
 * @Author: JackChouMine
 * @LastEditTime: 2022-01-16 20:26:36 +0800
 * @LastEditors : JackChou
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false // todo: 待完成

const hello = 'hello' // FIXME:待修复
console.log(hello)

// note: 这是关键代码的补充说明
// NOTE 因为设置了标签对大小写敏感，这里不会高亮
/**
 * note hello
 */
new Vue({
  router,
  // bug:这是bug,需要修复
  render: h => h(App)
}).$mount('#app')
