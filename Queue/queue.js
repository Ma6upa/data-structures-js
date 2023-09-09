class Queue {
  collection = [];

  print() {
    return this.collection
  }

  enqueue(value) {
    this.collection.push(value)
  }

  dequeue() {
    return this.collection.shift()
  }

  first() {
    return this.collection[0]
  }

  size() {
    return this.collection.length
  }

  isEmpty() {
    return (this.collection.length === 0)
  }
}

const myQueue = new Queue();
myQueue.enqueue('a')
myQueue.enqueue('b')
myQueue.enqueue('c')
console.log(myQueue.print())
myQueue.dequeue()
console.log(myQueue.first())
console.log(myQueue.print())