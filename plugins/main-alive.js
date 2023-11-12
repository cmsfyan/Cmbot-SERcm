let handler = async (m, { conn, text, usedPrefix, command }) => {
  //To get sender's name
   let name = m.pushName || conn.getName(m.sender);
  
  // Define the content
  let mainImg = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg_DiVmOS52btBHYCmau5mzoeptZg6KofvqPRIVTgWeWdbE2BG8U1ltYouIy1DW1pFz90So9MWfK1P8ZrYO2lnEDntTzHEAUG-5559F2f07-SiAberD3ZcctEXYdfCEuJj4Ht8SVVZxWMif6aGpIbri91LFOftUrAegN8DOE-QlGovK-xy6irxG60Vt-50/s1080/Propic1692854048190.jpg"; // Main image URL
  let smallImg = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg_DiVmOS52btBHYCmau5mzoeptZg6KofvqPRIVTgWeWdbE2BG8U1ltYouIy1DW1pFz90So9MWfK1P8ZrYO2lnEDntTzHEAUG-5559F2f07-SiAberD3ZcctEXYdfCEuJj4Ht8SVVZxWMif6aGpIbri91LFOftUrAegN8DOE-QlGovK-xy6irxG60Vt-50/s1080/Propic1692854048190.jpg"; // Small image URL
  let smallText = "I'M Alive Now"; // Small text
  let mainText = "CM-SAFYAN "; // Main text
  let audioUrl = "https://raw.githubusercontent.com/AbhishekSuresh2/ABHISHEK-SER/main/src/mp3/Abhi.mp3"; // Audio URL
  // Construct the message
  let con = {
    key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) },
    message: {
      contactMessage: {
        displayName: `${name}`, // Replace with the desired display name
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
      }
    }
  };

  let doc = {
    audio: {
      url: audioUrl
    },
    mimetype: 'audio/mp4',
    ptt: true,
    waveform: [100, 0, 100, 0, 100, 0, 100],
    fileName: "CM-SAFYAN",
    contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
        title: smallText,
        body: mainText,
        thumbnailUrl: smallImg, // Small image
        sourceUrl: 'https://chat.whatsapp.com/BEyJPD3Ey9lLu6xRwjJ3ig',
        mediaType: 1,
        renderLargerThumbnail: false,
        mediaUrl: mainImg // Main image
      }
    }
  };

  // Send the message
  await conn.sendMessage(m.chat, doc, { quoted: con });
}

handler.help = ['alive']
handler.tags = ['main']
handler.command = /^(alive)$/i

export default handler;
