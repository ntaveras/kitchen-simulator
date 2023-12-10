export class Util {



    /**
     * 
     * @param {String} inputString String of words to be properly capitalized.
     * @returns String
     * @example Util.capitalizeWords(examplE) => returns Example
     */
    static capitalizeWords(inputString) {
        const words = inputString.split(' ');      
        const capitalizedWords = words.map(word => {
            if (word.length == 0) return '';
            return word[0].toUpperCase() + word.slice(1).toLowerCase();
        });
        const result = capitalizedWords.join(' ');
        
        return result;        
    }
}