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

      let madeMenu = `🎀 「 PRINZY-MD PREMIUM MENU 」 🎀

👋 Hello, ${pushname}!
💖 Welcome to your ultimate bot experience!
━━━━━━━━━━━━━━━━━━━

🌟 MAIN PANEL 🌟
╭───────────────╮
│ ✅ .alive — Bot is Online
│ 🗂️ .menu — Display Menu
│ 🤖 .ai <your text> — AI Chat
│ 🔗 .repo — Bot Source Code
│ 👑 .owner — Owner Contact
│ 📶 .ping — Connection Speed
╰───────────────╯

━━━━━━━━━━━━━━━━━━━

🎧 MEDIA & DOWNLOAD 🎧
╭───────────────╮
│ 🎵 .song <name> — Download Song (MP3)
│ 🎞️ .video <name> — Download Video (MP4)
│ 📺 .fb <link> — Download Facebook Video
╰───────────────╯

━━━━━━━━━━━━━━━━━━━

👥 GROUP MANAGEMENT 👥 (Admins Only)
╭───────────────╮
│ 👢 .kick — Remove User
│ 🚪 .left — Bot Exit Group
│ 🔇 .mute — Mute Group
│ 🔊 .unmute — Unmute Group
│ ➕ .add — Add Member
│ 🔼 .promote — Promote to Admin
│ 🔽 .demote — Demote Admin
╰───────────────╯

━━━━━━━━━━━━━━━━━━━

🛠️ OWNER CONTROL PANEL 🛠️
╭───────────────╮
│ 🖼️ .setpp — Set Bot Profile Pic
│ ♻️ .restart — Restart Bot
│ 🔴 .shutdown — Shutdown Bot
│ 📢 .bc — Broadcast Message
│ ⛔ .block — Block User
│ ✅ .unblock — Unblock User
│ 🔗 .join — Join Group Link
│ 🚫 .leave — Leave Group
╰───────────────╯

━━━━━━━━━━━━━━━━━━━

🎯 TOOLS & UTILITIES 🎯
╭───────────────╮
│ 🖼️ .sticker — Create Sticker (reply img)
│ 🎯 .img — Convert Sticker to Image
│ 👤 .getpp — Get Profile Picture
╰───────────────╯

━━━━━━━━━━━━━━━━━━━

💎 EXTRA FEATURES 💎
╭───────────────╮
│ 🔒 Anti-Link System (soon)
│ 🔒 Anti-Virus Scan (soon)
│ 🔒 Auto-Welcome / Goodbye (soon)
│ 🔒 Tagall Members (soon)
│ 🔒 Auto Backup (soon)
╰───────────────╯

━━━━━━━━━━━━━━━━━━━

🎀 MADE BY PRINZY-MD TEAM 
🌐 POWERED BY: SATHSIDU AGRESARA

━━━━━━━━━━━━━━━━━━━

⚠️ REMEMBER:
📛 No spamming
📛 No illegal activities
📛 Respect all users
📛 Enjoy responsibly!

━━━━━━━━━━━━━━━━━━━
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
