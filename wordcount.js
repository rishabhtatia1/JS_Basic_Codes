/*Create a function that takes a string and returns the word count. The string will be a sentence.

Examples
countWords("Just an example here move along") ➞ 6

countWords("This is a test") ➞ 4
*/
const countWords = (str) => {
	let count = 0,
	    i;
	for (i = 0; i < str.length; i++) {
		if (str[i] === ' ') {
			 count++;
		}
	}
	count = count + 1;
	return count;
}
