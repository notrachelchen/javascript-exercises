const removeFromArray = function(listOfNums, ...args) {
    for (let i = 0; i < listOfNums.length; i++) {
        if (args.includes(listOfNums[i])) {
            listOfNums.splice(i, 1);
            i--;
        }
    }
    return listOfNums;
};



// Do not edit below this line
module.exports = removeFromArray;
