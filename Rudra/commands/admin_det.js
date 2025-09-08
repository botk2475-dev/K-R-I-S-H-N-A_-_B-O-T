const fs = require("fs");
module.exports.config = {
  name: "admin2",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "𝙋𝙧𝙞𝙮𝙖𝙣𝙨𝙝 𝙍𝙖𝙟𝙥𝙪𝙩", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "admin",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("ADMIN")==0 || event.body.indexOf("Admin")==0 || event.body.indexOf("admin")==0 || event.body.indexOf("#admin")==0) {
    var msg = {
        body: "🌸💖 𝗢𝘄𝗻𝗲𝗿 ➻ 𝚂𝙷𝚈𝙰𝙼 𝙳𝙸𝚆𝙰𝙽𝙸 🌸🍒\n✧═════════•❁❀❁•═════════✧\n😘🍒𝗖𝗥𝗘𝗔𝗧𝗘 ➻ 🇰‌🇷‌🇮‌🇸‌🇭‌🇳‌🇦‌😍😘🌸\n✧═════════•❁❀❁•═════════✧\n [➤]➜ 𝗙𝗕 𝗟𝗜𝗡𝗞 :- ☟ ☟ ☟\nhttps://www.facebook.com/profile.php?id=61573328623221\n✧═════════•❁❀❁•═════════✧",
        attachment: 
fs.createReadStream(__dirname + `/RK/PROFILE.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🫅", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
