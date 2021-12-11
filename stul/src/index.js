const { app, BrowserWindow } = require('electron');
const path = require('path');


if (require('electron-squirrel-startup')) { 
  app.quit();
}

/* creating the window with node integration */
const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 1080,
    height: 720,
    webPreferences: 
    {
      nodeIntegration: true,
      contextIsolated: false
    }
  });

  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  mainWindow.webContents.openDevTools();
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});