# Reverse-Integer
Daily Code Challenge

# About
To keep my skills sharp, I am working through daily code challenges offerred by [Leetcode](leetcode.com).

# Challenge
Given a 32-bit signed integer, reverse digits of an integer.

Examples:

```Input: 123
Output: 321
```
```
Input: -123
Output: -321
```
```
Input: 120
Output: 21
```
*Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

# Solution
My approach is outlined below:
1. Define a variable (n) that stores the integer
2. Convert n into a string.
3. Split new string into a set of substrings stored in an array.
4. Define a function that reverses the elements in the array.
5. Join the reversed elements within the array together and convert back to string.
6. Convert the string into an integer.

# Other
This approach does not currently include the case as presented by the third example above. Currently, if the original value of n is 120, the code will return 021. 
