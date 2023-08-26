/*
Ayudan a generar una ramificación de datos
Se compone de root, parent, child, leaf, sibling, sub tree

* Binary tree balanceado o perfecto se duplica con las ramificaciones
* Binary search tree unbalanced se puede inclinar hacia un solo lado

Binary search tree (buscar información): Sigue la regla de que los numeros que van decrementando van
del lado izquierdo y los numeros que incrementan del lado derecho:

        10
      /   \
    5      16
  / \     / \
2    6  12  24

-Métodos:
  -Search
  -Insert
  -Delete
*/

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarysearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  //search(value) > el nodo completo
}

const tree = new BinarysearchTree();
