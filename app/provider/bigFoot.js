'use strict'

import Provider from '../library/provider.js'

export default class BigFoot extends Provider {
    constructor() {
        super(
            'bigfoot',
            'http://wow.bfupdate.178.com/BigFoot/',
            'http://wow.bfupdate.178.com/BigFoot/'
        )
    }
}

