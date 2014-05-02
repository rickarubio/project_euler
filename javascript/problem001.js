/* ProjectEuler.net - Problem 1 - Multiples of 3 and 5

If we list all the natural numbers below 10 that are multiples of 3 or 5, we
get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
*/

/*
  Inputs: max value, multiples
  Output: sum of all the unique multiples specified below max-range
*/

var findSumOfMultiples = function(maxValue, multiples) {
  var values = [];
  for(var i=0; i < multiples.length; i++){
    for(var j=0; i <= maxValue; j++){
      var currentValue = multiples[i] * j
      if (currentValue < maxValue) {
        values.push(currentValue);
      } else {
        break;
      }
    }
  }

  values = values.sort();
  var sum = 0;
  var previousValue = 0;

  for(var i=0; i < values.length; i++){
    if (previousValue != values[i]){
      sum += values[i];
    }
    previousValue = values[i];
  }

  return sum;
}

module.exports = findSumOfMultiples;
