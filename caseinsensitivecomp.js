/*Write a function that validates whether two strings
are identical. Make this validator case insensitive.

Examples
match("hello", "hELLo") ➞ true

match("motive", "emotive") ➞ false
*/
function match(s1, s2) {
	return ((s1.toLowerCase()) === s2.toLowerCase());
}
