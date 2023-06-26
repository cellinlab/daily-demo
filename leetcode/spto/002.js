/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let cursorA = a.length - 1;
  let cursorB = b.length - 1;
  let carry = 0;
  let result = '';
  while (cursorA >= 0 || cursorB >= 0) {
    let currentA = cursorA >= 0 ? a[cursorA--] : '0';
    let currentB = cursorB >= 0 ? b[cursorB--] : '0';
    let sum = Number(currentA) + Number(currentB) + carry;
    carry = sum >= 2 ? 1 : 0;
    sum = sum >= 2 ? sum - 2 : sum;
    result = sum + result;
  }
  if (carry) {
    result = carry + result;
  }
  return result;
};

console.log(addBinary('10', '11'));