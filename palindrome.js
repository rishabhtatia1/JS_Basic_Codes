/*A palindrome is a word that is identical forward and backwards.

mom
racecar
kayak
Given a word, create a function that checks whether it is a palindrome.

Examples
checkPalindrome("mom") ➞ true

checkPalindrome("scary") ➞ false
*/
const checkPalindrome = (str) => {
  for (let i = 0; i < str.length; i++) {
		if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
