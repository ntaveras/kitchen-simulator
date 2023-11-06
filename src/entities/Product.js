/* Description: 
Represents a product that your company sells. */
const Entity = require('./Entity');
class Product extends Entity {   
constructor(productName, description, isActive) {
    super();
    this._name = productName ?? 'No Name provided';
    this.description = description ?? 'No description provided';
    this.isActive = isActive ?? true;
}

// Object getters

get name() {
    return this._name;
}

get active() {
    return this.isActive;
}

get productDetail() {
    return `Product ID: ${this.id}\nProduct Name: ${this._name}\nDescription: ${this.description}\nAcive: ${this.isActive}`;
}

// Object setters
set name(newName) {
    this._name = this._capitalizeWords(newName);
}


// Object methods
toggleActive(){
    this.isActive = !this.isActive;
}

_capitalizeWords(inputString) {
    const words = inputString.split(' ');      
    const capitalizedWords = words.map(word => {
        if (word.length == 0) return '';
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
    });
    const result = capitalizedWords.join(' ');
    
    return result;
    }
}

module.exports = Product;