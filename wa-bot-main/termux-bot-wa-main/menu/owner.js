const a = '```'
const ownerrr = (prefix, pushname2, groupName, user, name) => {
return `

╭─────≽「 *REGULAMENTO${name}* 」
┴
┣⊱  ${a}NOME DO USUÁRIO:${a} *${pushname2}*
┣⊱  ${a}NOME DO GRUPO:${a} *${groupName}*
┣⊱  ${a}VERSÃO:${a} *0.0.0*
┣⊱  ${a}USUÁRIOS REGISTRADOS:${a} *${user.length} User*
┬
╰────────────────────────

╭────────≽「 *SÓ PROPRIETÁRIO* 」
┴
┠≽ *${prefix}addstatus*
┠≽ *${prefix}addbadword*
┠≽ *${prefix}dellbadword*
┠≽ *${prefix}zalgo*
┠≽ *${prefix}vapor*
┠≽ *${prefix}pitch*
┠≽ *${prefix}addpremium mencionar*
┠≽ *${prefix}dellpremium mencionar*
┠≽ *${prefix}setmemlimit*
┠≽ *${prefix}setlimit*
┠≽ *${prefix}setreply*
┠≽ *${prefix}setprefix*
┠≽ *${prefix}setnamebot*
┠≽ *${prefix}setppbot*
┠≽ *${prefix}setreplyimage*
┠≽ *${prefix}sharelock*
┠≽ *${prefix}chatlist*
┠≽ *${prefix}bc*
┠≽ *${prefix}bcgc*
┠≽ *${prefix}ban*
┠≽ *${prefix}unban*
┠≽ *${prefix}block*
┠≽ *${prefix}unblock*
┠≽ *${prefix}clearall*
┠≽ *${prefix}delete*
┠≽ *${prefix}clone*
┠≽ *${prefix}leave*
┬
╰────────────────────────
`
}
exports.ownerrr = ownerrr
