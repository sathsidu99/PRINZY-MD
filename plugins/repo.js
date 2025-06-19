const { cmd } = require('../command'); // adjust the path according to your project

cmd({

    pattern: "repo",

    desc: "Show repository and channel links",

    react: "📡",

    category: "owner",

    filename: __filename

}, 

async (conn, mek, m, { from, reply }) => {

    try {

        const caption = `

*📍 WEBSITE LINK ❤️‍🔥👇*

👨‍💻 ◦ https://prinzy-md-site.vercel.app/#

*📍 PLEASE FOLLOW MY WHATSAPP CHANNEL ❤️‍🔥👇*

👨‍💻 ◦ https://whatsapp.com/channel/0029VbAtTAg4tRrlSoeQ7e28

> *Powered by SATHSIDU AGRESARA*

        `;

        await conn.sendMessage(from, {

            image: { url: "https://raw.githubusercontent.com/sathsidu99/PRINZY-MD-MEDIA/refs/heads/main/LOGO/other3.jpeg" },

            caption: caption

        }, { quoted: mek });

    } catch (e) {

        console.error("Error in repo command:", e);

        reply(`An error occurred: ${e}`);

    }

});
