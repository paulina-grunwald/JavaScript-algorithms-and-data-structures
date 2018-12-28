
/**
 * Given a string, return the character that is most
 *   commonly used in the string.
 * @param string {String} string to reverse
 *   maxChar("abcccccccd") === "c"
 */

function maxChar (string) {
  const charMap = {}

  for (let of string) {
    if (!charMap[char]) {
      charMap[char] = 1
    } else {
      charMap[char]++
    }
  }

}

module.exports = maxChar;
