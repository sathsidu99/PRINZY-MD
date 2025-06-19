const { cmd } = require('../command'); // adjust the path according to your project

cmd({

    pattern: "owner",

    desc: "CREATOR INFO",

    react: "👑",

    category: "owner",

    filename: __filename

}, 

async (conn, mek, m, { from, reply }) => {

    try {

        const caption = `
👑 *Bot Owner Information*

• Name: Sathsidu Agresara

• Number: +94742179316

• Telegram: @sasi_9x

• GitHub: https://github.com/sathsidu99

• Email: sathsiduagresara@gmail.com

        `;

        await conn.sendMessage(from, {

            image: { url: "https://ibb.co/tT5YqmMm" },

            caption: caption

        }, { quoted: mek });

    } catch (e) {

        console.error("Error in repo command:", e);

        reply(`An error occurred: ${e}`);

    }

});