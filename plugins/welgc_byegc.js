let handler = async (m, { conn, text, usedPrefix, command, customPrefix }) => {
let stikerwelgc = "./src/welgc.webp"
let stikerbyegc = "./src/byegc.webp"
if (command == 'welcomegc') {
conn.sendFile(m.chat, stikerwelgc, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: ''CM-SAFYAN🎯', body: 'CM-SAFYAN☘️', sourceUrl: `https://chat.whatsapp.com/BEyJPD3Ey9lLu6xRwjJ3ig`, thumbnail: imagen1}}})  
}
if (command == 'byegc') {
conn.sendFile(m.chat, stikerbyegc, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: ''CM-SAFYAN🎯', body: 'CM-SAFYAN☘️', sourceUrl: `https://chat.whatsapp.com/BEyJPD3Ey9lLu6xRwjJ3ig`, thumbnail: imagen1}}})
}}
handler.command = ['welcomegc', 'byegc']
export default handler
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]}
