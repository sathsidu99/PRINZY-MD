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
};
