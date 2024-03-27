export default class Button {
  constructor() {
    this.plugin = {
      name: "flower-plugin",
      dsc: "flower-plugin",
      priority: 100,
      rule: [
        {
            reg: '^#*(10|[武器池常驻]*([一二三四五六七八九]?[十百]+)|抽)[连抽卡奖][123武器池常驻]*$',
            fnc: 'gacha'
          },
          {
            reg: '(^#*定轨|^#定轨(.*))$',
            fnc: 'gacha'
          },
          {
            reg: '^#?(我的|领取|查询|查看)(纠缠|相遇|粉|蓝)(之缘|球)?$',
            fnc: 'gacha'
          },
          {
            reg: '^#*单抽[12武器池常驻]*$',
            fnc: 'gacha'
          },
          {
            reg: '^#*(原神)?转生$',
            fnc: 'relife'
          }
      ]
    }
  }

  gacha(e){
    const button = []
    const game = e.isSr?'星铁':''
    const weapon = e.isSr?'光锥':'武器'
    let number = e.msg.match(/(([一二三四五六七八九]?[单十百10])|抽)[连抽卡奖]/)
    let type = e.msg.match(/武器|常驻|2/)

    if(type == null){
      type = []
      type[0] = ''
    }
    type[0] = type[0].replace(/武器/, '武器池').replace(/常驻/, '常驻池')

    let list = [
      { label: `up池1`, data: `/${game}${number[0]}` },
      { label: `up池2`, data: `/${game}${number[0]}2` },
      { label: `常驻池`, data: `/${game}${number[0]}常驻池` },
    ]
    button.push(...toButton(list))

    list = [
      { label: `星铁抽卡`, data: `/${game}星铁抽卡` },
      { label: `${weapon}池`, data: `/${game}${number[0]}${weapon}池` },
    ]
    button.push(...toButton(list))

    list = [
      { label: `暂无`, data: `/${game}暂无` },
      { label: `求签`, data: `${game}/求签` },
    ]
    button.push(...toButton(list))

    number = ['刻晴','十连','单抽']
    number[0] = number[Math.floor(Math.random()*3)]
    type = ['','2','常驻池',`${weapon}池`]
    type[0] = type[Math.floor(Math.random()*4)]
    if(number[0] == '刻晴')
      list = [
        { label: `交给刻晴抽`, data: `说：“抽卡的钱被我拿去买金丝虾球了哦”` },
      ]
    else
      list = [
        { label: `交给刻晴抽`, data: `/${game}${number[0]}${type[0]}` },
      ]
    button.push(...toButton(list))

    return button
  }

  relife(){
    const button = [
        { label: `重生提瓦特之我是`, data: `/转生` },
    ]
    return toButton(button)
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
        style: 1
      },
      action: {
        type: 2,
        permission: { type: 2 },
        data: i.data,
        enter: true,
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
