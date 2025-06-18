const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "YOUR_SESSION_ID", // replace your session id 
  OWNER_NUM: process.env.OWNER_NUM || "YOUR_NUMBER", // replace your number
  PREFIX: process.env.PREFIX || ".",  // enter your prefix ( ,/./@/$/%/& )
  ALIVE_IMG: process.env.ALIVE_IMG || "https://raw.githubusercontent.com/sathsidu99/PRINZY-MD-MEDIA/refs/heads/main/LOGO/alive.jpeg", // dont replace 
  ALIVE_MSG: process.env.ALIVE_MSG || "Hello , 𝐏𝐑𝐈𝐍𝐙𝐘 𝐌𝐃 🌈 is alive now!!\n\n> 𝐌𝐚𝐝𝐞 𝐛𝐲 𝐒𝐀𝐓𝐇𝐒𝐈𝐃𝐔 𝐀𝐆𝐑𝐄𝐒𝐀𝐑𝐀", // dont replace 
  AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
  MODE: process.env.MODE || "public", // replace your bot mode ( private / public / group / inbox )
  MOVIE_API_KEY: process.env.MOVIE_API_KEY || "sky|c420cf946ade926ce0b3aef2a80fde23344e1651", // replace your movie api key
};
