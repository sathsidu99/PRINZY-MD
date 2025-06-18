const {cmd , commands} = require('../command')

const config = require('../config');

cmd({

    pattern: "alive",

    desc: "Check bot online or not.",

    react: "🌈",

    category: "main",

    filename: __filename

},

async (robin, mek, m, { from, quoted, reply }) => {

    try {

        // Send image with caption

        await robin.sendMessage(from, { 

            image: { url: config.ALIVE_IMG }, 

            caption: config.ALIVE_MSG 

        }, { quoted: mek });

        // (Optional) Show bot is recording (can be removed if you don't need it)

        await robin.sendPresenceUpdate('recording', from);

        // Send alive audio

        await robin.sendMessage(from, { 

            audio: { url: "https://github.com/sathsidu99/PRINZY-MD-MEDIA/raw/refs/heads/main/AUDIO/alive.mp3" }, 

            mimetype: 'audio/mpeg', 

            ptt: true 

        }, { quoted: mek });

        

    } catch (e) {

        console.log(e);

        reply(`${e}`);

    }

});