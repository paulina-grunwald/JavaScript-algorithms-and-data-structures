
/**
 *  Given a string, return true if the string is a palindrome
 *   or false if it is not.
 * @param num {Integer} string to reverse
 * Examples
 *   reverseInt(13) === 31
 *   reverseInt(-80) === -8
 */

function reverseInt (num) {
  const sign = Math.sign(num)
  const reversed = num
    .toString()
    .split('').reverse()
    .join('')

  return parseInt(reversed) * sign
}

module.exports = reverseInt
