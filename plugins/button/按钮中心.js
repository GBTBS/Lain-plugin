export default class Button {
  constructor() {
    this.plugin = {
      name: "按钮中心",
      dsc: "按钮中心",
      priority: 100,
      rule: [
        {
          reg: '^#按钮中心$',
          fnc: 'buttonCenter'
        }
      ]
    }
  }
  buttonCenter(){
    let button = []
    let list = []
    list = [
      { label: '原神绑定', data: `/原神绑定` },
      { label: '扫码登录', data: `/扫码登录` }, 
      { label: '星铁绑定', data: `/星铁绑定` },
    ]
    button.push(...toButton(list,3))

    list = [
      { label: '抽卡', callback: `/抽卡` },
      { label: '求签', callback: `/求签` },
    ]
    button.push(...Bot.Button(list,4))

    list = [
      { label: '原神面板', data: `/原神更新面板` },
      { label: '星铁面板', data: `/星铁更新面板` },
    ]
    button.push(...Bot.Button(list,3))

    list = [
      { label: '添加我', data: ``, ActionType: `0` },
    ]
    button.push(...toButton(list,3))

    return button
  }
}

function toButton(list, line = 3) {
    let button = []
    let arr = []
    let index = 1
    for (const i of list) {
      arr.push({
        id: String(Date.now()),
        render_data: {
          label: i.label,
          style: i.style || 1
        },
        action: {
          type: i.ActionType || 2,
          permission: { type: 2 },
          data: i.data || i.label,
          enter: i.enter || false,
          unsupport_tips: "code: 45",
        }
      })
      if (index % line == 0 || index == list.length) {
        button.push({type: 'button',
          buttons: arr
        })
        arr = []
      }
      index++
    }
    return button
  }
