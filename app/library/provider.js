'use strict'

export default class Provider {
    constructor(name, updateUrl, downUrl) {
        this.name = name
        this.updateUrl = updateUrl
        this.downUrl = downUrl
    }
}

