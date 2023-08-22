/*
Son conjuntos de nodos ordenados que contienen valores.

- Singly linked list: se compone del valor y el valor del 'next' (referencia)
Los nodos estan ligados uno con el siguiente; No se puede regresar, se debe iniciar el proceso
Métodos:
  -Prepend (Agregar nodo al inicio)
  -Append (Agregar nodo al final)
  -Lookup / search
  -Insert
  -Delete
*/

// 1 --> 2 --> 3 --> 4 --> null

/* let singlyLinkedList = {
  head: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null,
        },
      },
    },
  },
}; */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class MySinglyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }
  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = new Node(value);
    const firstPointer = this.getTheIndex(index - 1);
    const holdingPointer = firstPointer.next;
    firstPointer.next = newNode;
    newNode.next = holdingPointer;
    this.length++;

    return this;
  }
  getTheIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  remove(value) {
    //reto
  }
}

let myLinkedList = new MySinglyLinkedList(1);
