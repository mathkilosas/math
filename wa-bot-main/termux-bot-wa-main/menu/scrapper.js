const a = '```'
const scrapper = (prefix, pushname2, groupName, user, name) => {
return `
╭─────≽「 *REGULAMENTO ${name}* 」
┴
┣⊱  ${a}NOME USUARIO  :${a} *${pushname2}*
┣⊱  ${a}NOME DO GRUPO:${a} *${groupName}*
┣⊱  ${a}VERSÃO:${a} *0.0.0*
┣⊱  ${a}USUÁRIOS REGISTRADOS:${a} *${user.length} User*
┬
╰────────────────────────

╭──≽「 *HMMM MENU* 」
┴
┠≽ *${prefix}randomkpop*
┠≽ *${prefix}pornhub stepMoms*
┠≽ *${prefix}xvideos japan*
┠≽ *${prefix}xnxx japan*
┠≽ *${prefix}nekopoi oni chichi*
┬
╰────────────────────────
`
}
exports.scrapper = scrapper
