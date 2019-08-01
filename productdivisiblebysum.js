/*Product Divisible By Sum?
Write a function that returns true if the product of an array is divisible by the sum of that same array.

Examples
divisible[3, 2, 4, 2] ➞ false

divisible[4, 2, 6] ➞ true
*/
// 1
const divisible = (arr) => {
    let sum = 0,
      product = 1,
      i;
    for (i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
        product = product * arr[i];
      }
    return product % sum === 0;
}
//2
const divisible = (arr) => {
    let product = arr.reduce((total, value) => {
        return total * value;
    }, 1);
    let sum = arr.reduce((total, value) => {
        return total + value;
    }, 0);
    return product % sum === 0;
}
