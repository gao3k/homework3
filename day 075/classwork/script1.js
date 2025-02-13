class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    get perimeter() {
      return 2 * (this.width + this.height);
    }
  }
  
  // Testing the Rectangle class
  const myRectangle = new Rectangle(5, 10);
  console.log(myRectangle.perimeter); // Output: 30
  