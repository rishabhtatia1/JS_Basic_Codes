/*Product Divisible By Sum?
Write a function that returns true if the product of an array is divisible by the sum of that same array.

Examples
divisible[3, 2, 4, 2] ➞ false

divisible[4, 2, 6] ➞ true
*/
// 1
function divisible(arr) {
    let sum = 0;
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    for (let i = 0; i < arr.length; i++) {
        product = product * arr[i];
    }
    return product % sum === 0;
}
//2
function divisible(arr) {
    let p = arr.reduce((total, value) => {
        return total * value;
    }, 1)
    let s = arr.reduce((total, value) => {
        return total + value;
    }, 0)
    return p % s === 0;
}
