// menu fitur bot
const a = '```'
const help = (prefix, instagram, yt, name, pushname2, user, limitt, uptime, jam, tanggal, groupName, premi, Simihh, Welcomee, ModeAnime, Nsfww, BadWordd, AntiLinkk, AntiVirtexx) => {
	return `


╭─────≽「 *REGULAMENTO ${name}* 」
┴
┣⊱>  ${a}NOME DO USUÁRIO:${a} *${pushname2}*
┣⊱>  ${a}CHEQUE PREMIUM:${a} ${premi}
┣⊱>  ${a}LIMITE:${a} *${limitt} perhari*
│
┣⊱>  ${a}NOME DO GRUPO:${a} *${groupName}*
┣⊱>  ${a}MODO BEM-VINDO:${a} *${Welcomee}*
┣⊱>  ${a}MODO SIMI:${a} *${Simihh}*
┣⊱>  ${a}MODO ANIME:${a} *${ModeAnime}*
┣⊱>  ${a}MODO NSFW:${a} *${Nsfww}*
┣⊱>  ${a}MODE ANTI PALAVRÃO:${a} *${BadWordd}*
┣⊱>  ${a}MODO ANTI-LINK:${a} *${AntiLinkk}*
┣⊱>  ${a}MODO ANTI VIRTEX:${a} *${AntiVirtexx}*
│
┣⊱>  ${a}HORA:${a} *${jam} WIB*
┣⊱>  ${a}DATA:${a} *${tanggal}*
┣⊱>  ${a}ATIVO:${a} ${kyun(uptime)}
┣⊱>  ${a}VERSÃO:${a} *0.0.0*
┣⊱>  ${a}USUÁRIOS REGISTRADOS:${a} *${user.length} User*
┬
╰────────────────────────

╭─────≽「 *CERCA DE ${name}* 」
┴
┠─≽ *${prefix}mutualan*
│ ${a}Random Friend Chat${a}
┠─≽ *${prefix}report relatar bugs*
│ ${a}Para relatar bugs ao proprietário${a}
┠─≽ *${prefix}info*
│ ${a}Para mostrar informações do bot${a}
┠─≽ *${prefix}speed*
│ ${a}Testar Velocidade ${a}
┠─≽ *${prefix}daftar*
│ ${a}Para registrar não registrado${a}
┠─≽ *${prefix}limit*
│ ${a}Para verificar o seu limite${a}
┠─≽ *${prefix}blocklist*
│ ${a}Verifique os contatos bloqueados${a}
┠─≽ *${prefix}banlist*
│ ${a}Verificar contatos banidos${a}
┠─≽ *${prefix}premiumlist*
│ ${a}Exibe uma lista de usuários premium${a}
┠─≽ *${prefix}wame*
│ ${a}Crie o seu link de número WA${a}
┠─≽ *${prefix}cekpremium*
│ ${a}Verifique o título premium expirado e${a}
┠─≽ *${prefix}listbadword*
│ ${a}envie uma lista de palavrões${a}
┬
╰────────────────────────

╭──≽「 *RECURSOS SIMPLES ${name}* 」
┴
┠─≽ *${prefix}menucreator*
│ ${a}Recursos do Image Maker${a}
┠─≽ *${prefix}menumedia*
│ ${a}Recursos de Stalking e Downloader${a}
┠─≽ *${prefix}menugrup*
│ ${a}Recursos especiais no grupo${a}
┠─≽ *${prefix}menuothers*
│ ${a}Características Aleatórias${a}
┠─≽ *${prefix}menuinformasi*
│ ${a}Apresenta informações meteorológicas, ETC${a}
┠─≽ *${prefix}menuscrapper*
│ ${a}Recursos do Scrapper${a}
┠─≽ *${prefix}menuencrypt*
│ ${a}Recurso criptografar e descriptografar${a}
┠─≽ *${prefix}menuspam*
│ ${a}Recurso de spam${a}
┠─≽ *${prefix}menupremium*
│ ${a}Recursos para usuários premium${a}
┠─≽ *${prefix}menuowner*
│ ${a}Recursos especiais do proprietário${a}
┬
╰────────────────────────

╭────≽「 *SUPORTE ${name}* 」
┴
│➲ BOT CAIU? EXPERIMENTE TENTAR MAIS TARDE.
│➲ BOT CAIU? EXPERIMENTE TENTAR MAIS TARDE.
│➲ BOT CAIU? EXPERIMENTE TENTAR MAIS TARDE.
┬
╰──────≽ *SUPORTE*`
}

