export default class Button {
  constructor () {
    this.plugin = {
      name: '状态按钮',
      dsc: '状态按钮',
      priority: 100,
      rule: [
        {
          reg: '^#?喵喵(命令|帮助|菜单|help|说明|功能|指令|使用说明)$',
          fnc: 'help'
        },
        {
          reg: '^#(星铁|原神)?(全部面板更新|更新全部面板|获取游戏角色详情|更新面板|面板更新)\s*(\d{9})?$',
          fnc: 'profile'
        },
        {
          reg: '^(#|\/)?(原神|星铁)?绑定(#|\/)?(绑定)?( )?(uid|UID)?( )?[1-9]',
          fnc: 'bingUid'
        },
        {
          reg: '^#(原神|星铁)?(删除)?( )?(uid|UID)',
          fnc: 'bingUid'
        },
        {
          reg: /^#*([^#]+)\s*(详细|详情|面板|面版|圣遗物|武器[1-7]?|伤害([1-9]+\d*)?)\s*(\d{9})*(.*[换变改].*)?$/,
          fnc: 'detail'
        },
        {
          reg: /^(#(原神|星铁)?(角色|查询|查询角色|角色查询|人物)[ |0-9]*$)|(^(#*uid|#*UID)\+*[1|2|5-9][0-9]{8}$)|(^#[\+|＋]*[1|2|5-9][0-9]{8})/,
          fnc: 'avatarList'
        },
        {
          reg: '#?喵喵角色卡片',
          fnc: 'avatarList'
        }
      ]
    }
  }
  help (){
    const button = [
      { label: '原神绑定', data: `/原神绑定` },
      { label: '扫码登录', data: `/扫码登录` },
      { label: '星铁绑定', data: `/星铁绑定` },

      { label: '原神体力', data: `/原神体力` },
      { label: '今日素材', data: `/今日素材` },
      { label: '原神签到', data: `/原神签到` },

      { label: '遗物列表', data: `/圣遗物列表` },
      { label: '原神深渊', data: `/深渊` },
      { label: '练度统计', data: `/原神练度统计` },
    ]
    return toButton(button, 3)
  }

  profile (e) {
    const roleList = e.newChar ? (Object.keys(e.newChar) || []) : []
    const message = []
    const button = []
    let id = Date.now()

    for (let i of roleList) {
      button.push({
        id: String(id),
        render_data: { label: i, style: 1},
        action: {
          type: 2,
          permission: { type: 2 },
          data: `/${e.game === 'sr' ? ' ' : ' '}${i}面板`
        }
      })
      ++id
    }

    /** 获取列数 */
    let batchSize = 2

    for (let i = 0; i < button.length; i += batchSize) {
      message.push({
        type: 'button',
        buttons: button.slice(i, i + batchSize)
      })
    }

    /** 顶部更新按钮 */
    message.unshift({
      type: 'button',
      buttons: [
        {
          id: '1',
          render_data: { label: '扫码登录', style: 1 },
          action: {
            type: 2,
            permission: { type: 2 },
            data: `/扫码登录`
          }
        },
        {
          id: '2',
          render_data: { label: '更新面板', "style": 1},
          action: {
            type: 2,
            permission: { type: 2 },
            data: `/${e.game === 'sr' ? '星铁' : '原神'}更新面板`
          }
        },
        {
          id: '3',
          render_data: { label: '绑定uid', style: 1 },
          action: {
            type: 2,
            permission: { type: 2 },
            data: `/${e.game === 'sr' ? '' : ''}绑定`
          }
        },
      ]
    })
    return message
  }

  bingUid(e) {
    if (e.isCustom) {
      return false
    }
    e.isCustom = true
    const game = (e.game === 'sr' || e.isSr) ? '星铁' : ''
    const list = [
      { label: '扫码登录', data: '/扫码绑定' },
    ]
    const list2 = [
      { label: '更新面板', data: `/${game}更新面板` },
      { label: '绑定uid', data: `/${game}绑定` }
    ]
    const button = []
    button.push(...toButton(list))
    button.push(...toButton(list2))
    return button
  }

  detail(e){
    if (e.isCustom) {
      return false
    }
    e.isCustom = true
    const raw = e.message[0].text.replace(/#|老婆|老公|星铁|原神/g, '').trim()
    const reg = /^#*([^#]+)\s*(详细|详情|面板|面版|圣遗物|武器[1-7]?|伤害([1-9]+\d*)?)\s*(\d{9})*(.*[换变改].*)?$/
    const name = reg.exec(raw)[1]
    const game = (e.game === 'sr' || e.isSr) ? '星铁' : ''
    if (/(详情|详细|面板)更新$/.test(raw) || (/更新/.test(raw) && /(详情|详细|面板)$/.test(raw))) {
      const button = this.profile (e)
      return button
    } else {
      const list = [
        { label: `${name}攻略`, data: `${name}攻略` },
        { label: `${name}排行`, data: `/${game}${name}排行` },
        { label: '极限面板', data: `/${game}${name}极限面板` },
        { label: '绑定uid', data: `/${game}绑定` },
        { label: '米游社登录', data: `/扫码登录` },
        { label: '更新面板', data: `/${game}更新面板` },
      ]
      const button = toButton(list)
      return button
    }
  }

  avatarList(e) {
    if (e.isCustom) {
      return false
    }
    e.isCustom = true
    const game = (e.game === 'sr' || e.isSr) ? '星铁' : ''
    const list = [
      { label: '深渊', data: `/${game}深渊` },
      { label: '探索', data: `/${game}探索` },
      { label: game == '星铁' ? '星琼' : '原石', data: `/${game == '星铁' ? '星琼' : '原石'}` },
      { label: '练度统计', data: `/${game}练度统计` },
      { label: '体力', data: `/体力` },
    ]
    const button = toButton(list,3)
    return button
  }
}

function toButton(list, line = 2) {
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