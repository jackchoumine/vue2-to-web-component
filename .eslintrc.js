/*
 * @Description: eslint 配置文件
 * @Date: 2020-03-29 07:15:32
 * @Author: JackChouMine
 * @LastEditTime: 2020-04-21 02:50:04
 * @LastEditors: JackChouMine
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'space-before-function-paren': [true, "never"]
  }
}
