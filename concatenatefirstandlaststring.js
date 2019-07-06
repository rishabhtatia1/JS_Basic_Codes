/*Concatenate First and Last Name into One String
Given two strings, firstName and lastName, return a single string in the format "last, first".

Examples
concatName("First", "Last") ➞ "Last, First"

concatName("John", "Doe") ➞ "Doe, John"
*/
function concatName(firstName, lastName) {
    return `${lastName}, ${firstName}`;
}
