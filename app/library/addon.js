'use strict'

export default class Addon {
    name = ''
    title = ''
    desc = ''
    author = ''

    constructor(name, title, desc, author) {
        this.name = name
        this.title = title
        this.desc = desc
        this.author = author
    }
}
