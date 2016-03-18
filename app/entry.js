'use strict'

import electron from 'electron'

const app = electron.app
const Menu = electron.Menu
const BrowserWindow = electron.BrowserWindow

let mainWindow

let template = [
    {
        label: 'AddonBox',
        submenu: [
            {
                label: 'Quit',
                accelerator: 'Command+Q',
                click: () => {
                    app.quit();
                }
            }

        ]
    },
    {
        label: 'Develop',
        submenu: [
            {
                label: 'Reload',
                accelerator: 'Command+R',
                click: () => {
                    BrowserWindow.getFocusedWindow().reloadIgnoringCache();
                }
            },
            {
                label: 'Toggle DevTools',
                accelerator: 'Alt+Command+I',
                click: () => {
                    BrowserWindow.getFocusedWindow().toggleDevTools();
                }
            }
        ]
    },
]

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 960,
        height: 720,
        titleBarStyle: 'hidden'
    })
    mainWindow.openDevTools()
    mainWindow.loadURL('file://' + __dirname + '/index.html')

    mainWindow.on('closed', () => {
        mainWindow = null;
    })

    Menu.setApplicationMenu(Menu.buildFromTemplate(template))
}

let shouldQuit = app.makeSingleInstance((cmd, dir) => {
    if (mainWindow) {
        if (mainWindow.isMinimized()) mainWindow.restore()
        mainWindow.focus()
    } else {
        createWindow()
    }
})

if (shouldQuit) {
    app.quit()
}

app.on('window-all-closed', () => {

})

app.on('ready', () => {
    createWindow()
})

app.on('activate', () => {
    if (mainWindow == null) {
        createWindow()
    }
})
