/*Is the Number Even or Odd?
Create a function that takes a number as an argument and returns "even" for even numbers and "odd" for odd numbers.

Examples
isEvenOrOdd(3) ➞ "odd"

isEvenOrOdd(146) ➞ "even
*/
function isEvenOrOdd(num) {
	if (num % 2 === 0)
			return "even";
	else
		return "odd";
}
