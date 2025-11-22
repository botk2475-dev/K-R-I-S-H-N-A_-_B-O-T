const fs = require("fs");
module.exports.config = {
  name: "krishna",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "KRISHNA-BABU", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "krishna",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("krishna")==0 || event.body.indexOf("Krishna")==0 || event.body.indexOf("KRISHNA")==0 || event.body.indexOf("Krishna")==0) {
    var msg = {
        body: "꧁≛⃝💗꯭ꪸ  ⃪꯭̽ ❥༺𝙺𝚁𝙸𝚂𝙷𝙽𝙰༻❦≛⃝💖꧂\n❥────────────────────❥\n𝐁𝐎𝐓 𝐊𝐀 𝐁𝐎𝐒𝐒:-👇👇👇\n   ꧁≛⃝💗꯭ꪸ  ⃪꯭̽ ㉿𝕣⃪꯭𝕚ຮ⃪꯭𝗵֟፝𝕟⃪꯭𝝰꯭ 🦚꯭≛⃝💖꧂\n❥────────────────────❥\n😎मेरा 😚style 💚और #✴attitude🔗 #🔥 💙ही #💜कुछ अलग है💋 ✊बराबरी 😈करने जाओगे 👊# #💕तो 👌बरबाद हो ✴जाओगे# 🔫\n❥────────────────────❥\n",
        attachment: 
fs.createReadStream(__dirname + `/RK/JAAN.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🌹", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
