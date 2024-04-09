Bot.processContent = async function (content, message, e = {}) {
  const start = e.user_id ? `![Lain-plugin #30px #30px](https://q1.qlogo.cn/g?b=qq&s=100&nk=${e.user_id}) [@${(e.sender.card || e.sender.nickname).replace(/[\u0000-\u001F]/g, '')}](mqqapi://card/show_pslcard?src_type=internal&version=1&uin=${e.user_id})\r***\r` : `![Lain-plugin #30px #30px](https://q1.qlogo.cn/g?b=qq&s=100&nk=${e.self_id}) [@${(Bot[e.self_id].nickname).replace(/[\u0000-\u001F]/g, '')}](mqqapi://card/show_pslcard?src_type=internal&version=1&uin=${e.self_id})\r***\r`
  const end = '喵~'
  content = start + content + end
  return { content, message }
}
