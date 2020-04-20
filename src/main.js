/*
 * @Description: 应用入口
 * @Date: 2020-03-29 07:15:32
 * @Author: JackChouMine
 * @LastEditTime: 2020-04-21 02:40:07
 * @LastEditors: JackChouMine
 */
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false // todo: 待完成

const hello = 'hello' // FIXME:待修复
console.log(hello)

// note: 这是关键代码的补充说明
// NOTE 因为设置了标签对大小写敏感，这里不会高亮
/**
 * note hello
 */
new Vue({
  render: h => h(App) // bug:这是bug,需要修复
}).$mount('#app')
