/**
 *  Given a string, return true if the string is a palindrome
 *   or false if it is not.
 * @param string {String} string to reverse
 *
 */

function palindrome (string) {
  const reversedString = string.split('').reduce((reversed, char) => char + reversed, '')
  return reversedString === string
}
module.exports = palindrome
