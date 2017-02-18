var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;

var mainWindow = null;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin')
  app.quit();
});

app.on('ready', function() {

  mainWindow = new BrowserWindow({width: 1200, height: 600});
  mainWindow.maximize();

  if (navigator.appVersion.indexOf("Mac")!=-1) {
    mainWindow.loadURL(__dirname + '/index.html');
  } else{
    mainWindow.loadURL('file://' + __dirname + '/index.html');
  }

  mainWindow.on('closed', function() {
    mainWindow = null;
  });

});
