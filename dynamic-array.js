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

    // Your code here
  }

  unshift(val) {

    // Your code here
  }

  indexOf(val) {

    // Your code here
  }

  resize() {

    // Your code here
  }

}


dynamicArr = new DynamicArray(8);
console.log(dynamicArr)

dynamicArr.push(1);
dynamicArr.push(2);
dynamicArr.push(3);

console.log(dynamicArr)

dynamicArr.pop()

console.log(dynamicArr)


module.exports = DynamicArray;
