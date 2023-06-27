const Box = (x) => {
  return {
    map: (f) => Box(f(x)),
    valueOf: () => x,
  };
};

const add4 = (num) => num + 4;
const multiply3 = (num) => num * 3;
const divide2 = (num) => num / 2;

const result = Box(2).map(add4).map(multiply3).map(divide2).valueOf();

console.log(result); // 9