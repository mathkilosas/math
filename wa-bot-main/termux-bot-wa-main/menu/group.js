const a = '```'
const groupp = (prefix, pushname2, groupName, user, name, uptime, jam, tanggal, premi, Simihh, Welcomee, ModeAnime, Nsfww, BadWordd, AntiLinkk, AntiVirtexx) => {
return `

╭─────≽「 *REGULAMENTO ${name}* 」
┴
┣⊱>  ${a}NOME DO USUÁRIO:${a} *${pushname2}*
┣⊱>  ${a}CHEQUE PREMIUM:${a} ${premi}
┣⊱>  ${a}LIMITE:${a} *${limitt} por dia*
│
┣⊱>  ${a}NOME GRUPO:${a} *${groupName}*
┣⊱>  ${a}MODO BEM-VINDO:${a} *${Welcomee}*
┣⊱>  ${a}MODO SIMI:${a} *${Simihh}*
┣⊱>  ${a}MODO ANIME:${a} *${ModeAnime}*
┣⊱>  ${a}MODO NSFW:${a} *${Nsfww}*
┣⊱>  ${a}MODO ANTI PALAVRÃO:${a} *${BadWordd}*
┣⊱>  ${a}MODO ANTI LINK:${a} *${AntiLinkk}*
┣⊱>  ${a}MODO ANTI VIRTEX:${a} *${AntiVirtexx}*
│
┣⊱>  ${a}HORA:${a} *${jam} WIB*
┣⊱>  ${a}DATA:${a} *${tanggal}*
┣⊱>  ${a}ATIVO:${a} ${kyun(uptime)}
┣⊱>  ${a}VERSÃO:${a} *0.0.0*
┣⊱>  ${a}USUÁRIOS REGISTRADOS:${a} *${user.length} User*
┬
╰────────────────────────

╭──≽「 *ATIVAR SE NECESSÁRIO* 」
┴
┠≽ *${prefix}antilink On/Off*
┠≽ *${prefix}welcome On/Off*
┠≽ *${prefix}grup buka/tutup*
┠≽ *${prefix}modeanime On/Off*
┠≽ *${prefix}nsfw On/Off*
┠≽ *${prefix}simih On/Off*
┠≽ *${prefix}antivirtex on/off*
┠≽ *${prefix}badword on/off*
┬
╰────────────────────────
│
╭──────≽「 *ANIME* 」
┴
┠≽ *${prefix}neonime naruto*
┠≽ *${prefix}naruto*
┠≽ *${prefix}minato*
┠≽ *${prefix}boruto*
┠≽ *${prefix}hinata*
┠≽ *${prefix}sakura*
┠≽ *${prefix}sasuke*
┠≽ *${prefix}toukachan*
┠≽ *${prefix}megumin*
┠≽ *${prefix}rize*
┠≽ *${prefix}akira*
┠≽ *${prefix}itori*
┠≽ *${prefix}kurumi*
┠≽ *${prefix}miku*
┠≽ *${prefix}anime*
┠≽ *${prefix}animecry*
┠≽ *${prefix}animekiss*
┬
╰───────────────────────
│
╭──────≽「 *SOMENTE ADMINISTRADOR DE GRUPO* 」
┴
┠≽ *${prefix}fitnah @mencionado / conteúdo / resposta*
┠≽ *${prefix}ownergrup*
┠≽ *${prefix}listonline*
┠≽ *${prefix}setpp*
┠≽ *${prefix}infogrup*
┠≽ *${prefix}add 5521xxxxxxxxx
┠≽ *${prefix}kick @mentioned*
┠≽ *${prefix}kicktime @mencionar
┠≽ *${prefix}promote @mencionar
┠≽ *${prefix}demote @mencionar
┠≽ *${prefix}setname*
┠≽ *${prefix}setdesc*
┠≽ *${prefix}linkgrup*
┠≽ *${prefix}tagme*
┠≽ *${prefix}wame*
┠≽ *${prefix}nyimak*
┠≽ *${prefix}hidetag*
┠≽ *${prefix}tagall*
┠≽ *${prefix}mentionall*
┠≽ *${prefix}adminlist*
┬
╰────────────────────────
│
╭──────≽「 *ANIME HOT* 」
┴
┠≽ *${prefix}nsfwloli*
┠≽ *${prefix}nsfwpussy*
┠≽ *${prefix}nsfwclasic*
┠≽ *${prefix}nsfwyuri*
┠≽ *${prefix}nsfwlewd*
┠≽ *${prefix}nsfwsolo*
┠≽ *${prefix}nsfweron*
┠≽ *${prefix}nsfwparadise*
┠≽ *${prefix}nsfwbigtt*
┠≽ *${prefix}nsfwecchi*
┠≽ *${prefix}nsfwcum*
┠≽ *${prefix}nsfwblowjob*
┠≽ *${prefix}nsfwneko*
┠≽ *${prefix}nsfwtrap*
┠≽ *${prefix}hentai*
┬
╰────────────────────────
`
}
exports.groupp = groupp

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);
  return `*${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik*`
}
