/*
 * @Description: eslint 配置文件
 * @Date: 2020-03-29 07:15:32
 * @Author: JackChouMine
 * @LastEditTime: 2022-01-16 18:49:40 +0800
 * @LastEditors : JackChou
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    // 'space-before-function-paren': [true, "never"]
    // quotes: [2, 'single']
  }
}
