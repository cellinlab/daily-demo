function curry() {
  const fn = (a, b, c) => a + b + c;
  const arity = fn.length;

  const generateCurried = (prevArgs) => {
    return function curried(nextArg) {
      const args = [...prevArgs, nextArg];
      if (args.length >= arity) {
        return fn(...args);
      } else {
        return generateCurried(args);
      }
    };
  };

  return generateCurried([]);
}

const curriedAdd = curry();

console.log(curriedAdd(1)(2)(3));