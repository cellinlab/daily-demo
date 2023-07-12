const s = "abca";

function validPalindrome(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right && s[left] === s[right]) {
    left++;
    right--;
  }

  if (isPalindrome(left + 1, right)) {
    return true;
  }

  if (isPalindrome(left, right - 1)) {
    return true;
  }

  function isPalindrome(left, right) {
    while (left < right) {
      if (s[left] !== s[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }

  return false;
}