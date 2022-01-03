/**
 * Direction:
 * Find prefix of the word from array of string
 *
 * Expected Result:
 * fl
 */
const words = ['flower', 'flow', 'flight'];

function result(words) {
  // Your Code Here
  var arrSort = words.sort((a,b)=> a.length - b.length);

  var sortString = arrSort[0];

  while(!words.every((string)=>string.startsWith(sortString))){
    
    sortString = sortString.slice(0,-1);
  }

  return sortString;
}

console.log(result(words));
