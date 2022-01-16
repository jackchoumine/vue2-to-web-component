/*
 * @Description: 应用入口
 * @Date: 2020-03-29 07:15:32
 * @Author: JackChouMine
 * @LastEditTime: 2022-01-17 01:08:13 +0800
 * @LastEditors : JackChou
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import { registerWebComponents } from './web-components.js'

Vue.config.productionTip = false

registerWebComponents(Vue)

new Vue({
  router,
  // bug:这是bug,需要修复
  render: h => h(App)
}).$mount('#app')
