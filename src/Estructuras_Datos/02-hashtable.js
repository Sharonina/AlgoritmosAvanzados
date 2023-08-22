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
    }
    this.data[address].push([key, value]); //genera la colision
    return this.data;
  }
  get(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }
  delete(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          let deletedItem = currentBucket[i];
          delete currentBucket[i];
          currentBucket.splice(i, 1);
          return deletedItem;
        }
      }
    }
  }
  getAllKeys() {
    const allKeys = [];
    for (let bucket of this.data) {
      if (bucket) {
        for (let item of bucket) {
          allKeys.push(item[0]);
        }
      }
    }
    return allKeys;
  }
}

const myHashTable = new HashTable(50);
