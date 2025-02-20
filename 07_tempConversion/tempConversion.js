//convert farenheit to celsius 
const convertToCelsius = function(tempInFaren) {
  let curTemp = (tempInFaren - 32) * 5/9;
  if (Number.isInteger(curTemp)) {
    return Number(curTemp);
  }
  return Number(curTemp.toFixed(1)); 
};
//convert celsius to fahrenheit
const convertToFahrenheit = function(tempInCel) {
  let curTemp = tempInCel * 9/5 + 32;
  if (Number.isInteger(curTemp)) {
    return Number(curTemp);
  }
  return Number(curTemp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
