/**
 *  Write a function which returns an array with unique entries(all duplicates are removed).
 *
 * @param myArray {Array} array to split
 */

function removeDuplicateInArray (myArray) {
  const transforemdArray = [...new Set(myArray)]
  return transforemdArray
}

function removeDuplicateInArray1 (myArray) {
  const transforemdArray = myArray.filter((item, index) => Array.indexOf(item) === index)
  return transforemdArray
}

function removeDuplicateInArray3 (myArray) {
  const transforemdArray = myArray.reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], [])

  return transforemdArray
}

module.exports = removeDuplicateInArray
module.exports = removeDuplicateInArray1
module.exports = removeDuplicateInArray3
