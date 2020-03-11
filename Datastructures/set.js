class MySet {
  constructor() {
    this.collection = [];
  }

  has(el) {
    return this.collection.indexOf(el) !== -1;
  }

  values() {
    return this.collection;
  }

  add(el) {
    if (!this.has(el)) {
      this.collection.push(el);
      return true;
    }
    return false;
  }

  remove(el) {
    if (this.has(el)) {
      const index = this.collection.indexOf(el);
      this.collection.splice(index, 1);
      return true
    }
    return false;
  }

  // returns the size of the collection
  size() {
    return this.collection.length;
  }

  // returns the union of two sets
  union(otherSet) {
    const unionSet = new MySet();
    this.values.forEach(val => {
      unionSet.add(val);
    });
    otherSet.values().forEach(val => {
      unionSet.add(val);
    });
    return unionSet;
  }

  // returns the intersection of 2 sets i.e values that are in both 2 sets 
  intersection(otherSet) {
    const intersectionSet = new MySet();
    this.values.forEach(val => {
      if (otherSet.has(val)) {
        this.intersection.add(val)
      }
    })

    return intersectionSet;
  }

  // returns the difference of 2 sets i.e values that are NOT in both sets
  difference(otherSet) {
    const differenceSet = new MySet();
    this.values.forEach(val => {
      if (!otherSet.has(val)) {
        this.intersection.add(val)
      }
    })

    return intersectionSet;
  }

  subSet(otherSet) {
    return this.values.every(val => (otherSet.has(val)))
  }
}

const setA = new MySet();
setA.add('a');
setB.add('b');
setB.remove('c');
setB.add('a');
setB.add('d');

console.log(setA.subSet(setB))
console.log(setA.intersection(setB).values())
console.log(setB.difference(setA).values())
