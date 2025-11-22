module.exports.config = {
        name: "joinNoti",
        eventType: ["log:subscribe"],
        version: "1.0.1",
        credits: "CatalizCS", //fixing ken gusler
        description: "Notify bot or group member with random gif/photo/video",
        dependencies: {
                "fs-extra": "",
                "path": "",
                "pidusage": ""
        }
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

        const path = join(__dirname, "cache", "joinGif");
        if (existsSync(path)) mkdirSync(path, { recursive: true });        

        const path2 = join(__dirname, "cache", "joinGif", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}


module.exports.run = async function({ api, event }) {
        const { join } = global.nodemodule["path"];
        const { threadID } = event;
        if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
                api.changeNickname(`{ ${global.config.PREFIX} } × ${(!global.config.BOTNAME) ? "bot" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
                const fs = require("fs");
                return api.sendMessage("꧁≛⃝💗꯭ꪸ  ⃪꯭̽ 𝙷𝙴𝙻𝙻𝙾_𝙶𝚄𝚈'𝚂🦚꯭≛⃝💖꧂", event.threadID, () => api.sendMessage({body:`┏━💌━━❀🩵🦋🫅🏻🦋🩵❀━━💌━┓\n     ꧁≛⃝💗꯭ꪸ  ⃪꯭̽ ㉿𝕣⃪꯭𝕚ຮ⃪꯭𝗵֟፝𝕟⃪꯭𝝰꯭ 🦚꯭≛⃝💖꧂\n┗━💌━━❀🩵🦋🫅🏻🦋🩵❀━━💌━┛\n✧═════════•❁❀❁•═════════✧\n🤖👽🤖👽🤖👽🤖👽🤖👽🤖👽🤖👽\n               🇼‌🇪‌🇱‌🇨‌🇴‌🇳‌🇪‌\n꧁≛⃝💗꯭ꪸ  ⃪꯭̽ 𝙺𝙰𝚁𝙾=𝙹𝙰𝙻𝚃𝙸=𝙹𝙰𝙻𝚃𝙸=𝙰𝙰𝙿\n=𝙻𝙾𝙶𝙾=𝙺𝙰=𝙿𝚈𝙰𝚁𝙰=\n=𝙺𝚁𝙸𝚂𝙷𝙽𝙰=🫅🏻=𝙱𝙾𝚃=𝙽𝙴=𝙴𝙽𝙳𝙴𝚁=𝙺𝙰𝚁=𝙳𝙸𝚈𝙰=𝙰𝙰𝙿𝙺𝙴\n=𝙿𝚈𝙰𝚁𝙴=𝙶𝚁𝙾𝚄𝙿=𝙼𝙴 🦚꯭≛⃝💖꧂\n✧═════════•❁❀❁•═════════✧\n       😘🦋___𝗔𝗕 𝗦𝗔𝗕 𝗟𝗢𝗚___🩵🐿️\n          🔱____🇲‌🇦‌🇸‌🇹‌🇮‌____🔱  \n🌹🌴___𝗞𝗔𝗥𝗢 𝗠𝗘𝗥𝗘 𝗦𝗔𝗧𝗛___💋🌹\n✧═════════•❁❀❁•═════════✧\n     😻💫___𝐁𝐎𝐓 𝐊𝐀 𝐎𝐖𝐍𝐄𝐑 :- ☟☟☟\n✨🩷___𝐌𝐑.༄𒁍≛⃝𝕂ℝ𝕀𝕊ℍℕ𝔸-𝔹𝔸𝔹𝕌 🍒🌸\n✧═════════•❁❀❁•═════════✧\n             📂📝___𝗙𝗕=𝗟𝗜𝗡𝗞  ☟☟☟\nhttps://www.facebook.com/profile.php?id=61573328623221\n✧═════════•❁❀❁•═════════✧\nUse ${global.config.PREFIX}help to see commands.\nexample :\n${global.config.PREFIX}video7 (video songs)\n${global.config.PREFIX}music (audio songs)\n${global.config.PREFIX}help2 (command list)\n${global.config.PREFIX}info\n✧═════════•❁❀❁•═════════✧\n   ⚜️ \n𝚃𝙴𝙻𝙴𝙶𝚁𝙰𝙼 𝚄𝚂𝙴𝚁𝙽𝙰𝙼𝙴 :- ☟☟☟  ⚜️\n     ( @KRISHNA_BRAND_LEGEND )\n✧═════════•❁❀❁•═════════✧\n   ⚜️  𝚈𝙾𝚄𝚃𝚄𝙱𝙴 𝚄𝚂𝙴𝚁𝙽𝙰𝙼𝙴 :- ☟☟☟  ⚜️\n          ( @KRISHNADAVANG-RK )`, attachment: fs.createReadStream(__dirname + "/cache/KRISHNA_RK_BRAND.png")} ,threadID));
        }
        else {
                try {
                        const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
                        let { threadName, participantIDs } = await api.getThreadInfo(threadID);

                        const threadData = global.data.threadData.get(parseInt(threadID)) || {};
                        const path = join(__dirname, "cache", "joinGif");
                        const pathGif = join(path, `${threadID}.gif`);

                        var mentions = [], nameArray = [], memLength = [], i = 0;

                        for (id in event.logMessageData.addedParticipants) {
                                const userName = event.logMessageData.addedParticipants[id].fullName;
                                nameArray.push(userName);
                                mentions.push({ tag: userName, id });
                                memLength.push(participantIDs.length - i++);
                        }
                        memLength.sort((a, b) => a - b);

                        (typeof threadData.customJoin == "undefined") ? msg = "┏━💌━━❀🩵🦋🫅🏻🦋🩵❀━━💌━┓\n     ꧁≛⃝💗꯭ꪸ  ⃪꯭̽ ㉿𝕣⃪꯭𝕚ຮ⃪꯭𝗵֟፝𝕟⃪꯭𝝰꯭ 🦚꯭≛⃝💖꧂\n┗━💌━━❀🩵🦋🫅🏻🦋🩵❀━━💌━┛\n✧═════════•❁❀❁•═════════✧\n💝🍒 𝗡𝗘𝗪 𝗠𝗘𝗠𝗕𝗘𝗥 ➻ [ {name} ]\n✧═════════•❁❀❁•═════════✧\n🌸🍒 𝗚𝗥𝗢𝗨𝗣 𝗡𝗔𝗠𝗘 ➻ [ {threadName} ]\n✧═════════•❁❀❁•═════════✧\n🤓🌸 𝙾𝚁 𝚃𝚄𝙼 𝙴𝚂 𝙶𝚁𝙾𝚄𝙿 𝙺𝙴 ⭆[ {soThanhVien} ]⭅𝙼𝙴𝙼𝙱𝙴𝚁 𝙷𝙾 🥰🩵\n😘 𝙼𝙴𝚁𝙴 𝚂𝙰𝚃𝙷 𝙼𝙰𝚂𝚃𝙸 𝙺𝙰𝚁𝙾 𝙰𝙰𝙿𝙺𝙰 𝙿𝚈𝙰𝚁𝙰 𝙺𝚁𝙸𝚂𝙷𝙽𝙰 𝙱𝙾𝚃___ 🍒💝🙋🏻‍♀️\n✧═════════•❁❀❁•═════════✧\n     😻💫___𝐁𝐎𝐓 𝐊𝐀 𝐎𝐖𝐍𝐄𝐑 :- ☟☟☟\n✨🩷___𝐌𝐑.༄𒁍≛⃝𝕂ℝ𝕀𝕊ℍℕ𝔸-𝔹𝔸𝔹𝕌 🍒🌸\n✧═════════•❁❀❁•═════════✧\n             📂📝___𝗙𝗕=𝗟𝗜𝗡𝗞  ☟☟☟\nhttps://www.facebook.com/profile.php?id=61573328623221\n✧═════════•❁❀❁•═════════✧\n   ⚜️ 𝚃𝙴𝙻𝙴𝙶𝚁𝙰𝙼 𝚄𝚂𝙴𝚁𝙽𝙰𝙼𝙴 :- ☟☟☟  ⚜️\n     ( @KRISHNA_BRAND_LEGEND )\n✧═════════•❁❀❁•═════════✧\n   ⚜️  𝚈𝙾𝚄𝚃𝚄𝙱𝙴 𝚄𝚂𝙴𝚁𝙽𝙰𝙼𝙴 :- ☟☟☟  ⚜️\n          ( @KRISHNADAVANG-RK )" : msg = threadData.customJoin;
                        msg = msg
                        .replace(/\{name}/g, nameArray.join(', '))
                        .replace(/\{type}/g, (memLength.length > 1) ?  'You' : 'Friend')
                        .replace(/\{soThanhVien}/g, memLength.join(', '))
                        .replace(/\{threadName}/g, threadName);

                        if (existsSync(path)) mkdirSync(path, { recursive: true });

                        const randomPath = readdirSync(join(__dirname, "cache", "joinGif", "randomgif"));

                        if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
                        else if (randomPath.length != 0) {
                                const pathRandom = join(__dirname, "cache", "joinGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
                                formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
                        }
                        else formPush = { body: msg, mentions }

                        return api.sendMessage(formPush, threadID);
                } catch (e) { return console.log(e) };
        }
}
