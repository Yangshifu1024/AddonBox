'use strict'

import Vue from 'vue'
import './style/animate.css'
import 'vue-animate-css'
import {modal} from 'vue-strap'

import './style/app.less'
import AddonList from './component/addonList.vue'
import ModalAbout from './component/mdlAbout.vue'
import ModalSetting from './component/mdlSetting.vue'

let vm = new Vue({
    el: 'body',
    props: [],
    components: {
        modal,
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

