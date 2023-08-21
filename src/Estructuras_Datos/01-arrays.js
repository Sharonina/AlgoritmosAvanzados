/*
- Estáticos:
  Ya no se pueden mutar, ya que se designa la longitud desde el inicio.
  Para mutarlo, se debe borrar, clonar y crear un nuevo espacio en memoria con los nuevos slots
- Dinámicos:
  Estos los maneja JS por dafault.
  JS nos provee del doble de espacio disponible por si se necesita (si nuestro array es de 3 string, habrá 6 slots disponibles)
 */

const array = ["Sharon", "Diego", "Oscar"];
array.push("Ana"); // ["Sharon", "Diego", "Oscar", "Ana"];

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  delete(index) {
    const item = this.data[index];
    this.shiftIndex(index);
    return item;
  }
  shift() {
    const firstItem = this.data[0];
    delete this.data[0];
    this.shiftIndex(0);
    return firstItem;
  }
  shiftIndex(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
  unshift(item) {
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = item;
    this.length++;
    return this.data;
  }
}

const myArray = new MyArray();
