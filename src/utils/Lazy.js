// @ts-check

export default class Lazy {
    /** @type{object} */        __value = null
    /** @type{() => object} */  __supplier

    /**
     * Creates new Lazy instance 
     * @param {() => object} supplier Value supplier
     */
    constructor(supplier) {
        this.__supplier = supplier
    }

    /**
     * Retrieves stored value
     */
    get value() {
        if (this.__value === null || this.__value === undefined) {
            this.__value = this.__supplier()
        }

        return this.__value
    }
}