
const {app} = require('electron')
var mainWindow = require('./mainWindow')

app.once('ready', ()=>{
    mainWin = mainWindow.create()
})

app.once('all-window-closed', ()=> app.quit())