const { app, BrowserWindow } = require("electron");
const path = require("path");
const { autoUpdater } = require("electron-updater")

let window;

function createWindow(){
    window = new BrowserWindow({
        height: 400,
        width: 400
    });
    window.loadFile("index.html");
}

app.whenReady().then(() => {
    createWindow();
})

app.on("ready", () => {
    autoUpdater.checkForUpdatesAndNotify();
})