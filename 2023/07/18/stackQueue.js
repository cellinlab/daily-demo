class Queue {
  constructor() {
    this.leftStack = [];
    this.rightStack = [];
  }

  get length() {
    return this.leftStack.length + this.rightStack.length;
  }

  add(val) {
    this.leftStack.push(val);
  }

  delete() {
    if (!this.rightStack.length) {
      while (this.leftStack.length) {
        this.rightStack.push(this.leftStack.pop());
      }
    }
    return this.rightStack.pop();
  }
}

const queue = new Queue();
queue.add(1);
queue.add(2);
queue.add(3);
queue.delete();

console.log(queue);
console.log(queue.length);