const request = require('request');
const fs = require('fs');
const path = require('path');

module.exports.config = {
                name: "owner",
                version: "1.0.1",
                hasPermssion: 0,
                credits: "KRISHNA",
                description: "no prefix",
        usePrefix: false,
                commandCategory: "No command marks needed",
                usages: "Yo Yo",
                cooldowns: 5,
};

const gifs = [
                "https://i.postimg.cc/sgQzmQzr/PROFILE.jpg",
                "https://i.postimg.cc/BQtfZLXK/BOSS.jpg",
                "https://i.postimg.cc/FKy2C0n2/image.jpg",
                "https://i.postimg.cc/BQtfZLXK/BOSS.jpg",
                "https://i.postimg.cc/sgQzmQzr/PROFILE.jpg"
];

const messages = [
                "🌸💖 𝗢𝘄𝗻𝗲𝗿 ➻ 𝐊𝐚𝐛𝐮𝐭𝐫𝐢 𝐁𝐞𝐛𝐲 🌸🍒\n✧═════════•❁❀❁•═════════✧\n😘🍒𝗖𝗿𝗲𝗮𝘁𝗲 ➻ 🇰‌🇷‌🇮‌🇸‌🇭‌🇳‌🇦‌😍😘🌸\n✧═════════•❁❀❁•═════════✧\n🌸😘😍..𝙼𝚈 𝙾𝚆𝙽𝙴𝚁 💖 𝙼𝚁. 𝙺𝚁𝙸𝚂𝙷𝙽𝙰 𝙱𝙰𝙱𝚄 😘... <𝔼𝔻𝕀𝕋>..... 𝚈𝙴 𝙱𝙾𝚃 𝚂𝙸𝚁𝙵 𝙾𝚆𝙽𝙴𝚁 𝙺𝙴 𝙻𝙸𝚈𝙴 𝙷𝙴...... 𝙼𝚄𝙹𝙷𝙴 𝙰𝙰𝙿 𝙻𝙾𝙶𝙾 𝙺𝙾 𝙷𝙰𝚂𝙰𝙽𝙴 😁 𝙺𝙴 𝙻𝙸𝚈𝙴 𝙱𝙰𝙽𝙰𝚈𝙰 𝙶𝙰𝚈𝙰 𝙷𝙰𝙸 𝚃𝙾 𝙷𝙴𝙿𝙿𝚈 𝚁𝙴𝙷𝙰𝙽𝙰 𝙰𝙰𝙿𝙺𝙸 𝙰𝙰𝙿𝙽𝙸 👀 𝙺𝙰𝙱𝚄𝚃𝚁𝙸 𝙱𝙴𝙱𝚈.... 😍🍒👀 \n✧═════════•❁❀❁•═════════✧\n[➤]➜ 𝗙𝗕 𝗟𝗜𝗡𝗞 :- ☟ ☟ ☟\nhttps://www.facebook.com/profile.php?id=61573328623221\n✧═════════•❁❀❁•═════════✧",
                "🌸💖 𝗢𝘄𝗻𝗲𝗿 ➻ 𝐊𝐚𝐛𝐮𝐭𝐫𝐢 𝐁𝐞𝐛𝐲 🌸🍒\n✧═════════•❁❀❁•═════════✧\n😘🍒𝗖𝗿𝗲𝗮𝘁𝗲 ➻ 🇰‌🇷‌🇮‌🇸‌🇭‌🇳‌🇦‌😍😘🌸\n✧═════════•❁❀❁•═════════✧\n🌸😘😍..𝙼𝚈 𝙾𝚆𝙽𝙴𝚁 💖 𝙼𝚁. 𝙺𝚁𝙸𝚂𝙷𝙽𝙰 𝙱𝙰𝙱𝚄 😘... <𝔼𝔻𝕀𝕋>..... 𝚈𝙴 𝙱𝙾𝚃 𝚂𝙸𝚁𝙵 𝙾𝚆𝙽𝙴𝚁 𝙺𝙴 𝙻𝙸𝚈𝙴 𝙷𝙴...... 𝙼𝚄𝙹𝙷𝙴 𝙰𝙰𝙿 𝙻𝙾𝙶𝙾 𝙺𝙾 𝙷𝙰𝚂𝙰𝙽𝙴 😁 𝙺𝙴 𝙻𝙸𝚈𝙴 𝙱𝙰𝙽𝙰𝚈𝙰 𝙶𝙰𝚈𝙰 𝙷𝙰𝙸 𝚃𝙾 𝙷𝙴𝙿𝙿𝚈 𝚁𝙴𝙷𝙰𝙽𝙰 𝙰𝙰𝙿𝙺𝙸 𝙰𝙰𝙿𝙽𝙸 👀 𝙺𝙰𝙱𝚄𝚃𝚁𝙸 𝙱𝙴𝙱𝚈.... 😍🍒👀 \n✧═════════•❁❀❁•═════════✧\n[➤]➜ 𝗙𝗕 𝗟𝗜𝗡𝗞 :- ☟ ☟ ☟\nhttps://www.facebook.com/profile.php?id=61573328623221\n✧═════════•❁❀❁•═════════✧",
                "🌸💖 𝗢𝘄𝗻𝗲𝗿 ➻ 𝐊𝐚𝐛𝐮𝐭𝐫𝐢 𝐁𝐞𝐛𝐲 🌸🍒\n✧═════════•❁❀❁•═════════✧\n😘🍒𝗖𝗿𝗲𝗮𝘁𝗲 ➻ 🇰‌🇷‌🇮‌🇸‌🇭‌🇳‌🇦‌😍😘🌸\n✧═════════•❁❀❁•═════════✧\n🌸😘😍..𝙼𝚈 𝙾𝚆𝙽𝙴𝚁 💖 𝙼𝚁. 𝙺𝚁𝙸𝚂𝙷𝙽𝙰 𝙱𝙰𝙱𝚄 😘... <𝔼𝔻𝕀𝕋>..... 𝚈𝙴 𝙱𝙾𝚃 𝚂𝙸𝚁𝙵 𝙾𝚆𝙽𝙴𝚁 𝙺𝙴 𝙻𝙸𝚈𝙴 𝙷𝙴...... 𝙼𝚄𝙹𝙷𝙴 𝙰𝙰𝙿 𝙻𝙾𝙶𝙾 𝙺𝙾 𝙷𝙰𝚂𝙰𝙽𝙴 😁 𝙺𝙴 𝙻𝙸𝚈𝙴 𝙱𝙰𝙽𝙰𝚈𝙰 𝙶𝙰𝚈𝙰 𝙷𝙰𝙸 𝚃𝙾 𝙷𝙴𝙿𝙿𝚈 𝚁𝙴𝙷𝙰𝙽𝙰 𝙰𝙰𝙿𝙺𝙸 𝙰𝙰𝙿𝙽𝙸 👀 𝙺𝙰𝙱𝚄𝚃𝚁𝙸 𝙱𝙴𝙱𝚈.... 😍🍒👀 \n✧═════════•❁❀❁•═════════✧\n[➤]➜ 𝗙𝗕 𝗟𝗜𝗡𝗞 :- ☟ ☟ ☟\nhttps://www.facebook.com/profile.php?id=61573328623221\n✧═════════•❁❀❁•═════════✧",
                "🌸💖 𝗢𝘄𝗻𝗲𝗿 ➻ 𝐊𝐚𝐛𝐮𝐭𝐫𝐢 𝐁𝐞𝐛𝐲 🌸🍒\n✧═════════•❁❀❁•═════════✧\n😘🍒𝗖𝗿𝗲𝗮𝘁𝗲 ➻ 🇰‌🇷‌🇮‌🇸‌🇭‌🇳‌🇦‌😍😘🌸\n✧═════════•❁❀❁•═════════✧\n🌸😘😍..𝙼𝚈 𝙾𝚆𝙽𝙴𝚁 💖 𝙼𝚁. 𝙺𝚁𝙸𝚂𝙷𝙽𝙰 𝙱𝙰𝙱𝚄 😘... <𝔼𝔻𝕀𝕋>..... 𝚈𝙴 𝙱𝙾𝚃 𝚂𝙸𝚁𝙵 𝙾𝚆𝙽𝙴𝚁 𝙺𝙴 𝙻𝙸𝚈𝙴 𝙷𝙴...... 𝙼𝚄𝙹𝙷𝙴 𝙰𝙰𝙿 𝙻𝙾𝙶𝙾 𝙺𝙾 𝙷𝙰𝚂𝙰𝙽𝙴 😁 𝙺𝙴 𝙻𝙸𝚈𝙴 𝙱𝙰𝙽𝙰𝚈𝙰 𝙶𝙰𝚈𝙰 𝙷𝙰𝙸 𝚃𝙾 𝙷𝙴𝙿𝙿𝚈 𝚁𝙴𝙷𝙰𝙽𝙰 𝙰𝙰𝙿𝙺𝙸 𝙰𝙰𝙿𝙽𝙸 👀 𝙺𝙰𝙱𝚄𝚃𝚁𝙸 𝙱𝙴𝙱𝚈.... 😍🍒👀 \n✧═════════•❁❀❁•═════════✧\n[➤]➜ 𝗙𝗕 𝗟𝗜𝗡𝗞 :- ☟ ☟ ☟\nhttps://www.facebook.com/profile.php?id=61573328623221\n✧═════════•❁❀❁•═════════✧",
                "🌸💖 𝗢𝘄𝗻𝗲𝗿 ➻ 𝐊𝐚𝐛𝐮𝐭𝐫𝐢 𝐁𝐞𝐛𝐲 🌸🍒\n✧═════════•❁❀❁•═════════✧\n😘🍒𝗖𝗿𝗲𝗮𝘁𝗲 ➻ 🇰‌🇷‌🇮‌🇸‌🇭‌🇳‌🇦‌😍😘🌸\n✧═════════•❁❀❁•═════════✧\n🌸😘😍..𝙼𝚈 𝙾𝚆𝙽𝙴𝚁 💖 𝙼𝚁. 𝙺𝚁𝙸𝚂𝙷𝙽𝙰 𝙱𝙰𝙱𝚄 😘... <𝔼𝔻𝕀𝕋>..... 𝚈𝙴 𝙱𝙾𝚃 𝚂𝙸𝚁𝙵 𝙾𝚆𝙽𝙴𝚁 𝙺𝙴 𝙻𝙸𝚈𝙴 𝙷𝙴...... 𝙼𝚄𝙹𝙷𝙴 𝙰𝙰𝙿 𝙻𝙾𝙶𝙾 𝙺𝙾 𝙷𝙰𝚂𝙰𝙽𝙴 😁 𝙺𝙴 𝙻𝙸𝚈𝙴 𝙱𝙰𝙽𝙰𝚈𝙰 𝙶𝙰𝚈𝙰 𝙷𝙰𝙸 𝚃𝙾 𝙷𝙴𝙿𝙿𝚈 𝚁𝙴𝙷𝙰𝙽𝙰 𝙰𝙰𝙿𝙺𝙸 𝙰𝙰𝙿𝙽𝙸 👀 𝙺𝙰𝙱𝚄𝚃𝚁𝙸 𝙱𝙴𝙱𝚈.... 😍🍒👀 \n✧═════════•❁❀❁•═════════✧\n[➤]➜ 𝗙𝗕 𝗟𝗜𝗡𝗞 :- ☟ ☟ ☟\nhttps://www.facebook.com/profile.php?id=61573328623221\n✧═════════•❁❀❁•═════════✧"
];

module.exports.handleEvent = async function({ api, event, client, Users, __GLOBAL }) {
                var { threadID, messageID } = event;
                var name = await Users.getNameUser(event.senderID);

                if (event.body.toLowerCase().startsWith("owner") || 
                                event.body.toLowerCase().startsWith("Owner") || 
                                event.body.toLowerCase().startsWith("OWNER") || 
                                event.body.toLowerCase().startsWith("boss") ||
                                event.body.toLowerCase().startsWith("Boss") ||
                                event.body.toLowerCase().startsWith("BOSS") ||
                                event.body.toLowerCase().startsWith("Create")) { 

                                // Select random GIF and message
                                const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
                                const randomMessage = messages[Math.floor(Math.random() * messages.length)].replace("{name}", name);
                                const downloadPath = path.join(__dirname, 'owner-jpg-Images.jpg');

                                // Download image from Imgur
                                request(randomGif).pipe(fs.createWriteStream(downloadPath)).on('close', () => {
                                                var msg = {
                                                                body: randomMessage,
                                                                attachment: fs.createReadStream(downloadPath)
                                                };
                                                api.sendMessage(msg, threadID, messageID);
                                                api.setMessageReaction("🦋", event.messageID, (err) => {}, true);
                                });
                }
}

module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
