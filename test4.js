/**
 * Direction:
 * Find missing number from the list
 *
 * Expected Result:
 * 8
 */
const numbers = [9, 6, 4, 2, 3, 5, 7, 0, 1];

function result(numbers) {
  // Your Code Here
  MaxNumber = Math.max(...numbers);
  var missingNumber = new Array();

  for (var i = 1; i <= MaxNumber; i++) {
    if (numbers.indexOf(i) == -1) {
      missingNumber.push(i);
    }
  }

  return missingNumber;
}

console.log(result(numbers));
