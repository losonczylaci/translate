import { app, BrowserWindow, Tray } from 'electron';
import Main from './Main';

Main.main(app, BrowserWindow, Tray);