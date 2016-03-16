'use strict'

import Vue from 'vue'
import './style/animate.css'
import 'vue-animate-css'
import {modal} from 'vue-strap'

import './style/app.less'
import NavBar from './component/nav.vue'
import AddonList from './component/addonList.vue'
import ModalAbout from './component/mdlAbout.vue'
import ModalSetting from './component/mdlSetting.vue'

Vue.config.debug = true

new Vue({
    el: 'body',
    components: {
        modal,
        NavBar,
        AddonList,
        ModalAbout,
        ModalSetting
    },
    methods: {},
    data: {
        isShowAbout: false,
        isShowSetting: false,
        workerCount: 5,
        wowPath: null,
        autoUpdate: false,
    },
    ready() {
        this.$watch('workerCount', (val) => {
            console.log('workerCount: ' + val)
        })
        this.$watch('wowPath', (val) => {
            console.log('wowPath: ' + val)
        })
        this.$watch('autoUpdate', (val) => {
            console.log('autoUpdate: ' + val)
        })
    }
})

