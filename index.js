class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos > this.items.length) {
      throw new Error('OutOfBounds');
    } else {
      return pos
    }
  }

  max() { 
    if (this.items.length === 0) { 
      throw new Error("EmptySortedList"); 
    } else {
      return Math.max(...this.items); 
    } 
  }

  min() {
    if (this.items.length === 0) {
      throw new Error('OutOfBounds');
    } else {
      return Math.min(...this.items);
    }
  }

  sum() {
    const sum = this.items.reduce((a, b) => a + b, 0);
    return sum;
  }

  // esta no me sale :_(
  avg() {
    if (this.items.length === 0) {
      throw new Error('OutOfBounds');
    } else {
      const average = this.sum() / this.length;
      return average;
    }
  }
}

module.exports = SortedList;
