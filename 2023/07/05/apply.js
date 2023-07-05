// case: apply
function test(msg) {
  console.log(`${this.name}: ${msg}`);
}

var person = {
  name: 'cell',
};

test.apply(person, ['hello']); // cell: hello

// implement apply
Function.prototype.tinyApply = function (ctx) {
  ctx = ctx || window;

  ctx.fn = this;
  const args = arguments[1];
  const result = ctx.fn(...args);
  delete ctx.fn;

  return result;
};

// test
test.tinyApply(person, ['hello']); // cell: hello