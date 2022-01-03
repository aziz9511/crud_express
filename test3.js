/**
 * Direction:
 * Remove key that have null or undefined value
 *
 * Expected Result:
 * [
 *   { session_name: 'first test', classes: [{ students: [{ student_name: 'budi' }] }] },
 *   { classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },
 * ]
 */
const data = [
  { session_name: 'first test', classes: [{ class_name: undefined, students: [{ student_name: 'budi' }] }] },
  { session_name: null, classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },
];

/* console.log(data[1].classes); */
function result(data) {
  // Your Code Here
  
  data.forEach(function(items, index) {
      
      let getObject = removeEmptydata(items);
      var dataObject = Object.keys(getObject);
      
      data.push(getObject);
      
      for (let number = 0; number < dataObject.length; ++number) {
        
          const element = getObject[dataObject[number]];
          
          let resultElemen = Array.isArray(element);
          
          if(resultElemen === true){
          
            element.forEach(function(itemsRes, indexRes) {
              let getObjectRes = removeEmptydata(itemsRes);

              //console.log(getObjectRes);
            });
          }
          
      }
      
  });
  
  return data;
}

function removeEmptydata(dataArray){
    
    if(typeof dataArray === 'object' && dataArray !== null){
      Object.keys(dataArray).forEach(key => {
        if (dataArray[key] === null || dataArray[key] === undefined) {
          delete dataArray[key];
        }
      })
    }
    
    return dataArray;
}

//result(data);
console.log(result(data));