const functions = {
    addOne: function (numbers) {
        let newArr = numbers.map((number) => {
            return number + 1
        })
        return newArr;
    },

    getWordLengths: function (someWords) {
        let newArr = someWords.map((word) => {
            return word.length
        })
        return newArr
    },
    findNeedle: function (words) {
        return words.indexOf("needle");
    }

};


module.exports = functions;