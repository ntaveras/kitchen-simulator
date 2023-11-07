/* Description: 
    Represents a product that your company sells. */
    
const Entity = require('./Entity');
const Util = require('../util/util');
class Product extends Entity {   
    constructor(productName, description, isActive) {
        super();
        this._name = productName ?? 'No Name provided'; //String
        this.description = description ?? 'No description provided'; //String
        this.isActive = isActive ?? true; //Boolean
    }

    // Object getters
    get name() {
        return this._name;
    }

    get active() {
        return this.isActive;
    }

    // Object setters
    set name(name) {
        this._name = Util.capitalizeWords(name);
    }
}

module.exports = Product;
