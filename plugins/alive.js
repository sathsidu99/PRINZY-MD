const { cmd } = require('../command');

const config = require('../config');

const moment = require('moment');

const pkg = require('../package.json');

const { runtime } = require('../lib/functions');

cmd({

    pattern: "alive",

    desc: "Check if bot is online.",

    react: "🌈",

    category: "main",

    filename: __filename

}, 

async (robin, mek, m, { from, quoted, reply }) => {

    try {

        const uptime = runtime(process.uptime());

        const version = pkg.version || "1.0.0";

        const creator = "Sathsidu Agresara";

        const contact = "+94742179316";

        const aliveText = `🌟 *Bot is Alive* 🌟

🤖 *Name:* PRINZY-MD

⚙️ *Version:* ${version}

👑 *Creator:* ${creator}

📞 *Contact:* ${contact}

⏰ *Uptime:* ${uptime}

📅 *Date:* ${moment().format('YYYY-MM-DD')}

🕰 *Time:* ${moment().format('HH:mm:ss')}`;

        const imageUrl = config.ALIVE_IMG || "https://raw.githubusercontent.com/sathsidu99/PRINZY-MD-MEDIA/refs/heads/main/LOGO/other3.jpeg";

        await robin.sendMessage(from, { 

            image: { url: imageUrl }, 

            caption: aliveText,

            footer: "Powered by PRINZY-MD",

            templateButtons: [

                { index: 1, urlButton: { displayText: "GitHub Repo", url: "https://github.com/sathsidu99/PRINZY-MD" } },

                { index: 2, callButton: { displayText: "Contact Creator", phoneNumber: contact } },

                { index: 3, quickReplyButton: { displayText: "Ping Bot", id: "ping" } }

            ]

        }, { quoted: mek });

        await robin.sendPresenceUpdate('recording', from);

        await robin.sendMessage(from, { 

            audio: { url: "https://github.com/sathsidu99/PRINZY-MD-MEDIA/raw/refs/heads/main/AUDIO/alive.mp3" }, 

            mimetype: 'audio/mpeg', 

            ptt: true 

        }, { quoted: mek });

    } catch (err) {

        console.error("Alive Command Error:", err);

        await reply(`❌ Error occurred: ${err.message}`);

    }

});
