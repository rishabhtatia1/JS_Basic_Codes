/*
You are given 2 out of 3 of the angles in a triangle, in degrees.
Write a function that classifies the missing angle as either "acute", "right",
or "obtuse" based on its degrees.

An acute angle is one smaller than 90 degrees.
A right angle is one that is exactly 90 degrees.
An obtuse angle is one greater than 90 degrees (but smaller than 180 degrees).
For example: missingAngle(11, 20) should return "obtuse", since the missing
angle would be 149 degrees, which makes it obtuse.

Examples
missingAngle(27, 59) ➞ "obtuse"

missingAngle(135, 11) ➞ "acute"

missingAngle(45, 45) ➞ "right"
*/
// 1
const missingAngle = (angle1, angle2) => {
    const angle3 = 180 - angle2 - angle1;
    if (angle3 === 90)
        return "right";
    else if (angle3 > 90)
        return "obtuse";
    else
        return "acute";
}
// 2
const missingAngle = (angle1, angle2) => {
    const angle3 = 180 - angle2 - angle1;
    return angle3 > 90 ? 'obtuse' : angle3 < 90 ? 'acute' : 'right';
}
