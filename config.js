//════════════════════════════//
//Recode By ArullOfc 
//Berasal dari sc Xeon Bot Inc. Cheems Bot MD
//Thank you to Lord Buddha, Family and Myself
//════════════════════════════//

const fs = require("fs")
const chalk = require("chalk")

//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoreadpmngc = false //auto reading in gc and pm (true to on, false to off)
global.autoReadGc = true //auto reading in gc (true to on, false to off)
global.autoReadAll = true // auto reading in all pchat gc and status (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.available = false //auto available (true to on, false to off)

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['6287734910547'] //ur owner number
global.ownername = "Alvxy"
global.ytname = "YT:Alvin " //ur yt chanel name
global.socialm = "IG: _alv.stn" //ur github or insta name
global.location = "Indonesia, Jawa Tengah, meranggen" //ur location

//bot bombdy
global.botname = "VynBotz" //ur bot name
global.websitex = "https://youtube.com/channel/UCNBiajdnzMs8KJE19bf-OXA" //ur website
global.vidmenu = { url: 'https://a.uguu.se/eFNTvNt.mp4' } //gif and video menu
global.packname = "Sticker By"
global.author = "VynBotz"
global.themeemoji = "📀"
global.reactmoji = "🗿"
global.ownertag = ['AlvYnn'] //ur owner tag
global.ownernummenu = ['6287734910547'] //ur owner number in menu and all
global.watermark = "VynBotz" //ur watermark
global.botscript = "https://youtu.be/Gr6yuCbSGTI"
global.linkz1 = "https://chat.whatsapp.com/FmPgBh2lgqr3n1dv7aop8x"
global.linkz2 = "https://youtube.com/channel/UCNBiajdnzMs8KJE19bf-OXA"

//Bot theme media
global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic

//database
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []

//omther
global.lolhuman = "KaysaS"
global.sessionName = "session"
global.antitags = true
global.prefa = ['','!','.','🐦','🐤','🗿']
global.mess = {
    success: 'Done✓',
    admin: '*Minim Jadi Admin Dulu cok😏*',
    botAdmin: '*Bot Bukan Admin Cuy🗿*',
    owner: '*Khusus Pemilik Bot*',
    group: '*Khusus Didalam Group*',
    private: '*Khusus Chat Private*',
    bot: '*Khusus Yang Jadibot*',
    wait: '*Sabar...Orang sabar disayang janda*',
    linkm: '*Linknya Mana Cok!?*',
    error: 'Error!',
    ban: '*Yahahah diban MAMPUS! awoakowka*',
    nsfw: '*Utek Bokep Ashu🗿*',
    banChat: 'The bot was banned in this group.'
}
global.limitawal = {
    premium: "Infinity",
    free: 2,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 95,
   goldawal: 30,
   emeraldawal: 8,
   umpanawal: 10,
   potionawal: 5
}
global.limitawal = {
    rakyat: "Infinity",
    free: 100
}
// api website by xenz
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// key
global.APIKeys = {
	'https://zenzapis.xyz': 'Your Key',
}
//menu logo maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
