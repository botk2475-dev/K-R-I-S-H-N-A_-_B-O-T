const fs = require("fs");
module.exports.config = {
	name: "ram ram",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "KRISHNA-BABU", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "ram ram",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("ram ram")==0 || event.body.indexOf("Ram ram")==0 || event.body.indexOf("Ram Ram")==0 || event.body.indexOf("jay shree ram")==0 || event.body.indexOf("Jay shree ram")==0 || event.body.indexOf("Jay Shree ram")==0 || event.body.indexOf("Jay Shree Ram")==0 || event.body.indexOf("JAY SHREE RAM")==0 || event.body.indexOf("jay shri ram")==0 || event.body.indexOf("Jay shri ram")==0 || event.body.indexOf("Jay Shri ram")==0 || event.body.indexOf("Jay Shri Ram")==0 || event.body.indexOf("JAY SHRI RAM")==0 || event.body.indexOf("RAM RAM")==0) {
		var msg = {
				body: "~*⎢⎢ ≛‌⃝‌जय  ⃟⃪श्री ✬⃝राम ⎢⎢*~🌸🙏☺️𓆩꯭꯭꯭°꯭⸻᳟ͯ\n\n🦚⸻᳟ͯ𝐑𝐚𝐦 🩵꯭̽𓂃꯭𝐑𝆭𝐚𝐦___𝐉𝐢⸻᳟ͯ🌸\n\n   ꧁≛⃝💗꯭ꪸ  ⃪꯭̽ ㉿𝕣⃪꯭𝕚ຮ⃪꯭𝗵֟፝𝕟⃪꯭𝝰꯭ 🦚꯭≛⃝💖꧂",
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😘", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
