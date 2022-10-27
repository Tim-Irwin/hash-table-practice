class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable { // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    // Initialize your buckets here
    this.capacity = numBuckets;
    this.data = new Array(this.capacity).fill(null);
    this.count = 0;
  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.capacity;
  }


  insert(key, value) {
    let index = this.hashMod(key);

    if(this.data[index]){
      let current = this.data[index]
      while(current){
        if(current.key === key){
          current.value = value;
          return;
        }
        current = current.next;
        }
        const pair = new KeyValuePair(key, value);

        pair.next = this.data[index];
        this.data[index] = pair;
        this.count++;
      } else {
        const newPair = new KeyValuePair(key, value);
        this.data[index] = newPair;
        this.count++;
      }
  }

  read(key) {
    // Your code here
    let index = this.hashMod(key);
    let curr = this.data[index];
    while(curr && curr.key !== key){
      curr = curr.next;
    }
    if (curr === null){
      return undefined;
    }
    return curr.value;
  }


  resize() {
    // Your code here
    // hash table property changes should occur first:
      // copy data to preserve old elements
      debugger;
      let oldData = this.data;
      // console.log(oldData);
      // reassign capacity to double its previous value
      this.capacity = this.capacity * 2;

      // re-instantiate data to an array with its new size filled with null
      let newData = new Array(this.capacity).fill(null);
      // reset count (calling insert will re-increment count)


    // iterate over old data
      // iterate over each element in old data, looking for nested nodes
        // insert every node back into our new data buckets
        let i = 0;
        while( i < oldData.length){
          let curr = oldData[i];
          // console.log(curr);
          while(curr){
            let newcurr = curr.next;
            curr.next = null;
            let newindex = this.hashMod(curr.key);
            newData[newindex] = curr;
            curr = newcurr;
          }
          i++;
        }
        this.data = newData;
  }


  delete(key) {
    // Your code here
  }
}

// let hashTable = new HashTable(2);
// hashTable.insert("key1", "value1");
// hashTable.insert("key2", "value2");
// hashTable.insert("key3", "value3");

// hashTable.resize();

module.exports = HashTable;
