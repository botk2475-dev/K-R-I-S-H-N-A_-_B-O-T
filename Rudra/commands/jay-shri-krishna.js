const fs = require("fs");
module.exports.config = {
	name: "jay shree krishna",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "KRISHNA-BABU", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "jay shree krishna",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("jay shree krishna")==0 || event.body.indexOf("Jay shree krishna")==0 || event.body.indexOf("Jay Shree krishna")==0 || event.body.indexOf("Jay Shree Krishna")==0 || event.body.indexOf("JAY SHREE KRISHNA")==0 || event.body.indexOf("jay shri krishna")==0 || event.body.indexOf("Jay shri krishna")==0 || event.body.indexOf("Jay Shri krishna")==0 || event.body.indexOf("Jay Shri Krishna")==0 || event.body.indexOf("JAY SHRI KRISHNA")==0 || event.body.indexOf("jay shri shyam")==0 || event.body.indexOf("Jay shri shyam")==0 || event.body.indexOf("Jay Shri shyam")==0 || event.body.indexOf("Jay Shri Shyam")==0 || event.body.indexOf("JAY SHRI SHYAM")==0 || event.body.indexOf("jay shree shyam")==0 || event.body.indexOf("Jay shree shyam")==0 || event.body.indexOf("Jay Shree shyam")==0 || event.body.indexOf("Jay Shree Shyam")==0 || event.body.indexOf("JAY SHREE SHYAM")==0) {
		var msg = {
				body: "~*⎢⎢ ≛‌⃝‌जय  ⃟⃪श्री ✬⃝कृष्णा ⎢⎢*~🌸🙏☺️𓆩꯭꯭꯭°꯭⸻᳟ͯ\n\n🦚⸻᳟ͯ𝐑𝆭𝐚𝐝𝐡𝆭𝐞꯭⃗ 🩵꯭̽𓂃꯭𝐑𝆭𝐚𝐝𝐡𝆭𝐞⃗⸻᳟ͯ🌸\n\n   ꧁≛⃝💗꯭ꪸ  ⃪꯭̽ ㉿𝕣⃪꯭𝕚ຮ⃪꯭𝗵֟፝𝕟⃪꯭𝝰꯭ 🦚꯭≛⃝💖꧂",
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🐿️", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
