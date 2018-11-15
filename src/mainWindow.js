const {BrowserWindow} = require('electron')
var path = require('path')

module.exports = {

    create: function () { 
        mainWin = new BrowserWindow( {
            width: 800, 
            height: 600,
            skipTaskbar: false,
            title: 'Translate'
        });
        
        mainWin.setMenu(null)
        mainWin.setIcon(path.join(__dirname, '../resources/translate.ico'))
        mainWin.on('closed', ()=> mainWin = null)
        return mainWin
    }
}