exports.help = help

// penghitung aktif bot
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);
  return `*${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik*`
}

// info bot
const bottt = (prefix) => {
return `
${a}Por enquanto, os bots só podem ser usados ​​em grupos porque,${a} \n*Aqueles de vocês que usam bots também spam*

*NOTE:*
Se este bot estiver em seu grupo de administração, diga para ativar o bot pelo caminho ${prefix}bott aktif

*Quanto à lista de menus que são públicos com o proprietário e você pode usá-los sem estar no grupo*

- ${prefix}brainly
- ${prefix}kalkulator
- ${prefix}ytsearch
- ${prefix}moddroid
- ${prefix}happymod
- ${prefix}playstore
- ${prefix}tanggaljadian
- ${prefix}stiker
- ${prefix}resepmasakan
- ${prefix}film
- ${prefix}infocuaca
- ${prefix}infogempa
- ${prefix}tahta
- ${prefix}igstalk
- ${prefix}tiktokstalk
- ${prefix}instastory
- ${prefix}translate
- ${prefix}quran
- ${prefix}tafsirquran
- ${prefix}lirik
- ${prefix}chord
- ${prefix}nulis
- ${prefix}puisiimg
- ${prefix}randomkpop
- ${prefix}quotes
- ${prefix}bucin
- ${prefix}artinama
- ${prefix}wattpad
- ${prefix}jarak
- ${prefix}infoalamat
- ${prefix}mimpi
- ${prefix}bacotandilan
- ${prefix}instavid
- ${prefix}instaimg

*Apa Yang Terbaru??*

~ random gambar KPOP ✓
~ random gambar EXO ✓
~ Fitur Anti virtex ✓
~ Fitur Anti Link ✓
~ Bacotan Dilan ✓
~ wattpad searching ✓
~ puisi dalam bentuk gambar ✓
~ Mencari resep masakan ✓
~ text to picture (bisa request warna) ✓
~ Tiktok scrapper ✓
~ instagram image downloader ✓ => command: ${prefix}instaimg link url
~ instagram video downloader ✓ => command: ${prefix}instavid link url

~ Resep Masakan ✓ => comand: ${prefix}resepmasakan rawon [ contoh]

~ Anti Virtex on/off ✓ command: ${prefix}antivirtex on
- *Gunakan Apabila Ada Yg Ngirim Virtex*

~ Anti Virtex ✓ => command: ${prefix}antivirtexx
- *Bot Akan Mengirimkan Teks Biar Member Tidak Mengalami Lag*

~ Xnxx scrapper ✓

`
}
exports.bottt = bottt
// donasi menu

const donasi = (name) => {
	return `
╭─≽「 *DOE PARA MANTER O BOT ONLINE* 」
│
│✓ ${a}Chame: wa.me/5531992502560${a}
│
│
│✓ ${a}Breve outro numero de bot criador por mim msm${a}
│
┬
╰─────≽「 *BY ${name}* 」

Para sobrevivência de bots porque a cota é cara:'
`
}
exports.donasi = donasi

