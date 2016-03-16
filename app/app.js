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

import BigFoot from './provider/bigFoot.js'

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
    }
})

