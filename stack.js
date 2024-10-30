class Stack {
  constructor() {
    this.count = 0;
    this.items = {};
  }
  //métodos
  push(element) {
    this.items[this.count] = element;
    this.count++;
  }
  showItems() {
    return this.items;
  }
  size() {
    return this.count;
  }
  isEmpty() {
    return this.count === 0;
  }
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }
}

//instanciando a classe
const stack = new Stack();
console.log(stack.push(5));
console.log(stack.push(8));
console.log(stack.showItems());
console.log(stack.size());
console.log(stack.isEmpty());
console.log(stack.pop());
