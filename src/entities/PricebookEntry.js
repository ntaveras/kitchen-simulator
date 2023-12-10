/**
 * @description:
 * Represents a product entry (an association between a Pricebook2 and Product2) in a price book.
 **/
const Entity = require('./Entity');

class PricebookEntry extends Entity{
    price; //Number
    constructor(pricebookId, productId) {
        super();
        this._pricebookId = pricebookId; //String
        this._productId = productId; //String
    }

    //Object getter
    get pricebookId() {
        return this._pricebookId;
    }

    get productId() {
        return this._productId;
    }

    //Object setter
    set price(newPrice) {
        if(typeof newPrice == Number) {
            this.price = newPrice;
        } else {
            console.error(`Price is expected to be a Number, but ${typeof newPrice} was recieved instead.`);
        }
    }    
}

module.exports = PricebookEntry;
