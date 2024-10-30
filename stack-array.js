//pilhas/stack > obedece ao princípio do LIFO (Last In Fisrt Out); os elementos novos ficam próx do topo, os mais velohs, na base;

class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
  clear() {
    this.items = [];
  }
}

//instanciando a classe
const stack = new Stack();
console.log(stack.push(5));
console.log(stack.push(8));
console.log(stack.push(11));
console.log(stack.push(15));
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.size());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.size());
console.log();
