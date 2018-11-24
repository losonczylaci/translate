import { BrowserWindow, Tray, NativeImage, nativeImage } from 'electron'
import path from 'path'

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
        Main.mainWindow =  null as any;
    }

    private static onReady() {
        Main.mainWindow = new Main.BrowserWindow({ 
            width: 800, 
            height: 600, 
            skipTaskbar: false,
            title: 'Translate'
        });

        Main.mainWindow.setMenu( null);
        Main.tray = new Main.Tray( Main.getIco());
        Main.mainWindow.setIcon( Main.getIco());
        Main.mainWindow.on('closed', Main.onClose);
    }
    
    private static getIco() {
        var p = path.join( __dirname, '../resources/translate.ico');
        var img = nativeImage.createFromPath(p)
        return img
    }    

    static main( app: Electron.App,  browserWindow: typeof BrowserWindow, tray: typeof Tray ) {
        Main.BrowserWindow = browserWindow;
        Main.Tray = tray;
        Main.application = app;
        Main.application.on('window-all-closed', Main.onWindowAllClosed);
        Main.application.on('ready', Main.onReady);
    }
}

