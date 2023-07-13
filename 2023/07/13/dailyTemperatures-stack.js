function dailyTemperatures(temperatures) {
  const stack = [];
  const result = (new Array(temperatures.length)).fill(0);

  for (let i = 0; i < temperatures.length; i++) {
    const today = temperatures[i];

    while (stack.length > 0 && temperatures[stack[stack.length - 1]] < today) {
      const peek = stack.pop();
      result[peek] = i - peek;
    }

    stack.push(i);
  }

  return result;
}