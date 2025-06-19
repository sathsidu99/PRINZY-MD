const { cmd } = require("../command");

cmd(

  {

    pattern: "profile",

    alias: ["getpp", "bio", "about"],

    react: "📸",

    desc: "Get profile photo and about of user",

    category: "utility",

    filename: __filename,

  },

  async (robin, mek, m, { from, quoted, args, reply }) => {

    try {

      // Get target user

      let target;

      if (quoted) {

        target = quoted.sender;

      } else if (args[0]) {

        target = args[0].replace(/[^0-9]/g, "") + "@s.whatsapp.net";

      } else {

        target = m.sender;

      }

      // Get profile picture

      let ppUrl;

      try {

        ppUrl = await robin.profilePictureUrl(target, "image");

      } catch {

        ppUrl = "https://i.ibb.co/7WymZ3T/default.jpg"; // fallback if no profile pic

      }

      // Get about (bio)

      let about;

      try {

        const status = await robin.fetchStatus(target);

        about = status?.status || "No bio set.";

      } catch {

        about = "Bio not available.";

      }

      // Send profile info

      await robin.sendMessage(

        from,

        {

          image: { url: ppUrl },

          caption: `👤 *Profile Info*\n\n🆔: ${target}\n📄 *Bio*: ${about}`,

        },

        { quoted: mek }

      );

    } catch (e) {

      console.error(e);

      reply(`Error: ${e.message}`);

    }

  }

);