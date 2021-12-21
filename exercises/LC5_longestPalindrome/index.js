//Given a string s, find the longest palindromic substring in s
// --- Example
// longestPalindrome("cbbd") --> "bb"
// longestPalindrome("abba") --> "abba"
// longestPalindrome("a") --> "a"

function longestPalindrome(s) {
  let biggestLength = 1;
  let palindromePos = 0; //First char of palindrome

  let palindromeAroundMiddle = (pointer1, pointer2) => {
    console.log(pointer1);
    while (
      s[pointer1] == s[pointer2] &&
      s[pointer1] != undefined &&
      s[pointer2] != undefined
    ) {
      if (pointer2 - pointer1 + 1 > biggestLength) {
        biggestLength = pointer2 - pointer1 + 1;
        palindromePos = pointer1;
        console.log(palindromePos);
      }
      pointer1--;
      pointer2++;
    }
  };

  for (let i = 0; i < s.length; i++) {
    palindromeAroundMiddle(i, i + 1);
    palindromeAroundMiddle(i - 1, i + 1);
  }
  console.log(palindromePos);
  console.log(biggestLength);
  return s.substring(palindromePos, palindromePos + biggestLength);
}

module.exports = longestPalindrome;
