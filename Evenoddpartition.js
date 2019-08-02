/*Write a function that partitions the array into two subarrays:
one with all even integers, and the other with all odd integers.
Return your result in the following format:
[[even],[odd]]

evenOddPartition([5, 8, 9, 2, 0]) ➞ [[8, 2, 0], [5, 9]]

evenOddPartition([1, 0, 1, 0, 1, 0]) ➞ [[0, 0, 0], [1, 1, 1]]
*/
const evenOddPartition = (arr) => {
    let evenArr = [],
        oddArr = [],
        all = [];
    for (let i = 0; i < arr.length; i++) {
        (arr[i] % 2 === 0) ? evenArr.push(arr[i]): oddArr.push(arr[i]);
    }
    all = [evenArr, oddArr];
    return all;
}
