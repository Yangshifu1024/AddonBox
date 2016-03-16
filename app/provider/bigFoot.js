'use strict'

import Provider from '../library/provider.js'

export default class BigFoot extends Provider {
    static get name() {
        return 'bigfoot'
    }

    static get indexFile() {
        return 'filelist.xml'
    }

    static get indexFileUrl() {
        return BigFoot.downUrl + BigFoot.indexFile
    }

    static get updateUrl() {
        return 'http://wow.bfupdate.178.com/BigFoot/Interface/3.1/'
    }

    static get downUrl() {
        return 'http://wow.bfupdate.178.com/BigFoot/Interface/3.1/'
    }
}

