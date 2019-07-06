/*Create a function to remove all null values from an array.

Examples
removeNull(["a", null, "b", null]) ➞ ["a", "b"]

removeNull([null, null, null, null, null]) ➞ []

removeNull([7, 8, null, 9]) ➞ [7, 8, 9]
*/
function removeNull(arr) {
    let arrNoNull = arr.filter(function(x) {
        return x != null;
    });
    return arrNoNull;
}
