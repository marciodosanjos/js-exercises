class Stack {
  constructor() {
    this._count = 0;
    this._items = {};
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
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }
  clear() {
    this.items = {};
    this.count = 0;
    //this._count = 0; _ indica que atributo é privado
  }
  toString() {
    if (this.isEmpty()) {
      return "";
    }
    let objString = `${this.items[0]}`;
    for (let index = 0; index < this.count; index++) {
      objString = `${this.items[0]}, ${this.items[index]}`;
    }
    return objString;
  }
}

//instanciando a classe
const stack = new Stack();
console.log(Object.getOwnPropertyNames(stack));
console.log(stack.push(5));
console.log(stack.push(8));
console.log(stack.showItems());
console.log(stack.size());
console.log(stack.isEmpty());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.toString());
