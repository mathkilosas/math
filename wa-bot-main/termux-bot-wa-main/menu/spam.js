const a = '```'
const spam = (prefix, pushname2, groupName, user, name) => {
return `

╭─────≽「 *REGULAMENTO ${name}* 」
┴
┣⊱  ${a}NOME DO USUÁRIO:${a} *${pushname2}*
┣⊱  ${a}NOME DO GRUPO:${a} *${groupName}*
┣⊱  ${a}VERSÃO:${a} *0.0.0*
┣⊱  ${a}USUÁRIOS REGISTRADOS:${a} *${user.length} User*
┬
╰────────────────────────

╭─────≽「 *SPAMMER MENU* 」
┴
┠≽ *${prefix}spamcall 5521xxxxxxxxx*
┠≽ *${prefix}spamgmail email@gmail.com,*
┬
╰────────────────────────
`
}
exports.spam = spam
