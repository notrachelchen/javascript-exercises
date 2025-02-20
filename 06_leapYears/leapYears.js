//Leap years 
//every year divisible by 4
//year is not divisible by 100
//unless it is divisible by 400


const leapYears = function(checkYear) {
    if ((checkYear % 100 == 0) && (checkYear % 400 == 0)) {
        return true;
    } else if ((checkYear % 100 == 0) && (checkYear % 400 != 0)){
        return false;
    } else {
        if ((checkYear % 4 == 0) && (checkYear % 100 != 0)) {
            return true;
        }
    }
    return false;


};

// Do not edit below this line
module.exports = leapYears;
