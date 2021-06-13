const a = '```'
const encrypt = (prefix, pushname2, groupName, user, name) => {
return `
╭─────≽「 *REGULAMENTO ${name}* 」
┴
┣⊱  ${a}NOME DO USUÁRIO:${a} *${pushname2}*
┣⊱  ${a}NOME DO GRUPO:${a} *${groupName}*
┣⊱  ${a}VERSÃO:${a} *0.0.0*
┣⊱  ${a}USUÁRIOS REGISTRADOS:${a} *${user.length} User*
┬
╰────────────────────────

╭─────≽「 *ENCRIPTO E DESCRIPTO* 」
┴
┠≽ *${prefix}encode64 fragmento*
┠≽ *${prefix}decode64 criptografar*
┠≽ *${prefix}hexaencode fragmento*
┠≽ *${prefix}hexadecode criptografar*
┠≽ *${prefix}encbinary fragmento*
┠≽ *${prefix}decbinary criptografar*
┠≽ *${prefix}encoctal fragmento*
┠≽ *${prefix}decoctal criptografar*
┠≽ *${prefix}dorking idiota*
┠≽ *${prefix}whois Domínio*
┠≽ *${prefix}hostsearch Domínio*
┠≽ *${prefix}dnslookup IP/Domínio*
┠≽ *${prefix}geoip IP*
┠≽ *${prefix}nping IP*
┠≽ *${prefix}pastebin texto*
┠≽ *${prefix}tinyurl link*
┠≽ *${prefix}bitly link*
┠≽ *${prefix}hashidentifier Criptografar Hash*
┬
╰────────────────────────
`
}
exports.encrypt = encrypt
