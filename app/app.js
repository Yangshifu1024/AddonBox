require('bootstrap')
import Vue from 'vue'
import {modal} from 'vue-strap'

new Vue({
    el: '#app',
    data: {
        message: 'Hello Vuejs',
        showCustomModal: false
    },
    components: {
        'modal': modal
    }
})


