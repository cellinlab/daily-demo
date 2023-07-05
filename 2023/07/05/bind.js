// usage case: bind
function test(msg) {
  console.log(`${this.name}: ${msg}`);
}

var person = {
  name: 'cell',
};

var testBind = test.bind(person, 'hello');
testBind(); // cell: hello

// implement bind
Function.prototype.tinyBind = function (ctx) {
  cxt = ctx || window;

  const self = this;
  const args = Array.prototype.slice.call(arguments, 1);

  return function F() {
    if (this instanceof F) {
      return new self(...args, ...arguments);
    }
    return self.apply(ctx, args.concat(...arguments));
  };
};

// test
var testTinyBind = test.tinyBind(person, 'hello');
testTinyBind(); // cell: hello

// test for new
var testTinyBindNew = new testTinyBind();
console.log(testTinyBindNew.name); // cell