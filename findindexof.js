/*Create a function that takes an array and a string as
arguments and return the index of the string.

Examples
find_index(["hi", "edabit", "fgh", "abc"], "fgh") ➞ 2

find_index(["Red", "blue", "Blue", "Green"], "blue") ➞ 1

find_index(["a", "g", "y", "d"], "d") ➞ 3

*/
function find_index(arr, str) {
    return arr.indexOf(str);
}
