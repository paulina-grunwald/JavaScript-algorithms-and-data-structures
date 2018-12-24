/**
 *  Given a string, return a new string with the reversed
 *  order of characters e.g reverse('big') === 'gib'
 * @param str {String} string to reverse
 *
 */

function reverse (string) {
  return string.split('').reverse().join('')
}

function reverse2 (string) {
  let reversed = ''
  for (let char of string) {
    reversed = char + reversed
  }
  return reversed
}

module.exports = reverse
module.exports = reverse2
