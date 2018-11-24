import { app, BrowserWindow, Tray } from 'electron';
import Main from './main';

Main.main(app, BrowserWindow, Tray);