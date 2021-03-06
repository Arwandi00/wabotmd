const rewards = {
    exp: 10000,
    money: 10000,
    potion: 10,
    mythic: 10,
    legendary: 10
}
const cooldown = 5000
let handler = async (m) => {
  let user = global.db.data.users[m.sender]
  if (new Date - user.lastclaim < cooldown) throw `You have already claimed this daily claim!, wait for *${((user.lastclaim + cooldown) - new Date()).toTimeString()}*`
  let text = ''
  for (let reward of Object.keys(rewards)) {
    if (!(reward in user)) continue
    user[reward] += rewards[reward]
    text += `*+${rewards[reward]}* ${global.rpg.emoticon(reward)}${reward}\n`
  }
  m.reply(text.trim())
  user.lastclaim = new Date * 1
}
handler.help = ['daily', 'claim']
handler.tags = ['xp']
handler.command = /^(daily|claim)$/i
handler.private = true

handler.cooldown = cooldown

export default handler
