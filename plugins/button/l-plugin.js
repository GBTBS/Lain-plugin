export default class Button {
  constructor() {
    this.plugin = {
      name: "l-plugin",
      dsc: "l-plugin",
      priority: 100,
      rule: [
      {
        reg: "^#?[lL]\\s?(插件)?[\\s_]?(help|帮助)$",
        fnc: "help",
      },
      {
        reg: "^#?每日一题|随机一题|(昨日|今日)?题解",
        fnc: "LeetCode",
      },
      {
        reg: '^#?抽签|求签|御神签$',
        fnc: 'kauChim'
      },
      {
        reg: '^#?咱?(今天|明天|[早中午晚][上饭餐午]|早上|夜宵|今晚)吃(什么|啥|点啥)',
        fnc: 'what2eat'
      },
      {
        reg: '^#?不支持',
        fnc: 'tarot'
      },
      {
        reg: '^#?r(oll)? ',
        fnc: 'roll'
      },
      ]
    }
  }

  help(){
    let list
    const button = []
    list = [
      { label: '不支持', data: `不支持哦` },
      { label: '美食推荐', data: `今天吃什么` },
      { label: '求签', data: `求签` },
    ]
    button.push(...toButton(list, 3, true))
    list = [
      { label: 'LeetCode', data: `随机一题` },
    ]
    button.push(...toButton(list))
    list = [
      { label: '骰子', data: `r 1 6` },
      { label: '帮我选', data: `roll 今天吃什么 求签` },
    ]
    button.push(...toButton(list))
    return button
  }

  LeetCode(){
    const button = [
      { label: '再来一题', data: `随机一题` },
      { label: '查看题解', data: `题解` },
    ]
    return toButton(button)
  }

  kauChim(){
    const button = [
      { label: '我要解签…', data: `御神签` },
    ]
    return toButton(button, 3, true)
  }

  what2eat(){
    const button = [
      { label: '换一批', data: `今天吃什么` },
    ]
    return toButton(button, 3, true)
  }

  tarot(){
    const button = [
      { label: '再卜一卦', data: `御神签` },
    ]
    return toButton(button, 3, true)
  }

  roll(e){
    const button = [
      { label: '我不满意', data: `${e.msg.replace(/#/,'\/')}` },
    ]
    return toButton(button)
  }
}

function toButton (list, line = 3, allow_enter = false) {
  let button = []
  let arr = []
  let index = 1
  for (const i of list) {
    arr.push({
      id: String(Date.now()),
      render_data: {
        label: i.label,
        style: 1
      },
      action: {
        type: 2,
        permission: { type: 2 },
        data: i.data,
        enter: allow_enter,
        unsupport_tips: 'code: 45'
      }
    })
    if (index % line == 0 || index == list.length) {
      button.push({
        type: 'button',
        buttons: arr
      })
      arr = []
    }
    index++
  }
  return button
}
