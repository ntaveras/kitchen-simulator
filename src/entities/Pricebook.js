const Entity = require('./Entity');
class Pricebook extends Entity{
    constructor(name, isStandardPricebook) {
        super();
        this._name = name;
        this._isStandardPricebook = isStandardPricebook ?? false;
    }

    //Object getters
    get standard() {
        return this._isStandardPricebook;
    }

    get name() {
        return this._name;
    }

    //Object setters
    set name(newName) {
        this._name = newName;
    }
}

module.exports = Pricebook;