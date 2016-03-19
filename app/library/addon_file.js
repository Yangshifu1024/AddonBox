'use strict'

export default class AddonFile {
    constructor(addonName, baseUrl, filePath, fileSum) {
        this.addonName = addonName
        this.path = filePath// .replace(/\\/g, '/')
        let tmpUrl = baseUrl + "Interface/AddOns/" + addonName + '/' + filePath + '.z'
        this.url = tmpUrl.replace(/\\/g, '/')
        this.sum = fileSum
    }

    validate() {
        if (this.sum) {
            return true
        }
        return false
    }
}
