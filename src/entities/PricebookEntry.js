/**
 * @description:
 * Represents a product entry (an association between a Pricebook2 and Product2) in a price book.
 **/
const Entity = require('./entity');

class PricebookEntry extends Entity{
    DEFAULT_PRICE = 0; //Number

    constructor(pricebookId, productId) {
        super();
        this._pricebookId = pricebookId; //String
        this._productId = productId; //String
        this.price = DEFAULT_PRICE;
    }

    constructor(pricebookId, productId, price) {
        super();
        this._pricebookId = pricebookId; //String
        this._productId = productId; //String
        this._price = (typeof price == "number") ? price : DEFAULT_PRICE; //Number
    }

    //Object getter
    get pricebookId() {
        return this._pricebookId;
    }

    get productId() {
        return this._productId;
    }

    get price() {
        return this._price;
    }

    set price(newPrice) {
        if(typeof newPrice == "number") {
            this._price = newPrice;
        } else {
            console.error(`Price is expected to be a Number, but ${typeof newPrice} was recieved instead.`);
        }
    }    
}

module.exports = PricebookEntry;
