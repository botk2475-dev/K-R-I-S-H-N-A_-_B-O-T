module.exports.config = {
  name: "inf",
  version: "1.0.1", 
  hasPermssion: 0,
  credits:"KRISHNA" ,
  description: "THIS BOT IS MADE BY KRISHNA BABU",
  usePrefix: true,
  commandCategory: "INFORMATION",
  cooldowns: 1,
  dependencies: 
  {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
    hours = Math.floor(time / (60 * 60)),
    minutes = Math.floor((time % (60 * 60)) / 60),
    seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
const juswa = moment.tz("Asia/Kolkata").format("DD/MM/YYYY || HH:mm:s");
var link =                                     
["https://i.postimg.cc/1XFbGqd0/KRISHNA-RK-BRAND.png","https://i.postimg.cc/BQtfZLXK/BOSS.jpg","https://i.postimg.cc/fRD1dkf8/JAAN.jpg"];
var callback = () => api.sendMessage({body:`◁➽▷𝐁𝐎𝐓 💖 𝐈𝐍𝐅𝐎 ◁➽▷\n\n✧═════════•❁❀❁•═════════✧\n         😻 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡 😻\n         ✧═════════•❁❀❁•═════════✧\n\n𝗕𝗢𝗧 𝗡𝗔𝗠𝗘   →  🦋😻 [ ${global.config.BOTNAME} ]😻💞\n✧═════════•❁❀❁•═════════✧\n😍👀 𝗢𝘄𝗻𝗲𝗿 :- ༄𒁍≛⃝𝐊𝐑𝐈𝐒𝐇𝐍𝐀-𝐁𝐀𝐁𝐔🌸꯭꯭꯭꯭᭄❥ 🌸🍒\n✧═════════•❁❀❁•═════════✧\n\n*╔══❖•ೋ° °ೋ•❖══╗\n*💋*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀 :- 𝕂ℝ𝕀𝕊ℍℕ𝔸 𝔹𝔸𝔹𝕌\n*╚══❖•ೋ° °ೋ•❖══╝*\n\n✧═════════•❁❀❁•═════════✧\n😻𝗕𝗢𝗧 𝗣𝗥𝗘𝗙𝗜𝗫   → 🍒🦋   [ ${global.config.PREFIX} ]🌸🔙\n✧═════════•❁❀❁•═════════✧\n🦋🍒 𝗗𝗔𝗧𝗘 & 𝗧𝗜𝗠𝗘   → [ ${juswa} ]\n✧═════════•❁❀❁•═════════✧\n💞🌸 𝗕𝗢𝗧 𝗥𝗨𝗡𝗡𝗜𝗡𝗚 𝗧𝗜𝗠𝗘 🌞🌸\n   [ ${hours}:${minutes}:${seconds} ]\n✧═════════•❁❀❁•═════════✧\n𝗢𝗪𝗡𝗘𝗥 𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 𝗟𝗜𝗡𝗞 ⥥⥥⥥⥥⥥⥥\nhttps://www.facebook.com/profile.php?id=61573328623221\n✧═════════•❁❀❁•═════════✧\n   ⚜️ \n𝚃𝙴𝙻𝙴𝙶𝚁𝙰𝙼 𝚄𝚂𝙴𝚁𝙽𝙰𝙼𝙴 :- ☟☟☟  ⚜️\n     ( @KRISHNA_BRAND_LEGEND )\n✧═════════•❁❀❁•═════════✧\n   ⚜️  𝚈𝙾𝚄𝚃𝚄𝙱𝙴 𝚄𝚂𝙴𝚁𝙽𝙰𝙼𝙴 :- ☟☟☟  ⚜️\n          ( @KRISHNADAVANG-RK )`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
