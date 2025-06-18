const { cmd } = require('../command');
const config = require('../config');

// Only owner middleware
function isOwnerCheck(sender) {
    const ownerNumber = config.OWNER_NUM;  // updated OWNER_NUM
    return sender.includes(ownerNumber);
}

// Get quoted number helper
function getQuotedNumber(quoted) {
    if (!quoted) return null;
    if (quoted.key?.participant) {
        return quoted.key.participant.split('@')[0];
    } else if (quoted.key?.remoteJid) {
        return quoted.key.remoteJid.split('@')[0];
    }
    return null;
}

// Set Profile Picture
cmd({
    pattern: 'setpp',
    desc: 'Set bot profile picture',
    react: "🖼️",
    category: 'owner',
    filename: __filename
}, async (client, m, message, { from, sender, quoted }) => {
    if (!isOwnerCheck(sender)) return client.sendMessage(from, { text: "🚫 Only Owner!" }, { quoted: m });
    if (!quoted) return client.sendMessage(from, { text: "📸 Reply to image." }, { quoted: m });
    const media = await quoted.download();
    await client.updateProfilePicture(client.user.id, media);
    await client.sendMessage(from, { text: "✅ 🖼️ Profile picture updated." }, { quoted: m });
});



// Restart
cmd({
    pattern: 'restart',
    desc: 'Restart bot',
    react: "🔄",
    category: 'owner',
    filename: __filename
}, async (client, m, message, { from, sender }) => {
    if (!isOwnerCheck(sender)) return client.sendMessage(from, { text: "🚫 Only Owner!" }, { quoted: m });
    await client.sendMessage(from, { text: "♻️ Restarting bot..." }, { quoted: m });
    process.exit(0);
});

// Shutdown
cmd({
    pattern: 'shutdown',
    desc: 'Shutdown bot',
    react: "🛑",
    category: 'owner',
    filename: __filename
}, async (client, m, message, { from, sender }) => {
    if (!isOwnerCheck(sender)) return client.sendMessage(from, { text: "🚫 Only Owner!" }, { quoted: m });
    await client.sendMessage(from, { text: "🛑 Shutting down..." }, { quoted: m });
    process.exit(1);
});

// Broadcast (quoted message)
cmd({
    pattern: 'bc',
    desc: 'Broadcast quoted message',
    react: "📢",
    category: 'owner',
    filename: __filename
}, async (client, m, message, { from, sender, quoted }) => {
    if (!isOwnerCheck(sender)) return client.sendMessage(from, { text: "🚫 Only Owner!" }, { quoted: m });
    if (!quoted) return client.sendMessage(from, { text: "📢 Reply to any message to broadcast." }, { quoted: m });
    const chats = await client.getAllChats();
    for (let chat of chats) {
        await client.forwardMessage(chat.id, quoted);
    }
    await client.sendMessage(from, { text: "✅ 📢 Broadcast sent." }, { quoted: m });
});

// Block (quoted user)
cmd({
    pattern: 'block',
    desc: 'Block user (reply only)',
    react: "⛔",
    category: 'owner',
    filename: __filename
}, async (client, m, message, { from, sender, quoted }) => {
    if (!isOwnerCheck(sender)) return client.sendMessage(from, { text: "🚫 Only Owner!" }, { quoted: m });
    const number = getQuotedNumber(quoted);
    if (!number) return client.sendMessage(from, { text: "🔢 Reply to user message to block." }, { quoted: m });
    await client.updateBlockStatus(`${number}@s.whatsapp.net`, 'block');
    await client.sendMessage(from, { text: `✅ ⛔ User ${number} blocked.` }, { quoted: m });
});

// Unblock (quoted user)
cmd({
    pattern: 'unblock',
    desc: 'Unblock user (reply only)',
    react: "✅",
    category: 'owner',
    filename: __filename
}, async (client, m, message, { from, sender, quoted }) => {
    if (!isOwnerCheck(sender)) return client.sendMessage(from, { text: "🚫 Only Owner!" }, { quoted: m });
    const number = getQuotedNumber(quoted);
    if (!number) return client.sendMessage(from, { text: "🔢 Reply to user message to unblock." }, { quoted: m });
    await client.updateBlockStatus(`${number}@s.whatsapp.net`, 'unblock');
    await client.sendMessage(from, { text: `✅ 🔓 User ${number} unblocked.` }, { quoted: m });
});

// Join Group (quoted invite link)
cmd({
    pattern: 'join',
    desc: 'Join group (reply link)',
    react: "🔗",
    category: 'owner',
    filename: __filename
}, async (client, m, message, { from, sender, quoted }) => {
    if (!isOwnerCheck(sender)) return client.sendMessage(from, { text: "🚫 Only Owner!" }, { quoted: m });
    if (!quoted || !quoted.body.includes('whatsapp.com')) {
        return client.sendMessage(from, { text: "🔗 Reply group link to join." }, { quoted: m });
    }
    const link = quoted.body.split('/').pop().split('?')[0];
    await client.groupAcceptInvite(link);
    await client.sendMessage(from, { text: "✅ 🎉 Joined group." }, { quoted: m });
});

// Leave Group
cmd({
    pattern: 'leave',
    desc: 'Leave group',
    react: "👋",
    category: 'owner',
    filename: __filename
}, async (client, m, message, { from, sender, isGroup }) => {
    if (!isOwnerCheck(sender)) return client.sendMessage(from, { text: "🚫 Only Owner!" }, { quoted: m });
    if (!isGroup) return client.sendMessage(from, { text: "⚠️ Only in groups." }, { quoted: m });
    await client.sendMessage(from, { text: "👋 Leaving group..." }, { quoted: m });
    await client.groupLeave(from);
});
