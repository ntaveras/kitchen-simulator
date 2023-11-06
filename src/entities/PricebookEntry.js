const Entity = require('./Entity');
class PricebookEntry extends Entity{
    price;
    constructor(pricebookId, productId) {
        super();
        if(typeof pricebookId == undefined || typeof productId == undefined) {
            throw new Error(`Both Pricebook and Product Id's are required to instanciate a PricebookEntry`);
        }
        this._pricebookId = pricebookId;
        this._productId = productId;
    }

    //Object getter
    get pricebookId() {
        return this._pricebookId;
    }

    get product() {
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