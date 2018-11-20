
import { BrowserWindow, Tray } from 'electron'
var path = require('path');

export default class Main {
    static mainWindow: Electron.BrowserWindow;
    static application: Electron.App;
    static tray: Electron.Tray;
    static BrowserWindow: any;
    static Tray: any;
    private static onWindowAllClosed() {
        if (process.platform !== 'darwin') {
            Main.application.quit();
        }
    }

    private static onClose() {
        Main.mainWindow =  any;
    }

    private static onReady() {
        Main.mainWindow = new Main.BrowserWindow({ 
            width: 800, 
            height: 600, 
            skipTaskbar: false,
            title: 'Translate'
        });

        Main.tray = new Main.Tray( Main.getIcoPath());
        //Main.mainWindow.loadURL('file://' + __dirname + '/index.html');
        Main.mainWindow.setMenu( null);
        Main.mainWindow.setIcon( Main.getIcoPath());
        Main.mainWindow.on('closed', Main.onClose);
    }

    private static getIcoPath() {
        return path.join( __dirname, '../resources/translate.ico');
    }    

    static main(
        app: Electron.App, 
        browserWindow: typeof BrowserWindow,
        tray: typeof Tray ) {

        Main.BrowserWindow = browserWindow;
        Main.Tray = tray;
        Main.application = app;
        Main.application.on('window-all-closed', Main.onWindowAllClosed);
        Main.application.on('ready', Main.onReady);
    }
}

