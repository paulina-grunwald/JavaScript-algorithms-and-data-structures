/**
 *  Given a array, startIndex and endIndex
 *   reorder item in the array
 * @param array {Array} string to reverse
 * @param startIndex {Number}
 * @param endIndex {Number}statu
 */


function reorderArray = (array, startIndex, endIndex) {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}