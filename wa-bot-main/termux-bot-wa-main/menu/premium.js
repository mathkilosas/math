const a = '```'
const menupremium = (prefix, pushname2, groupName, user, name, premium, premi) => {
return `
╭─────≽「 *REGULAMENTO${name}* 」
┴
┣⊱  ${a}NOME USUARIO:${a} *${pushname2}*
┣⊱  ${a}NOME DO GRUPO:${a} *${groupName}*
┣⊱  ${a}VERSAO:${a} *0.0.0*
┣⊱  ${a}USUARIO PREMIUM:${a} *${premi}*
┣⊱  ${a}USUÁRIOS REGISTRADOS:${a} *${user.length} User*
┬
╰────────────────────────

╭───────≽「 *SOMENTE PREMIUM* 」
┴
┠≽ *${prefix}playmp3 *
┠≽ *${prefix}fb link video*
┠≽ *${prefix}snack link pequeno video*
┠≽ *${prefix}ytmp3 link yt*
┠≽ *${prefix}ytmp4 link yt*
┠≽ *${prefix}tiktok link video tiktok*
┬
╰────────────────────────
`
}
exports.menupremium = menupremium
