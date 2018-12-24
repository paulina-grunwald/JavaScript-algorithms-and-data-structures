const reverse = require('./reverseString')
const reverse2 = require('./reverseString')
test('Reverse function exists', () => {
  expect(reverse).toBeDefined()
})

test('Reverse reverses a string', () => {
  expect(reverse('abcd')).toEqual('dcba')
})

test('Reverse reverses a string', () => {
  expect(reverse('  abcd')).toEqual('dcba  ')
})

test('Reverse function exists', () => {
  expect(reverse2).toBeDefined()
})

test('Reverse reverses a string', () => {
  expect(reverse2('abcd')).toEqual('dcba')
})

test('Reverse reverses a string', () => {
  expect(reverse2('  abcd')).toEqual('dcba  ')
})
