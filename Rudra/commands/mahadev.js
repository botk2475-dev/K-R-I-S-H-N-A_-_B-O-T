const fs = require("fs");
module.exports.config = {
	name: "har-har-mahadev",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "KRISHNA-BABU", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "har-har-mahadev",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("har har mahadev")==0 || event.body.indexOf("Har har mahadev")==0 || event.body.indexOf("Har Har mahadev")==0 || event.body.indexOf("Har Har Mahadev")==0 || event.body.indexOf("HAR HAR MAHADEV")==0 || event.body.indexOf("mahadev")==0 || event.body.indexOf("Mahadev")==0 || event.body.indexOf("MAHADEV")==0 || event.body.indexOf("🔱")==0) {
		var msg = {
				body: "░⃟❘꯭꯭❈꯭🔱꯭ 𝗛꯭𝝰፝֯֟‌𝐫꯭ 𖤓꯭ 𝗛꯭𝝰፝֯֟‌꯭𝗿꯭ 𖤓꯭ 𝝡꯭𝝰꯭𝗵‌֟֯፝𝝰꯭𝝳꯭𝞊‌꯭֟֯፝𝝼꯭ 🕉𝄄꯭❈꯭❘⃟꯭░꯭",
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🔱", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
