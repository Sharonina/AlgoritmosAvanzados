/*
LIFO (Last in, First out)
Métodos:
  -Pop
  -Push
  -Peek (Toma el último elemento de la línea)

  * no se pueden añadir nodos a mitad, solo al final
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    const lastItem = this.top;
    return lastItem;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;

    return this;
  }
  pop() {
    if (this.length === 0) {
      return "Stack is already empty";
    }
    if (this.length === 1) {
      this.top = null;
      this.bottom = null;
      this.length = 0;
      return "Empty stack";
    } else {
      this.top = this.top.next;
      this.length--;
      return this;
    }
  }
}

const myStack = new Stack();
