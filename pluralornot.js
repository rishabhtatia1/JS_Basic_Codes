/*Create a function that takes in a word and determines whether
or not it is plural. A plural word is one that ends in "s".

Examples
isPlural("changes") ➞ true

isPlural("change") ➞ false
*/
// 1
function isPlural(word) {
	if (word.substr(-1) === 's') {
		return true;
	}
	else
		return false;
}
// 2
function isPlural(word) {
	return word.substr(-1) === 's';
}
