'use strict'

import Vue from 'vue'
import path from 'path'
import fs from 'fs'
import mkdirp from 'mkdirp'
import 'vue-animate-css'
import './style/animate.css'
import './style/app.less'
import NavBar from './component/nav.vue'
import AddonList from './component/addonList.vue'
import ModalAbout from './component/mdlAbout.vue'
import ModalSetting from './component/mdlSetting.vue'
import locales from './library/i18n.js'
import VueI18n from 'vue-i18n'
import setting from './library/setting.js'
import BigFoot from './provider/bigFoot.js'
import AddOn from './library/addon.js'
import AddOnFile from './library/addon_file.js'
import request from 'request'
import progress from 'request-progress'
import * as xml2js from 'xml2js'
import { progressbar, alert } from 'vue-strap'
import * as async from 'async'
import extract from 'extract-zip'

Vue.use(VueI18n, {
    lang: 'cn',
    locales: locales
})

Vue.config.debug = true

let app = new Vue({
    el: 'body',
    components: {
        NavBar,
        AddonList,
        ModalAbout,
        ModalSetting,
        progressbar,
        alert,
    },
    methods: {
        showAlert: (style, title, content) => {
            this.alerter.style = style
            this.alerter.title = title
            this.alerter.content = content
            this.alerter.show = true
        },
        update: () => {
            if (app.queue) {
                app.queue.kill()
                app.labelBtnUpdate = app.$t('Button.Update')
                app.progress = 0
                return
            }
            app.labelBtnUpdate = app.$t('Button.Cancel')
            app.progress = 0
            let addonBasePath = path.resolve(setting.settings.wowPath, 'Interface', 'AddOns')
            if (!fs.existsSync(addonBasePath)) {
                mkdirp.sync(addonBasePath)
            }
            app.queue = async.queue((file, callback) => {
                let addonPath = path.resolve(addonBasePath, file.addonName)
                if (!fs.existsSync(addonPath)) {
                    mkdirp.sync(addonPath)
                }
                let zipFile = path.resolve(addonPath, file.path + '.z')
                let originFile = path.resolve(addonPath, file.path)
                let req = request.defaults({gzip: true})
                req(file.url, (err, resp, body) => {
                    extract(zipFile, {dir: addonPath}, (err) => {
                        fs.unlink(zipFile)
                        callback(err)
                    })
                }).on('data', (data) => {
                    fs.appendFileSync(zipFile, data)
                }).on('error', (err) => {
                    callback(err)
                })
            }, setting.settings.workerCount)

            app.queue.drain = () => {
                app.status = app.$t('Status.Done')
            }

            app.addonFiles.forEach((file, index) => {
                app.queue.push(file, (err) => {
                    if (err) {
                        console.log(err)
                    } else {
                        if (app.queue.workersList().length == 0) {
                            app.status = app.$t('Status.Done')
                        } else {
                            app.status = file.path
                            let waitting = app.addonFiles.length - app.queue.length()
                            let length = app.addonFiles.length
                            app.progress = (waitting / length) * 100
                        }
                    }
                })
            })
        }
    },
    ready() {
        this.status = this.$t('Status.WaitForFileList')
        progress(request(BigFoot.indexFileUrl, (err, resp, body) => {
            if (err) {
                console.log(err)
            }
            if (resp.statusCode !== 200) {
                console.log(resp.statusCode)
            }
            this.isReadyToUpdate = true
            app.status = Vue.t('Status.ReadyToUpdate')
            xml2js.parseString(body, (err, ret) => {
                ret.AddOns.AddOn.forEach((value, index) => {
                    value.File.forEach((file, index) => {
                        this.addonFiles.push(new AddOnFile(
                            value.$.name,
                            BigFoot.downUrl,
                            file.$.path,
                            file.$.checksum
                        ))
                    })
                    this.addons.push(new AddOn(
                        index,
                        value.$.name,
                        value.$['Title-zhCN'],
                        value.$['Notes-zhCN'],
                        value.$.Author,
                        value.$.Version
                    ).plain())
                })
            })
        }), {
            throttle: 0
        }).on('progress', (e) => {
            this.progress = e.percentage * 100
        })
    },
    data: {
        isShowAbout: false,
        isShowSetting: false,
        isReadyToUpdate: false,
        workerCount: setting.settings.workerCount,
        wowPath: setting.settings.wowPath,
        autoUpdate: setting.settings.autoUpdate,
        columns: [Vue.t('Addon.Labels.Name'), Vue.t('Addon.Labels.Title'), Vue.t('Addon.Labels.Version')],
        addons: [],
        addonFiles: [],
        query: null,
        progress: 0,
        alerter: {
            show: false,
            style: 'warning',
            title: 'warning',
            content: 'warning'
        },
        updating: false,
        status: '',
        queue: null,
        labelBtnUpdate: Vue.t('Button.Update')
    },
})

