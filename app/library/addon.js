'use strict'

export default class Addon {
    constructor(id, name, title, desc, author, version) {
        this.id = id
        this.name = name
        this.title = title
        this.desc = desc
        this.author = author
        this.version = version
    }
    plain() {
        return {
            "id": this.id,
            "name": this.name,
            "title": this.title,
            "desc": this.desc,
            "author": this.author,
            "version": this.version,
        }
    }
}
