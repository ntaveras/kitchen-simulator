/**
 * @description:
 * Represents a list of products sold by the business. 
 * The business may have n Price Books, but an Order may only be tied to one. 
 * 
 * Use this  to manage diffrent prices for the same products.
 * Example of use:
 * - Pizza standard price is 10 usd.
 * - Pizza Christmas price is 7.50 usd.
 * - Pizza for Italians is 8 usd.
 * - Pizza for companies is 9 usd.
 * 
 * Each of these scenarios may exist in their individual Price
 * Book, making it so the price does not need to be managed by
 * the sales person but instead it's defined by the Price Book
 * being used. 
 * 
**/
const Entity = require('./entity');

/*
@param pricebookName {String} Name of the Pricebook. This is diffrent 
@param isStandardPricebook {Boolene} Flags the pricebook as the Default Pricebook to be use whenever a Pricebook is not specified for an Object requirering the pricebook (Order).
*/


class Pricebook extends Entity{    
    constructor(pricebookName, isStandardPricebook) {
        super();
        this._name = pricebookName;
        this._label = pricebookName;
        this._isStandardPricebook = isStandardPricebook ?? false;
    }

    //Object getters
    get standard() {
        return this._isStandardPricebook;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }

    get label() {
        return this._label;
    }

    set label(newLabel) {
        this._label = newLabel;
    }
}

module.exports = Pricebook;
