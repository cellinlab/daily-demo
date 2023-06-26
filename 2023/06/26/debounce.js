const debounce = (fn, delay) => {
  let timer = null;
  return (...args) => {
    const ctx = this;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(ctx, args);
    }, delay);
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