/*Multiply by Length
Create a function to multiply all values in an array by the amount of values in that array.

Examples
MultiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]

MultiplyByLength([4, 1, 1]) ➞ ([12, 3, 3])

MultiplyByLength([1, 0, 3, 3, 7, 2, 1]) ➞  [7, 0, 21, 21, 49, 14, 7]
*/
function MultiplyByLength(arr) {
	for (let i = 0;i < arr.length;i++)
		{
			arr[i] = arr[i] * arr.length;
		}
	return arr;

}
