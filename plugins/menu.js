const { cmd, commands } = require("../command");
const config = require('../config');

cmd(
  {
    pattern: "menu",
    alise: ["list"],
    react: "📜",
    desc: "get cmd list",
    category: "main",
    filename: __filename,
  },
  async (
    robin,
    mek,
    m,
    {
      from,
      quoted,
      body,
      isCmd,
      command,
      args,
      q,
      isGroup,
      sender,
      senderNumber,
      botNumber2,
      botNumber,
      pushname,
      isMe,
      isOwner,
      groupMetadata,
      groupName,
      participants,
      groupAdmins,
      isBotAdmins,
      isAdmins,
      reply,
    }
  ) => {
    try {

      let menu = {
        main: "",
        download: "",
        group: "",
        owner: "",
        convert: "",
        search: "",
      };

      for (let i = 0; i < commands.length; i++) {
        if (commands[i].pattern && !commands[i].dontAddCommandList) {
          menu[
            commands[i].category
          ] += `${config.PREFIX}${commands[i].pattern}\n`;
        }
      }

      let madeMenu = `👋 *Hello  ${pushname}*


| *MAIN COMMANDS* |
    ▫️.alive
    ▫️.menu
    ▫️.ai <text>
    ▫️.system
    ▫️.owner
    ▫️.ping
| *DOWNLOAD COMMANDS* |
    ▫️.song <text>
    ▫️.video <text>
    ▫️.fb <link>
| *GROUP COMMANDS* |
    ▫️.block
    ▫️.kick
    ▫️.left
    ▫️.mute
    ▫️.unmute
    ▫️.add
    ▫️.demote
    ▫️.promote
| *OWNER COMMANDS* |
    ▫️.setpp  
    ▫️.restart  
    ▫️.shutdown  
    ▫️.bc  
    ▫️.block  
    ▫️.unblock  
    ▫️.join  
    ▫️.leave
| *CONVERT COMMANDS* |
    ▫️.sticker <reply img>
    ▫️.img <reply sticker>

*𝐌𝐚𝐝𝐞 𝐛𝐲 𝐒𝐀𝐓𝐇𝐒𝐊𝐃𝐔 𝐀𝐆𝐑𝐄𝐒𝐀𝐑𝐀 😊💗*

> 𝐏𝐑𝐈𝐍𝐙𝐘-𝐌𝐃 MENU MSG
`;
      await robin.sendMessage(
        from,
        {
          image: {
            url: "https://raw.githubusercontent.com/sathsidu99/PRINZY-MD-MEDIA/refs/heads/main/LOGO/menu.jpeg",
          },
          caption: madeMenu,
        },
        { quoted: mek }
      );
      await robin.sendPresenceUpdate('recording', from);
       await robin.sendMessage(from, { audio: { url: "https://github.com/sathsidu99/PRINZY-MD-MEDIA/raw/refs/heads/main/AUDIO/menu.mp3" }, mimetype: 'audio/mpeg', ptt: true }, { quoted: mek });
    } catch (e) {
      console.log(e);
      reply(`${e}`);
    }
  }
);
