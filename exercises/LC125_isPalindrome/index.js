function isPalindrome(s) {
  s = s.toLowerCase().replace(/[\W_]/g, "");
  let pointer1 = 0;
  let pointer2 = s.length - 1;
  while (pointer1 < pointer2) {
    if (s.charAt(pointer1) != s.charAt(pointer2)) {
      return false;
    }
    pointer1++;
    pointer2--;
  }
  return true;
}

module.exports = isPalindrome;
