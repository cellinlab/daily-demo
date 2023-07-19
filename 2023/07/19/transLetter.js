// 给定一个字符串，将字符串中大小写字母互换。

function transLetter(str) {
  const isUpper = (char) => char >= 'A' && char <= 'Z';
  const isLower = (char) => char >= 'a' && char <= 'z';

  const newStr = [];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (isUpper(char)) {
      newStr[i] = char.toLowerCase();
    } else if (isLower(char)) {
      newStr[i] = char.toUpperCase();
    }
  }

  return newStr.join('');
}

console.log(transLetter('AbcD'));