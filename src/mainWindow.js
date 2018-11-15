const {BrowserWindow} = require('electron')
var path = require('path')

module.exports = {

    create: function () { 
        mainWin = new BrowserWindow( {
            width: 800, 
            height: 600,
            skipTaskbar: true,
            title: 'Translate',
            ico: path.join(__dirname, '../resources/translate.ico')
        });

        mainWin.setMenu(null)
        mainWin.on('closed', ()=> mainWin = null)
        return mainWin
    }
}
