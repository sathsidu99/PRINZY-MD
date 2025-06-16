const { cmd, commands } = require("../command");
const getFbVideoInfo = require("fb-downloader-scrapper");

cmd(
  {
    pattern: "fb",
    alias: ["facebook"],
    react: "▶️",
    desc: "Download Facebook Video",
    category: "download",
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
      if (!q) return reply("*Please provide a valid Facebook video URL!* 🌝😹");

      // Validate the Facebook URL format
      const fbRegex = /(https?:\/\/)?(www\.)?(facebook|fb)\.com\/.+/;
      if (!fbRegex.test(q))
        return reply("*Invalid Facebook URL! Please check and try again.* 😒🙌");

      // Fetch video details
      reply("*Downloading your video...* 🌝💗");

      const result = await getFbVideoInfo(q);

      if (!result || (!result.sd && !result.hd)) {
        return reply("*Failed to download video. Please try again later.* 😒🙌");
      }

      const { title, sd, hd } = result;

      // Prepare and send the message with video details
      let desc = `
*𝐏𝐑𝐈𝐍𝐙𝐘 𝐌𝐃 𝐕𝐈𝐃𝐄𝐎 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑 🌈*

👻 *Title*: ${title || "Unknown"}
👻 *Quality*: ${hd ? "HD Available" : "SD Only"}

𝐌𝐚𝐝𝐞 𝐛𝐲 𝐒_𝐈_𝐇_𝐈_𝐋_𝐄_𝐋
        `;
      await robin.sendMessage(
        from,
        {
          image: {
            url: "https://raw.githubusercontent.com/sathsidu99/PRINZY-MD-MEDIA/refs/heads/main/LOGO/other.jpeg",
          },
          caption: desc,
        },
        { quoted: mek }
      );
      // Send the video if available
      if (hd) {
        await robin.sendMessage(
          from,
          { video: { url: hd }, caption: "----------HD VIDEO----------" },
          { quoted: mek }
        );
        await robin.sendMessage(
          from,
          { video: { url: sd }, caption: "----------SD VIDEO----------" },
          { quoted: mek }
        );
      } else if (sd) {
        await robin.sendMessage(
          from,
          { video: { url: sd }, caption: "----------SD VIDEO----------" },
          { quoted: mek }
        );
      } else {
        return reply("*No downloadable video found!* 😒🙌");
      }

      return reply("*Thanks for using 𝐏𝐑𝐈𝐍𝐙𝐘 𝐌𝐃 🌈*");
    } catch (e) {
      console.error(e);
      reply(`*Error:* ${e.message || e}`);
    }
  }
);
