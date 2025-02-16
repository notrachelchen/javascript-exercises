//strings are immutable in javascript 

const reverseString = function(word) {
    if (word.length == 0) {
        return '';
    }
    let front = 0;
    let back = word.length - 1;
    let newWord = word.split('');
    while (front < back) {
        let temp = newWord[front];
        newWord[front] = newWord[back];
        newWord[back] = temp;
        front += 1;
        back -= 1;
    }

    return newWord.join('');
};

// Do not edit below this line
module.exports = reverseString;
