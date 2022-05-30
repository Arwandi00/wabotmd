import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Use example ${usedPrefix}${command} Minecraft`
    const res = await googleImage(text)
    conn.sendFile(m.chat, res.getRandom(), 'gimage.jpg', `
*── 「 GOOGLE IMAGE 」 ──*

Result from *${text}*
`.trim(), m)
}
handler.help = ['Khusus Owner']
handler.tags = ['owner']
handler.command = /^(gimage1|image1)$/i
handler.owner = true

export default handler