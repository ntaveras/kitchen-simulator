/**
 * Represents a generic record.
 *  
 * This class is used to facilitate the extension of functionalities to the base entity.
**/
class Entity {
    _id; //String

    // Object getters
    get id() {
        return this._id;
    }
}

module.exports = Entity;
