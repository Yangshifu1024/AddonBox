'use strict'

import fs from 'fs'
import path from 'path'
import electron from 'electron'
const app = electron.remote.app
const workPath = app.getPath('userData')

class Setting {
    constructor() {
        this.file = path.resolve(workPath, 'settings.js')
        this.settings = {}
    }
    init() {
        this.settings = {
            wowPath: null,
            autoUpdate: false,
            workerCount: 5
        }
        fs.writeFileSync(this.file, JSON.stringify(this.settings))
    }
    load() {
        let stat = fs.existsSync(this.file)
        if (stat) {
            if (Object.keys(this.settings).length !== 0) {
                console.log('Already loadded.')
                console.log(this.settings)
            } else {
                let data = fs.readFileSync(this.file)
                this.settings = JSON.parse(data.toString())
            }
        } else {
            this.init()
        }
    }
    save() {
        fs.writeFileSync(this.file, JSON.stringify(this.settings))
    }
    get(key, defValue) {
        let value = this.settings[key]
        if (value) {
            return value
        } else {
            return defValue
        }
    }
    set(key, value) {
        this.settings[key] = value
    }
}
let setting = new Setting()
setting.load()
export default setting
