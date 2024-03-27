export default class Button {
  constructor () {
    this.plugin = {
      name: 'xiaoye-plugin',
      dsc: 'xiaoye-plugin',
      priority: 99,
      rule: [
        {
          reg: '^#?小叶(插件)?帮助$',
          fnc: 'help'
        },
        {
          reg: '^#*刷圣遗物.*$',
          fnc: 'chuhuoba'
        },
        {
          reg: '^#*(一键)?强化圣遗物([一二三四五六七八九十]|[0-9])*([\+到至]([一二三四五六七八九十]|[0-9])+级?)?$',
          fnc: 'qianghua'
        },
        {
          reg: '^#*查看(副本|圣遗物)别名$',
          fnc: 'alias'
        },
        {
          reg: '^#*查看上次圣遗物$',
          fnc: 'viewLastTime'
        },
        {
          reg: '^#*保存圣遗物([一二三四五六七八九十]|[0-9])*$',
          fnc: 'save'
        },
        {
          reg: '^#*查看圣遗物(第([一二三四五六七八九十]|[0-9])+页)?$',
          fnc: 'view'
        },
        {
          reg: '^#*删除圣遗物([一二三四五六七八九十]|[0-9])+$',
          fnc: 'delete'
        }
      ]
    }
  }

  async help () {
    const button = [
      { label: '刷遗物随机', callback: '刷圣遗物随机' },
      { label: '刷遗物xx', data: '刷圣遗物' },

      { label: '强化遗物1-20', data: '强化圣遗物' },
      { label: '看上次遗物', callback: '查看上次圣遗物' },
      { label: '保存遗物1-9', data: '保存圣遗物' },

      { label: '删遗物id', data: '删除圣遗物' },
      { label: '查看圣遗物别名', callback: '查看圣遗物别名' },
      { label: '刷遗物xx，x次', data: '刷圣遗物x次' },

      { label: '一键强化遗物', callback: '一键强化圣遗物' },
      { label: '查看遗物第x页', data: '查看圣遗物第x页' }
    ]
    return Bot.Button(button, 2)
  }
  //上面是小叶帮助

  async chuhuoba () {
    const button = [
      { label: '刷遗物随机', callback: '刷圣遗物随机' },
      { label: '刷遗物xx', data: '刷圣遗物' },

      { label: '强化遗物1-20', data: '强化圣遗物' },
      { label: '看上次遗物', callback: '查看上次圣遗物' },
      { label: '保存遗物1-9', data: '保存圣遗物' },

      { label: '删遗物id', data: '删除圣遗物' },
      { label: '查看圣遗物别名', callback: '查看圣遗物别名' },
      { label: '刷遗物xx，x次', data: '刷圣遗物x次' },

      { label: '一键强化遗物', callback: '一键强化圣遗物' },
      { label: '查看遗物第x页', data: '查看圣遗物第x页' }
    ]
    return Bot.Button(button, 2)
  }
//上面是刷圣遗物


  async qianghua () {
    const button = [
      { label: '刷遗物随机', callback: '刷圣遗物随机' },
      { label: '刷遗物xx', data: '刷圣遗物' },

      { label: '强化遗物1-20', data: '强化圣遗物' },
      { label: '看上次遗物', callback: '查看上次圣遗物' },
      { label: '保存遗物1-9', data: '保存圣遗物' },

      { label: '删遗物id', data: '删除圣遗物' },
      { label: '查看圣遗物别名', callback: '查看圣遗物别名' },
      { label: '刷遗物xx，x次', data: '刷圣遗物x次' },

      { label: '一键强化遗物', callback: '一键强化圣遗物' },
      { label: '查看遗物第x页', data: '查看圣遗物第x页' }
    ]
    return Bot.Button(button, 2)
  }
//上面是强化圣遗物


  async alias () {
    const button = [
      { label: '刷遗物随机', callback: '刷圣遗物随机' },
      { label: '刷遗物xx', data: '刷圣遗物' },

      { label: '强化遗物1-20', data: '强化圣遗物' },
      { label: '看上次遗物', callback: '查看上次圣遗物' },
      { label: '保存遗物1-9', data: '保存圣遗物' },

      { label: '删遗物id', data: '删除圣遗物' },
      { label: '查看圣遗物别名', callback: '查看圣遗物别名' },
      { label: '刷遗物xx，x次', data: '刷圣遗物x次' },

      { label: '一键强化遗物', callback: '一键强化圣遗物' },
      { label: '查看遗物第x页', data: '查看圣遗物第x页' }
    ]
    return Bot.Button(button, 2)
  }
//上面是查看圣遗物别名

  async viewLastTime () {
    const button = [
      { label: '刷遗物随机', callback: '刷圣遗物随机' },
      { label: '刷遗物xx', data: '刷圣遗物' },

      { label: '强化遗物1-20', data: '强化圣遗物' },
      { label: '看上次遗物', callback: '查看上次圣遗物' },
      { label: '保存遗物1-9', data: '保存圣遗物' },

      { label: '删遗物id', data: '删除圣遗物' },
      { label: '查看圣遗物别名', callback: '查看圣遗物别名' },
      { label: '刷遗物xx，x次', data: '刷圣遗物x次' },

      { label: '一键强化遗物', callback: '一键强化圣遗物' },
      { label: '查看遗物第x页', data: '查看圣遗物第x页' }
    ]
    return Bot.Button(button, 2)
  }
//上面是查看上次圣遗物


async save () {
    const button = [
      { label: '刷遗物随机', callback: '刷圣遗物随机' },
      { label: '刷遗物xx', data: '刷圣遗物' },

      { label: '强化遗物1-20', data: '强化圣遗物' },
      { label: '看上次遗物', callback: '查看上次圣遗物' },
      { label: '保存遗物1-9', data: '保存圣遗物' },

      { label: '删遗物id', data: '删除圣遗物' },
      { label: '查看圣遗物别名', callback: '查看圣遗物别名' },
      { label: '刷遗物xx，x次', data: '刷圣遗物x次' },

      { label: '一键强化遗物', callback: '一键强化圣遗物' },
      { label: '查看遗物第x页', data: '查看圣遗物第x页' }
    ]
    return Bot.Button(button, 2)
  }
//上面是保存圣遗物



async view () {
    const button = [
      { label: '刷遗物随机', callback: '刷圣遗物随机' },
      { label: '刷遗物xx', data: '刷圣遗物' },

      { label: '强化遗物1-20', data: '强化圣遗物' },
      { label: '看上次遗物', callback: '查看上次圣遗物' },
      { label: '保存遗物1-9', data: '保存圣遗物' },

      { label: '删遗物id', data: '删除圣遗物' },
      { label: '查看圣遗物别名', callback: '查看圣遗物别名' },
      { label: '刷遗物xx，x次', data: '刷圣遗物x次' },

      { label: '一键强化遗物', callback: '一键强化圣遗物' },
      { label: '查看遗物第x页', data: '查看圣遗物第x页' }
    ]
    return Bot.Button(button, 2)
  }
//上面是查看圣遗物第几页



async delete () {
    const button = [
      { label: '刷遗物随机', callback: '刷圣遗物随机' },
      { label: '刷遗物xx', data: '刷圣遗物' },

      { label: '强化遗物1-20', data: '强化圣遗物' },
      { label: '看上次遗物', callback: '查看上次圣遗物' },
      { label: '保存遗物1-9', data: '保存圣遗物' },

      { label: '删遗物id', data: '删除圣遗物' },
      { label: '查看圣遗物别名', callback: '查看圣遗物别名' },
      { label: '刷遗物xx，x次', data: '刷圣遗物x次' },

      { label: '一键强化遗物', callback: '一键强化圣遗物' },
      { label: '查看遗物第x页', data: '查看圣遗物第x页' }
    ]
    return Bot.Button(button, 2)
  }
//上面是删除圣遗物


}
