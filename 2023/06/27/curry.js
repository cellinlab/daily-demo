function curry(fn, arity = fn.length) {
  function generateCurried(prevArgs) {
    return function curried(nextArg) {
      const args = [...prevArgs, nextArg];
      if (args.length >= arity) {
        return fn(...args);
      } else {
        return generateCurried(args);
      }
    };
  }

  return generateCurried([]);
}

const add = (a, b, c) => a + b + c;

const curriedAdd = curry(add);

console.log(curriedAdd(1)(2)(3));