const fs = require("fs");
module.exports.config = {
	name: "radhe-radhe",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "KRISHNA-BABU", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "radhe-radhe",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("radhe radhe")==0 || event.body.indexOf("Radhe radhe")==0 || event.body.indexOf("Radhe Radhe")==0 || event.body.indexOf("RADHE RADHE")==0 || event.body.indexOf("radhe krishna")==0 || event.body.indexOf("Radhe krishna")==0 || event.body.indexOf("Radhe Krishna")==0 || event.body.indexOf("RADHE KRISHNA")==0 || event.body.indexOf("radhe Radhe")==0) {
		var msg = {
				body: "~*⎢⎢ ≛‌⃝‌जय  ⃟⃪श्री ✬⃝राधा रानी ⎢⎢*~🌸🙏☺️𓆩꯭꯭꯭°꯭⸻᳟ͯ\n\n🦚⸻᳟ͯ𝐑𝆭𝐚𝐝𝐡𝆭𝐞꯭⃗ 🩵꯭̽𓂃꯭𝐑𝆭𝐚𝐝𝐡𝆭𝐞⃗⸻᳟ͯ🌸\n\n   ꧁≛⃝💗꯭ꪸ  ⃪꯭̽ ㉿𝕣⃪꯭𝕚ຮ⃪꯭𝗵֟፝𝕟⃪꯭𝝰꯭ 🦚꯭≛⃝💖꧂",
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🦋", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
