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

let singlyLinkedList = {
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
};

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
}

let myLinkedList = new MySinglyLinkedList(1);
