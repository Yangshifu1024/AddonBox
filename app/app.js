'use strict'
import Vue from 'vue'
import './style/animate.css'
import 'vue-animate-css'
import {modal} from 'vue-strap'

import './style/app.less'
import AddonList from './component/addonList.vue'

new Vue({
    el: 'body',
    props: [
    ],
    components: {
        'modal': modal,
        'addons': AddonList,
    },
    methods: {
    },
    data: {
        isShowAbout: false
    }
})
