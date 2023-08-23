/*
FIFO(First in, first out)
-Métodos:
  -Enqueue (Agrega elemento al final de la línea)
  -Dequeue (Remueve el primer elemento de la línea)
  -peek (Toma el primer elemento de la línea)
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    const firstItem = this.first;
    return firstItem;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last = newNode;
      this.last.next = newNode;
    }
    this.length++;

    return this;
  }
  dequeue() {
    if (this.length === 0) {
      return "Queue is already empty";
    }
    if (this.length === 1) {
      this.first = null;
      this.last = null;
      this.length = 0;
      return "Empty queue";
    } else {
      this.first = this.first.next;
      this.length--;
      return this;
    }
  }
}

const myQueue = new Queue();
