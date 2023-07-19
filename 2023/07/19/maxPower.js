var maxPower = function (s) {
  const memo = {};

  let max = 0;
  let maxChar = '';
  let current = s[0];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === current) {
      memo[char] = memo[char] ? memo[char] + 1 : 1;
    } else {
      current = char;
      memo[char] = 1;
    }
    if (memo[char] > max) {
      max = memo[char];
      maxChar = char;
    }
  }

  return [maxChar, max];
};