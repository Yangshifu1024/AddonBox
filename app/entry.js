'use strict'

import electron from 'electron'

const app = electron.app
const Menu = electron.Menu
const BrowserWindow = electron.BrowserWindow

let mainWindow

let template = [
    {
        label: 'PluginBox',
        submenu: [
            {
                label: 'Quit',
                accelerator: 'Command+Q',
                click: function () {
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
                click: function () {
                    BrowserWindow.getFocusedWindow().reloadIgnoringCache();
                }
            },
            {
                label: 'Toggle DevTools',
                accelerator: 'Alt+Command+I',
                click: function () {
                    BrowserWindow.getFocusedWindow().toggleDevTools();
                }
            }
        ]
    },
]


app.on('ready', function() {
    mainWindow = new BrowserWindow({
        width: 960,
        height: 720,
        titleBarStyle: 'hidden'
    })
    mainWindow.openDevTools()
    mainWindow.loadURL('file://' + __dirname + '/index.html')

    Menu.setApplicationMenu(Menu.buildFromTemplate(template))
})
