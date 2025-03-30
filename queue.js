class Queue {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }
  enqueue(element) {
    this.items[this.count] = element;
    this.count++;
  }

  dequeue() {
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return this.items[this.lowestCount];
  }

  size() {
    return this.count;
  }
  isEmpty() {
    return this.count - this.lowestCount === 0;
  }

  peek() {
    if (this.count === 0) {
      return;
    }
    return this.items[this.lowestCount];
  }
  clear() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }
  toString() {
    if (this.isEmpty()) {
      return;
    }
    let objString = `${this.items[this.lowestCount]}`;
    for (let index = yhis.lowestCount; index < this.count; index++) {
      objString = `${objString}, ${this.items[i]}`;
    }
    return objString;
  }
}

const newQueue = new Queue();

console.log(newQueue.enqueue());
console.log(newQueue.size());
