const str = '()[]{}';

const isValidParentheses = (str) => {
  const stack = [];
  const map = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    } else {
      const top = stack.pop();
      if (map[top] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

console.log(isValidParentheses(str));