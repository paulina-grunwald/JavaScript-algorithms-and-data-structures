/**
 *  Write a function which returns an array with arrays of the given size.
 *
 * @param myArray {Array} array to split
 * @param chunk_size {Integer} Size of every group
 */

function chunkArray1 (myArray, chunkSize) {
  let index = 0
  const arrayLength = myArray.length
  const tempArray = []
  for (index; index < arrayLength; index += chunkSize) {
    const myChunk = myArray.slice(index, index + chunkSize)
    tempArray.push(myChunk)
  }
  return tempArray
}

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

module.exports = chunkArray1
module.exports = chunkArray2
