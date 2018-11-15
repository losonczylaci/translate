
const {app} = require('electron')
var mainWindow = require('./mainWindow')
var mainWinTray = require('./mainTray')

app.once('ready', ()=>{
    mainWin = mainWindow.create()
    tray = mainWinTray.create()
})

app.once('all-window-closed', ()=> app.quit())