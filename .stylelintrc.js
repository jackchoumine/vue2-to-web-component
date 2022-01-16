/*
 * @Description :
 * @Date        : 2022-01-17 01:14:34 +0800
 * @Author      : JackChou
 * @LastEditTime: 2022-01-17 01:40:29 +0800
 * @LastEditors : JackChou
 */
module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-html/html',
    'stylelint-config-html/vue',
  ],
  plugins: ['stylelint-order'],
  rules: {
    'stylelint(custom-property-no-missing-var-function': null,
    'order/properties-order': [
      'position',
      'top',
      'right',
      'bottom',
      'left',
      'z-index',
      'display',
      'justify-content',
      'align-items',
      'float',
      'clear',
      'overflow',
      'overflow-x',
      'overflow-y',
      // https://347830076.github.io/myBlog/standard/stylelint.html#%E8%87%AA%E5%AE%9A%E4%B9%89css%E5%B1%9E%E6%80%A7%E9%A1%BA%E5%BA%8F%E8%A7%84%E5%88%99
    ],
  },
}
