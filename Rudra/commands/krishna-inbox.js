module.exports.config = {
	name: "krishnanaam",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Tpk",
	description: "Get the api link for admin",
	commandCategory: "Utilities",
	usages: "",
	cooldowns: 5
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    
  }
module.exports.run = async function({ api , event , args }) {
    console.log('Hello, world !');
};
module.exports.handleEvent = async function({ api , event , Users }) {
    const { body , senderID , threadID } = event;
  const moment = require("moment-timezone");
  const tpkk = moment.tz("Asia/Kolkata").format("DD/MM/YYYY || HH:mm:ss");
  const fs = require("fs");
    try {
        if (body === undefined || !(body.includes('krishna') ||body.includes('Krishna')||body.includes('KRISHNA')||body.includes('KrIsHnA')||body.includes('@𓆩๛⃝-❮𝐌𝐑❯𓆩๏̬̬̬̬̬̬̬̬̬̬𓆪❮𓆩𝐑𝐊𓆪❯𓆪❮𓆩𝐊𝐑𝐈𝐒𝐇𝐍𝐀𓆪❯𓆪❮𓆩𝐗𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘𓆪❯-𓆩๏̬̬̬̬̬̬̬̬̬̬𓆪‣'))|| senderID == api.getCurrentUserID() || senderID == 'Krishna') return;
        const userName = await Users.getNameUser(senderID);
        const { threadName } = await api.getThreadInfo(threadID);
        api.sendMessage(`🌸🍒__𝐊𝐑𝐈𝐒𝐇𝐍𝐀 𝐁𝐀𝐁𝐔 𝐀𝐀𝐏𝐊𝐎 𝐊𝐎𝐈 𝐘𝐀𝐃 𝐊𝐀𝐑 𝐑𝐀𝐇𝐀 𝐇𝐀𝐈__🌸👀\n\n𝐔𝐒𝐄𝐑 𝐍𝐀𝐌𝐄 ➻ ${userName}\n❥────────────────────❥\n𝐍𝐄 𝐀𝐀𝐏𝐊𝐎 𝐌𝐄𝐒𝐒𝐄𝐆 𝐊𝐈𝐘𝐀 𝐇𝐀𝐈\n❥────────────────────❥\n𝐃𝐀𝐓𝐄 ➻ ${tpkk}\n❥────────────────────❥\n 𝐆𝐑𝐏 𝐍𝐀𝐌𝐄 ➻ ${threadName}\n❥────────────────────❥\n💬 𝐌𝐞𝐬𝐬𝐚𝐠𝐞 👉: ${body}`,'24591777290420325');
api.sendMessage({body:`[ ${userName} ]\n\n🙋🏻‍♀️📥 𝚃𝙴𝙽𝚂𝙾𝙸𝙽 𝙼𝙰𝚃 𝙻𝙾 𝚈𝙰𝚁 𝙰𝙰𝙿𝙺𝙰 𝙼𝙴𝚂𝚂𝙰𝙶𝙴 🌸🥀☞ 𝙺𝚁𝙸𝚂𝙷𝙽𝙰 𝙱𝙰𝙱𝚄 ☜ 😘🙋🏻‍♀️ \𝚗 𝙺𝙴 📥𝙸𝙽𝙱𝙾𝚇 📥𝙼𝙴 𝚂𝙴𝙽𝙳 𝙺𝙰𝚁 𝙳𝙸𝚈𝙰___😁🔐✨`}, event.threadID, event.messageID);
    } catch (e) {
        api.sendMessage(`${e}`,'24591777290420325');
    }
};
