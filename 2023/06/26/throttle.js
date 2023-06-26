const throttle = (fn, interval) => {
  let last = 0;
  return (...args) => {
    const ctx = this;
    const now = +new Date();

    if (now - last >= interval) {
      last = now;
      fn.apply(ctx, args);
    }
  }
};

let count = 0;
const fn = throttle(() => {
  console.log(count);
}, 1000);

setInterval(() => {
  count++;
  fn();
}, 100);

// output:
// 1
// 11
// 21