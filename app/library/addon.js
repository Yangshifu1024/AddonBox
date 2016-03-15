export default class Addon {
    constructor() {}

    get name() {
        return this._name
    }
    set name(name) {
        this._name = name
    }

    get title() {
        return this._title
    }
    set title(title) {
        this._title = title
    }

    get desc() {
        return this._desc
    }
    set desc(desc) {
        this._desc = desc
    }

    get author() {
        return this._author
    }
    set author(author) {
        this._author = author
    }
}
