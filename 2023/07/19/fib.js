var fib = function (n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
};

var fibPro = function (n) {
  const fib = new Array(n + 1).fill(0);

  fib[0] = 0;
  fib[1] = 1;

  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib[n];
}