// Given a string, return the length of the longest substring without
// repeating characters.
// --- Example
// lengthOfLongestSubstring("abcabcbb") --> 3 since length of "abc"
// lengthOfLongestSubstring("bbbbb") --> 1 since length of "b"

function lengthOfLongestSubstring(s) {
  let charObj = {};
  let startIndex = 0;
  let maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    let lastChar = s[i];
    if (charObj[lastChar] != undefined) {
      startIndex = charObj[lastChar] + 1;
    }

    charObj[lastChar] = i;

    maxLength = Math.max(maxLength, i - startIndex + 1);
  }

  return maxLength;
}

module.exports = lengthOfLongestSubstring;
