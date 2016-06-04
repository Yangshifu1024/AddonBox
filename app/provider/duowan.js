'use strict'

import Provider from '../library/provider.js'

export default class DuoWan extends Provider {
    static get name() {
        return 'duowan'
    }

    static get indexFile() {
        return 'filelist.xml'
    }

    static get indexFileUrl() {
        return DuoWan.downUrl + DuoWan.indexFile
    }

    static get updateUrl() {
        return 'http://wow.duowan.com/wowbox'
    }

    static get downUrl() {
        return 'http://wow.duowan.com/wowbox'
    }
}
