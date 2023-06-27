const arr = [1, 2, 3, 4, 5];

const result = arr.reduce((preValue, currentValue) => {
  return preValue + currentValue;
}, 0);

console.log(result); // 15

const addOne = num => num + 1;
const double = num => num * 2;
const minusOne = num => num - 1;

const result2 = minusOne(double(addOne(1)));
console.log(result2); // 3

const funcs = [addOne, double, minusOne];

const result3 = funcs.reduce((preValue, currentFunc) => {
  return currentFunc(preValue);
}, 1);
console.log(result3); // 3

const pipe = (funcs) => {
  const cb = (preValue, currentFunc) => {
    return currentFunc(preValue);
  };
  return (params) => {
    return funcs.reduce(cb, params);
  };
};

const result4 = pipe(funcs)(1);
console.log(result4); // 3

const compose = (funcs) => {
  const cb = (preValue, currentFunc) => {
    return currentFunc(preValue);
  };
  return (params) => {
    return funcs.reduceRight(cb, params);
  };
};

const result5 = compose(funcs)(1);
console.log(result5); // 1