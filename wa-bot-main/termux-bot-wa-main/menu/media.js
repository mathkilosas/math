const a = '```'
const mediaa = (prefix, pushname2, groupName, user, name) => {
return `

╭─────≽「 *REGULAMENTO ${name}* 」
┴
┣⊱  ${a}NOME DO USUÁRIO:${a} *${pushname2}*
┣⊱  ${a}NONME DO GRUPO:${a} *${groupName}*
┣⊱  ${a}VERSÃO:${a} *0.0.0*
┣⊱  ${a}USUÁRIOS REGISTRADOS:${a} *${user.length} User*
┬
╰────────────────────────

͏͏͏͏͏͏͏͏͏͏͏͏͏͏╭─────≽「 *MEDIA MENU & DOWNLOAD* 」
┴
┠≽ *${prefix}tiktokstalk usuario*
┠≽ *${prefix}igstalk usuario*
┠≽ *${prefix}tiktoksearch nick*
┠≽ *${prefix}instavid link valido*
┠≽ *${prefix}instaimg link valido*
┠≽ *${prefix}instastory usuario*
┠≽ *${prefix}ssweb url*
┠≽ *${prefix}url2img Url*
┠≽ *${prefix}tiktok*
┠≽ *${prefix}fototiktok*
┠≽ *${prefix}wait*
┬
╰────────────────────────
`
 }

exports.mediaa = mediaa
