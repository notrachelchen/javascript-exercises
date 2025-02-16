const repeatString = function(word, number) {
    if (number < 0) {
        return 'ERROR';
    }
    
    let final = '';
    for (let i = 0; i < number; i++) {
        final += word;
    }
    return final;
};

// Do not edit below this line
module.exports = repeatString;
