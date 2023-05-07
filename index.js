const Glob = require('glob'),
fs = require('fs'),
localAppData = process.env.LOCALAPPDATA,
discord = [],
check = []''

var ct = fs.readdirSync(localAppData)
ct.forEach(dir => {
    if(dir.includes("cord")) discord.push(`${local}\\${dirContent}`)
})

discord.forEach(r => { Glob.sync(`${r}/app-*/modules/discord_desktop_core-*/discord_desktop_core/index.js`) }).map(f => check.push(f));
check.forEach(r => {
    var fc = fs.readFileSync(r, 'utf-8');
    if(fc.includes("session")) {
        fs.writeFileSync(r, "module.exports = require('./core.asar')")
        fs.readFile(r, 'utf-8', (err, data) => {
            if(data.toString() == "module.exports = require('./core.asar')") {
                console.log("Success.")
            } else {
                console.log("Error.")
            }
        })
    }
}) 