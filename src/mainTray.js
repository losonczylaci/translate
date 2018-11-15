
const {Tray} = require('electron')
var path = require('path')

module.exports = {  
    create: function () {
        tray = new Tray(path.join(__dirname, '../resources/translate.ico'))
        return tray
    }
}