'use strict'

export default class Provider {
    constructor(name, updateUrl, downUrl, indexFile) {
        Provider.name = name
        Provider.updateUrl = updateUrl
        Provider.downUrl = downUrl
        Provider.indexFile = indexFile
    }
}

