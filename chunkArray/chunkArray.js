/**
 *  Write a function which returns an array with arrays of the given size.
 *
 * @param myArray {Array} array to split
 * @param chunk_size {Integer} Size of every group
 */

const chunkArray1 = (myArray, chunkSize) => {
  let index = 0
  const arrayLength = myArray.length
  const tempArray = []
  for (index; index < arrayLength; index += chunkSize) {
    const myChunk = myArray.slice(index, index + chunkSize)
    tempArray.push(myChunk)
  }
  return tempArray
}

var result1 = chunkArray1([1, 2, 3, 4, 5, 6, 7, 8], 3)
// Outputs : [ [1,2,3] , [4,5,6] ,[7,8] ]
console.log(result1)

/**
 * Returns an array with arrays of the given size.
 *
 * @param myArray {Array} Array to split
 * @param chunkSize {Integer} Size of every group
 */

function chunkArray2 (myArray, chunkSize) {
  var results = []
  while (myArray.length) {
    results.push(myArray.splice(0, chunkSize))
  }
  return results
}

// Split in group of 3 items
var result2 = chunkArray2([1, 2, 3, 4, 5, 6, 7, 8], 3)
// Outputs : [ [1,2,3] , [4,5,6] ,[7,8] ]
console.log(result2)
