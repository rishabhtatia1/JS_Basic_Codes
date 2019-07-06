/*
Find the Largest Number in an Array
Create a function that takes an array of numbers. Return the largest number in the array.

Examples
findLargestNum([4, 5, 1, 3]) ➞ 5

findLargestNum([300, 200, 600, 150]) ➞ 600
*/
//1
function findLargestNum(arr) {
  var max = arr[0];
  for(var i = 1; i < arr.length; i++) {
    if(max < arr[i]) {
       max = arr[i];
    }
  }
  return max;
}
//2
function findLargestNum(arr) {
   return Math.max.apply(null, arr);
}
