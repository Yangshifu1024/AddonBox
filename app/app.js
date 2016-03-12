import electron from 'electron'

const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainWindow

app.on('ready', function() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    })
    mainWindow.openDevTools()
    mainWindow.loadURL('file://' + __dirname + '/index.html')
})
