export default class Button {
  constructor () {
    this.plugin = {
      // 插件名称
      name: '通用按钮',
      // 描述
      dsc: '通用按钮',
      // 按钮优先级
      priority: 5000,
      rule: [
        {
          /** 命令正则匹配 */
          reg: /^#?扫雷/,
          /** 执行方法 */
          fnc: 'test'
        },
        {
          reg: /^((\s*标记\s*)?挖开 \d+,\d+\s*(标记\s*)?)+$/,
          fnc: 'test'
       }
      ]
    }
  }

  /** 执行方法 */
  test (e) {
    if(e.button)
      return e.button
    else 
      return true
  }
}
