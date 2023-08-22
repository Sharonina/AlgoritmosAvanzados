/*
- Doubly linked list: Pueden ir hacia adelante y hacia atrás en la lista
Se compone de 3 valores, valor, next y previo
 */

// 1 <--> 2 <--> 3 <--> 4

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
class MyDoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }
}

let myLinkedList = new MyDoublyLinkedList(1);
