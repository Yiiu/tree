import defaultOptions from './default'

export default class Zoom {
    constructor (reference, options) {
        this.reference = reference
        this.options = {...defaultOptions, ...options}

        this._target = []

        this.init()
    }
    /**
     * 绑定el
     * 
     * @param {String|Element} el
     * @returns
     * 
     * @memberOf Zoom
     */
    init () {
        this.getTitle()
    }

    getTitle () {
        let _dom = this.reference.querySelectorAll(this.options.selector)
        for (let i = 0;i < _dom.length;i++) {
            let t = {
                el: _dom[i],
                level: _dom[i].tagName.replace(/[^0-9]/ig, ''),
                parent: null,
                child: null
            }
            if (i > 0) {
                if (!this._target[i - 1].level) {
                    console.log(1)
                }
            } else {
                this._target.push(t)
            }
        }
    }
}