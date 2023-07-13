function isValid(s) {
  if (!s) return true;
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const isLeft = char === '(' || char === '[' || char === '{';
    if (isLeft) {
      stack.push(char);
    } else {
      const left = stack.pop();
      if (!left) {
        return false;
      }
      if (left === '(' && char !== ')') {
        return false;
      }
      if (left === '[' && char !== ']') {
        return false;
      }
      if (left === '{' && char !== '}') {
        return false;
      }
    }
  }
  return stack.length === 0;
}