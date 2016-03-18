'use strict'

import Vue from 'vue'
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
import request from 'request'
import progress from 'request-progress'
import * as xml2js from 'xml2js'
import { progressbar, alert } from 'vue-strap'

Vue.use(VueI18n, {
    lang: 'en',
    locales: locales
})

Vue.config.debug = true

new Vue({
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
        }
    },
    ready() {
        progress(request(BigFoot.indexFileUrl, (err, resp, body) => {
            if (err) {
                console.log(err)
            }
            if (resp.statusCode !== 200) {
                console.log(resp.statusCode)
            }
            this.isReadyToUpdate = true
            xml2js.parseString(body, (err, ret) => {
                ret.AddOns.AddOn.forEach((value, index) => {
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
        query: null,
        progress: 0,
        alerter: {
            show: false,
            style: 'warning',
            title: 'warning',
            content: 'warning'
        }
    },
})

