function dailyTemperatures(temperatures) {
  const result = [];

  for (let i = 0; i < temperatures.length; i++) {
    const today = temperatures[i];
    let found = false;
    for (let j = i + 1; j < temperatures.length; j++) {
      const next = temperatures[j];
      if (next > today) {
        result.push(j - i);
        found = true;
        break;
      }
    }
    if (!found) {
      result.push(0);
    }
  }

  return result;
}