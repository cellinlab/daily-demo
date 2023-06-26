/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const divide = function (a, b) {
  if (a === -(2 ** 31) && b === -1) {
    return 2 ** 31 - 1;
  }

  let negative = 2;
  if (a > 0) {
    negative--;
    a = -a;
  }

  if (b > 0) {
    negative--;
    b = -b;
  }

  const result = divideHelper(a, b);

  return negative === 1 ? -result : result;
};

function divideHelper(a, b) {
  let count = 0;
  while (a <= b) {
    let tmpB = b;
    let multiple = 1;
    while (tmpB >= -(2 ** 30) && a <= tmpB + tmpB) {
      multiple += multiple;
      tmpB += tmpB;
    }
    count += multiple;
    a -= tmpB;
  }
  return count;
}