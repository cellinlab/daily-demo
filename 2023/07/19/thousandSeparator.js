/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function (n) {
  if (n === 0) {
    return '0';
  }

  let result = '';
  let count = 0;

  while (n > 0) {
    const digit = n % 10;
    if (count === 3) {
      result = ',' + result;
      count = 0;
    }
    result = digit + result;
    count++;
    n = Math.floor(n / 10);
  }

  return result;
};

console.log(thousandSeparator(123456789));