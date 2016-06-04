'use strict'

import Provider from '../library/provider.js'

export default class EUI extends Provider {
    static get name() {
        return 'bigfoot'
    }

    static get indexFile() {
        return 'filelist.xml'
    }

    static get indexFileUrl() {
        return 'http://www.eui.cc/wow/eui.xml'
    }

    static get updateUrl() {
        return 'http://static.laoyuegou.com/soft/Eui/'
    }

    static get downUrl() {
        return 'http://static.laoyuegou.com/soft/Eui/'
    }
}
