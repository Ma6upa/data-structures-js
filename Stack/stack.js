class Stack {
  count = 0;
  storage = {};

  push(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  pop() {
    if (this.count === 0) {
      return undefined;
    }

    this.count --;
    const result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }

  size() {
    return this.count;
  }

  peek() {
    return this.storage[this.count-1];
  }
}

const myStack = new Stack();

myStack.push(1);
myStack.push(2);
myStack.push(123456);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.size());
