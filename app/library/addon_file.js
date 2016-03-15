export default class AddonFile {
    constructor() {}

    set path(path) {
        this._path = path
    }

    get path() {
        return this._path
    }

    set sum(sum) {
        this._sum = sum
    }

    get sum() {
        return this._sum
    }

    validate() {
        return true
    }
}
