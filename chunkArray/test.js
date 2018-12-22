const chunkArray1 = require('./chunkArray')
const chunkArray2 = require('./chunkArray')

const testArray = [1, 2, 3, 4, 5, 6, 7, 8]
const chunkSize = 3
const transformedArray = [[1, 2, 3], [4, 5, 6], [7, 8]]

test('chunkArray function exists', () => {
  expect(chunkArray1).toBeDefined()
})

test('Chunk array in 3 arrays', () => {
  expect(chunkArray1(testArray, chunkSize)).toEqual(transformedArray)
})

test('chunkArray function exists', () => {
  expect(chunkArray2).toBeDefined()
})

test('Chunk array in 3 arrays', () => {
  expect(chunkArray2([1, 2, 3, 4, 5, 6, 7, 8], 3)).toEqual([[1, 2, 3], [4, 5, 6], [7, 8]])
})
