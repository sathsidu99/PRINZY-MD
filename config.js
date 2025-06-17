const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "tdowxCob#9kbTr-ERDeQoqEj3IySBdc6w8757KXo6sHyiMT4AYD0",
  OWNER_NUM: process.env.OWNER_NUM || "94773259828",
  PREFIX: process.env.PREFIX || ".",
  ALIVE_IMG: process.env.ALIVE_IMG || "https://raw.githubusercontent.com/sathsidu99/PRINZY-MD-MEDIA/refs/heads/main/LOGO/alive.jpeg",
  ALIVE_MSG: process.env.ALIVE_MSG || "Hello , 𝐏𝐑𝐈𝐍𝐙𝐘 𝐌𝐃 🌈 is alive now!!\n\n> 𝐌𝐚𝐝𝐞 𝐛𝐲 𝐒𝐀𝐓𝐇𝐒𝐈𝐃𝐔 𝐀𝐆𝐑𝐄𝐒𝐀𝐑𝐀",
  AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
  MODE: process.env.MODE || "public",
  AUTO_VOICE: process.env.AUTO_VOICE || "false",
  AUTO_STICKER: process.env.AUTO_STICKER || "false",
  AUTO_REPLY: process.env.AUTO_REPLY || "false",
};
