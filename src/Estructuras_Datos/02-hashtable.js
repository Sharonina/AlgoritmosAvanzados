/*
Son similares a los objetos, ya que tienen un key y value, su diferencia es que tienen un paso extra,
es decir una 'hash function' que viene siendo un address.
Nosotros podemos indicar de que tamaño será el hashtable

Métodos:
  -Insert
  -Search
  -Delete

Puede llegar a haber 'Colisiones' y esto es inevitable. Es decir que haya 2 elementos en un mismo bucket con el mismo address
*/

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  hashMethod(key) {
    let hash = 0;
    for (let i = 0; (i = key.length); i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  set(key, value) {
    const address = this.hashMethod(key);

    if (!this.data[address]) {
      this.data[address] = [];
    } else {
      this.data[address].push([key, value]); //genera la colision
      return this.data;
    }
  }
}

const myHashTable = new HashTable(50);
