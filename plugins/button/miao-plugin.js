export default class Button {
  constructor () {
    this.plugin = {
      name: 'miao-plugin',
      dsc: 'miao-plugin',
      priority: 101,
      rule: [
        {
          reg: '^#?喵喵(命令|帮助|菜单|help|说明|功能|指令|使用说明)$',
          fnc: 'help'
        },
        {
          reg: /^#(星铁|原神)?获取游戏角色详情( )?(\d{9})?$/,
          fnc: 'profile'
        },
        {
          reg: /^#(星铁|原神)?(更新)?(全部)?面板(更新)?( )?(\d{9})?$/,
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
          reg: /^#?(原神|星铁)?(群|群内)?(排名|排行)?(最强|最高|最高分|最牛|第一)+.+/,
          fnc: 'rank'
        },
        {
          reg: /^#?(原神|星铁)?(群|群内)?(.*)(排名|排行)(榜)?$/,
          fnc: 'rank'
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
      { label: '圣遗物', data: `/圣遗物列表` },
      { label: '深渊', data: `/喵喵深渊` },
      { label: '练度统计', data: `/原神练度统计` },

      { label: '原神体力', data: `/原神体力` },
      { label: '今日素材', data: `/今日素材` },
      { label: '原神签到', data: `/原神签到` },

      { label: '绑定uid', data: `/原神绑定` },
      { label: '米游社扫码', data: `/扫码登录` },
      { label: '更新面板', data: `/原神更新面板` },
    ]
    return Bot.Button(button, 3)
  }

  profile (e) {
    const roleList = e?.newChar ? (Object.keys(e.newChar) || []) : []
    const message = []
    const button = []
    let id = Date.now()

    const list = [
      { label: '扫码登录', data: '/扫码登录' },
      { label: '更新面板', data: `/${e.game === 'sr' ? '星铁' : '原神'}更新面板` },
      { label: '绑定uid', data: `/${e.game === 'sr' ? '星铁' : '原神'}绑定` },
    ]
    button.push(...Bot.Button(list))

    const list2 = []
    for (let role of roleList)
      list2.push({ label: role, data: `/${e.game === 'sr' ? '星铁' : '原神'}${role}面板` })
    button.push(...Bot.Button(list2, 2))
    return button
  }

  bingUid(e) {
    const game = (e.game === 'sr' || e.isSr) ? '星铁' : ''
    const list = [
      { label: '扫码登录', data: '/扫码绑定' },
    ]
    const list2 = [
      { label: '更新面板', data: `/${game}更新面板` },
      { label: '绑定uid', data: `/${game}绑定` }
    ]
    const button = []
    button.push(...Bot.Button(list))
    button.push(...Bot.Button(list2))
    return button
  }

  rank(e){
    const game = (e.game === 'sr' || e.isSr) ? '星铁' : ''
    const role = e.msg.replace(/(#| |老婆|老公|星铁|原神|最强|最高分|排名|排行|第一|最高|最牛|圣遗物|评分|群|群内|面板|面版|武器[1-7]?|伤害([1-9]+\d*)?)/g,'')
    const list = [
      { label: `最强${ (role == '') ? '面板' : role }`, data: `/最强${role}` },
      { label: `最高分${ (role == '') ? '面板' : role }`, data: `/最高分${role}` },

      { label: '最强排行', data: `/最强${role}排行` },
      { label: '最高分排行', data: `/最高分${role}排行` },

      { label: `${ (role == '') ? '更新' : role }面板`, data: `/${game}${ (role == '') ? '更新' : role }面板` },
    ]
    return Bot.Button(list, 2)
  }

  detail(e){
    const raw = e.raw_message.replace(/\*|\/|#|极限|核爆|辅助|平民|毕业|老婆|老公|星铁|原神/g, '').trim()
    const reg = /^#*([^#]+)\s*(详细|详情|面板|面版|圣遗物|武器[1-7]?|伤害([1-9]+\d*)?)\s*(\d{9})*(.*[换变改].*)?$/
    const name = reg.exec(raw)[1]
    const game = (e.game === 'sr' || e.isSr) ? '星铁' : ''
    if (/(详情|详细|面板)更新$/.test(raw) || (/更新/.test(raw) && /(详情|详细|面板)$/.test(raw))) {
      const button = this.profile (e)
      return button
    } else {
      const button = []
      const list = [
        { label: `${name}攻略`, data: `/${game}${name}攻略` },
        { label: `${name}排行`, data: `/${game}${name}排行` },

        { label: `${name}面板`, data: `/${game}${name}面板` },
        { label: '极限面板', data: `/${game}${name}极限面板` },
      ]
      button.push(...Bot.Button(list, 2))
      const list2 = [
        { label: '绑定uid', data: `/${game}绑定` },
        { label: '扫码登录', data: `/扫码登录` },
        { label: '更新面板', data: `/${game}更新面板` },
      ]
      button.push(...Bot.Button(list2))
      return button
    }
  }

  avatarList(e) {
    const game = (e.game === 'sr' || e.isSr) ? '星铁' : ''
    const list = [
      { label: '深渊', data: `/${game}深渊` },
      { label: '探索', data: `/${game}探索` },
      { label: game == '星铁' ? '星琼' : '原石', data: `/${game == '星铁' ? '星琼' : '原石'}` },
      { label: '练度统计', data: `/${game}练度统计` },
      { label: '体力', data: `/体力` },
    ]
    const button = Bot.Button(list,3)
    return button
  }
}