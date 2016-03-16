'use strict'

export default class AddonFile {
    path = ''
    sum = ''

    constructor(path, sum) {
        this.path = path
        this.sum = sum
    }

    validate() {
        if (this.sum) {
            return true
        }
        return false
    }
}
