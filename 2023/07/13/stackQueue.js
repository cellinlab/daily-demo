class MyQueue {
  constructor() {
    this.stack = [];
    this.rverseStack = [];
  }

  push(x) {
    this.stack.push(x);
  }

  pop() {
    if (this.rverseStack.length === 0) {
      while (this.stack.length > 0) {
        this.rverseStack.push(this.stack.pop());
      }
    }
    return this.rverseStack.pop();
  }

  peek() {
    if (this.rverseStack.length === 0) {
      while (this.stack.length > 0) {
        this.rverseStack.push(this.stack.pop());
      }
    }
    return this.rverseStack[this.rverseStack.length - 1];
  }

  empty() {
    return this.stack.length === 0 && this.rverseStack.length === 0;
  }
}