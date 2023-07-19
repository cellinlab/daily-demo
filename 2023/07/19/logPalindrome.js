function logPalindrome() {
  function isPalindrome(str) {
    return str === str.split('').reverse().join('')
  }

  for (let i = 0; i < 100000; i++) {
    if (isPalindrome(i.toString())) {
      console.log(i);
    }
  }
}

logPalindrome();