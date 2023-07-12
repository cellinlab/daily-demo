const str1 = "42";
const str2 = "   -42";
const str3 = "4193 with words";
const str4 = "words and 987";
const str5 = "-91283472332";

const myAtoi = (str) => {
  const max = Math.pow(2, 31) - 1;
  const min = -Math.pow(2, 31);

  str = str.trim();
  if (!str) {
    return 0;
  }

  let sign = 1;
  let index = 0;
  if (str[index] === '+' || str[index] === '-') {
    sign = str[index] === '+' ? 1 : -1;
    index++;
  }

  let result = 0;
  while (index < str.length) {
    const num = str[index];
    if (num === ' ' || isNaN(num)) {
      break;
    }
    result = result * 10 + Number(num);
    if (result > max) {
      return sign === 1 ? max : min;
    }
    index++;
  }

  return result * sign;
}