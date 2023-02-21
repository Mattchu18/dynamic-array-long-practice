class DynamicArray {

  constructor(defaultSize = 4) {
    this.capacity = defaultSize;
    this.length = 0;
    this.data = new Array(this.capacity);
  }

  read(index) {
    return this.data[index]
    // Your code here
  }

  push(val) {
    if ( this.length === this.capacity) this.resize();

    this.data[this.length] = val;
    this.length++;
    return this.length
  }


  pop() {
    if (this.length === 0) return undefined;

    this.length--;

    let popped = this.data[this.length];

    this.data[this.length] = undefined;

    return popped

  }

  shift() {

    if (this.length === 0) return undefined;

    this.length--;
    let shifted = this.data[0];

    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1]
    }
    return shifted

  }

  unshift(val) {
    if ( this.length === this.capacity) this.resize();

    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1]
    }
    this.data[0] = val;
    this.length++;
    return this.length;

  }

  indexOf(val) {
    for (let i = 0; i < this.length; i++) {
      if (this.data[i] === val) return i;
    }
    return -1
  }

  resize() {
    const arr = new Array(this.capacity *= 2);

    for (let i = 0; i < this.length; i++) {
      arr[i] = this.data[i]
    }
    this.data = arr
  }

}


dynamicArr = new DynamicArray(4);
console.log(dynamicArr)

dynamicArr.push(1);
dynamicArr.push(2);
dynamicArr.push(3);

console.log(dynamicArr)

dynamicArr.resize()

console.log(dynamicArr)
console.log(dynamicArr.data.length)
console.log(dynamicArr.capacity)

module.exports = DynamicArray;