const listsurah = () => {
return `
1. Al-Fatihah الفاتحة
2. Al-Baqarah البقرة
3. Ali ‘Imran آل عمران
4. An-Nisa’ النّساء
5. Al-Ma’idah المآئدة
6. Al-An’am الانعام
7. Al-A’raf الأعراف
8. Al-Anfal الأنفال
9. At-Taubah التوبة
10. Yunus ينوس
11. Hud هود
12. Yusuf يسوف
13. Ar-Ra’d الرّعد
14. Ibrahim إبراهيم
15. Al-Hijr الحجر
16. An-Nahl النّحل
17. Al-Isra’ بني إسرائيل
18. Al-Kahf الكهف
19. Maryam مريم
20. Ta Ha طه
21. Al-Anbiya الأنبياء
22. Al-Hajj الحجّ
23. Al-Mu’minun المؤمنون
24. An-Nur النّور
25. Al-Furqan الفرقان
26. Asy-Syu’ara’ الشّعراء
27. An-Naml النّمل
28. Al-Qasas القصص
29. Al-‘Ankabut العنكبوت
30. Ar-Rum الرّوم
31. Luqman لقمان
32. As-Sajdah السّجدة
33. Al-Ahzab الْأحزاب
34. Saba’ سبا
35. Fatir فاطر
36. Ya Sin يس
37. As-Saffat الصّافات
38. Sad ص
39. Az-Zumar الزّمر
40. Al-Mu’min المؤمن
41. Fussilat فصّلت
42. Asy-Syura الشّورى
43. Az-Zukhruf الزّخرف
44. Ad-Dukhan الدّخان
45. Al-Jasiyah الجاثية
46. Al-Ahqaf الَأحقاف
47. Muhammad محمّد
48. Al-Fath الفتح
49. Al-Hujurat الحجرات
50. Qaf ق
51. Az-Zariyat الذّاريات
52. At-Tur الطّور
53. An-Najm النّجْم
54. Al-Qamar القمر
55. Ar-Rahman الرّحْمن
56. Al-Waqi’ah الواقعه
57. Al-Hadid الحديد
58. Al-Mujadilah المجادلة
59. Al-Hasyr الحشْر
60. Al-Mumtahanah الممتحنة
61. As-Saff الصّفّ
62. Al-Jumu’ah الجمعة
63. Al-Munafiqun المنافقون
64. At-Tagabun التّغابن
65. At-Talaq الطّلاق
66. At-Tahrim التّحريم
67. Al-Mulk الملك
68. Al-Qalam القلم
69. Al-Haqqah الحآقّة
70. Al-Ma’arij المعارج
71. Nuh نوح
72. Al-Jinn الجنّ
73. Al-Muzzammil المزمّل
74. Al-Muddassir المدشّر
75. Al-Qiyamah القيمة
76. Al-Insan الْاٍنسان
77. Al-Mursalat المرسلات
78. An-Naba’ النّبا
79. An-Nazi’at النّازعات
80. ‘Abasa عبس
81. At-Takwir التّكوير
82. Al-Infitar الانفطار
83. Al-Tatfif المطفّفين
84. Al-Insyiqaq الانشقاق
85. Al-Buruj البروج
86. At-Tariq الطّارق
87. Al-A’la الْأعلى
88. Al-Gasyiyah الغاشية
89. Al-Fajr الفجر
90. Al-Balad البلد
91. Asy-Syams الشّمس
92. Al-Lail الّيل
93. Ad-Duha الضحى
94. Al-Insyirah الانشراح
95. At-Tin التِّينِ
96. Al-‘Alaq العَلَق
97. Al-Qadr الْقَدْرِ
98. Al-Bayyinah الْبَيِّنَةُ
99. Az-Zalzalah الزلزلة
100. Al-‘Adiyat العاديات
101. Al-Qari’ah القارعة
102. At-Takasur التكاثر
103. Al-‘Asr العصر
104. Al-Humazah الهُمَزة
105. Al-Fil الْفِيلِ
106. Quraisy قُرَيْشٍ
107. Al-Ma’un الْمَاعُونَ
108. Al-Kausar الكوثر
109. Al-Kafirun الْكَافِرُونَ
110. An-Nasr النصر
111. Al-Lahab المسد
112. Al-Ikhlas الإخلاص
113. Al-Falaq الْفَلَقِ
114. An-Nas نَاس
ِ`
}
exports.listsurah = listsurah

// bahasa list
const bahasa = (prefix) => {
return `
List Bahasa Untuk Command *${prefix}tts*

  af: Afrikaans
  sq: Albanian
  ar: Arabic
  hy: Armenian
  ca: Catalan
  zh: Chinese
  zh-cn: Chinese (Mandarin/China)
  zh-tw: Chinese (Mandarin/Taiwan)
  zh-yue: Chinese (Cantonese)
  hr: Croatian
  cs: Czech
  da: Danish
  nl: Dutch
  en: English
  en-au: English (Australia)
  en-uk: English (United Kingdom)
  en-us: English (United States)
  eo: Esperanto
  fi: Finnish
  fr: French
  de: German
  el: Greek
  ht: Haitian Creole
  hi: Hindi
  hu: Hungarian
  is: Icelandic
  id: Indonesian
  it: Italian
  ja: Japanese
  ko: Korean
  la: Latin
  lv: Latvian
  mk: Macedonian
  no: Norwegian
  pl: Polish
  pt: Portuguese
  pt-br: Portuguese (Brazil)
  ro: Romanian
  ru: Russian
  sr: Serbian
  sk: Slovak
  es: Spanish
  es-es: Spanish (Spain)
  es-us: Spanish (United States)
  sw: Swahili
  sv: Swedish
  ta: Tamil
  th: Thai
  tr: Turkish
  vi: Vietnamese
  cy: Welsh
`
}
exports.bahasa = bahasa

// Limit
const limitcount = (limitCounts) => {
        return`
Limit Kamu: ${limitCounts}
`
}
exports.limitcount = limitcount
