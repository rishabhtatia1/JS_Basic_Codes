/*Write a function that partitions the array into two subarrays:
one with all even integers, and the other with all odd integers.
Return your result in the following format:
[[even],[odd]]

evenOddPartition([5, 8, 9, 2, 0]) ➞ [[8, 2, 0], [5, 9]]

evenOddPartition([1, 0, 1, 0, 1, 0]) ➞ [[0, 0, 0], [1, 1, 1]]
*/
function evenOddPartition(arr) {
    let evenArr = [];
    let oddArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenArr.push(arr[i]);
        } else {
            oddArr.push(arr[i]);
        }
    }
    let all = [evenArr, oddArr];
    return all;
}
