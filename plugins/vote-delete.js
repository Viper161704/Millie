let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) {
        await conn.sendButton(m.chat, `_*no voting in this group!*_`, '© 𝛻𝛪𝛲𝛯𝑅 𝑆𝛯𝑅', 'START VOTE', `${usedPrefix}startvote`)
        throw false
    }
    delete conn.vote[id]
    m.reply(`Succeed!`)

}
handler.help = ['deletevote']
handler.tags = ['vote']
handler.command = /^(delete|hapus)vote$/i
handler.group = true
handler.admin = true
module.exports = handler
