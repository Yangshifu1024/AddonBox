'use strict'

import Vue from 'vue'
import VueTables from 'vue-tables'
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
import axios from 'axios'
import * as xml2js from 'xml2js'

Vue.use(VueTables.client)

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
        ModalSetting
    },
    methods: {},
    ready() {
        let progress = (size, total) => {
            console.log(`Progress: size: ${size} - total: ${total}`)
        }
        axios.progress = progress
        axios.get(BigFoot.indexFileUrl).then(resp => {
            if (resp.status === 200) {
                this.isReadyToUpdate = true
                xml2js.parseString(resp.data, (err, ret) => {
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
            }
        }).catch(err => {
            console.log(err)
        })
    },
    data: {
        isShowAbout: false,
        isShowSetting: false,
        isReadyToUpdate: false,
        workerCount: setting.settings.workerCount,
        wowPath: setting.settings.wowPath,
        autoUpdate: setting.settings.autoUpdate,
        addons: [],
    },
})

