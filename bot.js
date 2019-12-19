const Discord = require("discord.js")
//const thtime = require("./thtime")
//const chkboss = require("./chkboss")
//const databoss = require("./databoss")
const botconfig = require("./botconfig")
//const randompicz = require('./randompicz.js')
//const pic = require("./pic")

var bot = new Discord.Client()
var channelName = botconfig.channelName

var m = 0
bot.on("ready",function(){
    console.log('List GUilds : '+bot.guilds.array())
    console.log('Name Channel : '+channelName)
    console.log("Ready.....................")
})

setInterval(()=>status(), 60000);
//setInterval(()=>alertz(), 60000);

bot.on("message", (msg) => {
    
    if (msg.content === "test"){
        var titel = "Ok"
        sendEmbed(titel)
     }
      
     function sendEmbed(titel){
        const embed = new Discord.RichEmbed()
        .setTitle(titel)  //หัวข้อ
        .setAuthor("Test bot Lineage2M", "https://www.picz.in.th/images/2018/06/22/48XhJt.png")  //icon หัวขอ
        .setColor(0x112263)   //ใส่สี
        //.setDescription("```cs\n วัน '"+dayz+"'  เวลา '"+chkboss().t+"' น. \n\n ####  "+chkboss().boss+"  ####```")   //รายละเอียด
       // .addField("วัน "+dayz+" เวลา "+chkboss().t,"```cs\n"+"บอสตัวต่อไป #"+chkboss().boss+"```")
       // .setFooter("Boss Timer ThBDO "+botconfig.version+" พิมพ์ info", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Twemoji_1f437.svg/2000px-Twemoji_1f437.svg.png") //รูป ข้อความล่างสุด
       //.setImage(PicRo)     //รูปใหญ่
       // .setThumbnail(chkboss().imgboss)   //รูปเล็กขวาบนผ
        .setTimestamp()  //เวลาด้านล่างสุดผ
         msg.channel.send({embed})
   }
    
})

function status(){     
    bot.user.setGame("Lineage2M")
 
}

bot.login(process.env.BOT_TOKEN)
//bot.login(botconfig.tokenbotdiscord)
