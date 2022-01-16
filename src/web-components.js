/*
 * @Description :
 * @Date        : 2022-01-16 23:44:57 +0800
 * @Author      : JackChou
 * @LastEditTime: 2022-01-16 23:56:10 +0800
 * @LastEditors : JackChou
 */

export function registerWebComponents(Vue, ignoredElementsSrc = 'https://unpkg.com/web-components-jack', ignoredElements = ['my-rating', 'my-name']) {
  // import { defineCustomElements } from 'web-components-jack/loader'
  // defineCustomElements(window)
  // 引入自定义组件
  const script = document.createElement('script')
  script.type = 'module'
  script.src = ignoredElementsSrc
  document.head.appendChild(script)
  Vue.config.ignoredElements = ignoredElements
}
