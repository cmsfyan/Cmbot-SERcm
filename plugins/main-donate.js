
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
≡ *DONATION*
EASYPAISA
03044250023
Share CM-SAFYAN Bot Link And Support. Git Link https://chat.whatsapp.com/BEyJPD3Ey9lLu6xRwjJ3ig
let img = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg_DiVmOS52btBHYCmau5mzoeptZg6KofvqPRIVTgWeWdbE2BG8U1ltYouIy1DW1pFz90So9MWfK1P8ZrYO2lnEDntTzHEAUG-5559F2f07-SiAberD3ZcctEXYdfCEuJj4Ht8SVVZxWMif6aGpIbri91LFOftUrAegN8DOE-QlGovK-xy6irxG60Vt-50/s1080/Propic1692854048190.jpg'
conn.sendFile(m.chat, img, 'img.jpg', don, m)
}

handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donar'] 

export default handler
