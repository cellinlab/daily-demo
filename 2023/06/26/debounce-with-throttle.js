const debounce = (fn, delay) => {
  let timer = null;
  let last = 0;
  return (...args) => {
    const ctx = this;
    const now = +new Date();
    if (now - last < delay) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        last = now;
        fn.apply(ctx, args);
      }, delay);
    } else {
      last = now;
      fn.apply(ctx, args);
    }
  };
};

let count = 0;
const fn = debounce(() => {
  console.log(count);
}, 1000);

setInterval(() => {
  count++;
  if (count < 20) {
    fn();
  }
}, 100);