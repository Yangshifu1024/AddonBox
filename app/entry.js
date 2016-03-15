'use strict'

import electron from 'electron'

const app = electron.app
const Menu = electron.Menu
const BrowserWindow = electron.BrowserWindow

let mainWindow
let menuTemplate = [
    {
        label: 'PluginBox',
        subMenu: [
            {
                label: 'About PluginBox',
                role: 'about'
            },
            {
                label: 'Reload',
                accelerator: 'CmdOrCtrl+R',
                click: (item, focus) => {
                    if (focus) {
                        focus.reload();
                    }
                }
            },
            {
                label: 'Toggle Developer Tools',
                accelerator: (() => {
                  if (process.platform == 'darwin')
                    return 'Alt+Command+I';
                  else
                    return 'Ctrl+Shift+I';
                })(),
                click: (item, focusedWindow) => {
                  if (focusedWindow)
                    focusedWindow.toggleDevTools();
                }
            },
            {
                label: '退出',
                accelerator: 'Command+Q',
                click: () => {app.quit()}
            }
        ]
    }
]

let menu = Menu.buildFromTemplate(menuTemplate)
Menu.setApplicationMenu(menu)


app.on('ready', function() {
    mainWindow = new BrowserWindow({
        width: 960,
        height: 720,
        titleBarStyle: 'hidden'
    })
    mainWindow.openDevTools()
    mainWindow.loadURL('file://' + __dirname + '/index.html')
})
