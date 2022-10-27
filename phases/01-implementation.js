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
  }


  resize() {
    // Your code here
  }


  delete(key) {
    // Your code here
  }
}


module.exports = HashTable;