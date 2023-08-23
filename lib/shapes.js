//class for shapes 

class triangle {
    constructor() {
      this.color = '';
    }
  
    setColor(color) {
      this.color = color;
    }
  
    renderShapes() {
      return `<polygon points="150,18 244,182 56,182" fill="${this.color}" />`;
    }
  }
  
   
class circle {
    constructor() {
      this.color = '';
    }
  
    setColor(color) {
      this.color = color;
    }
  
    renderShapes() {
      return `<circle cx="100" cy="100" r="80" fill="${this.color}" />`;
    }
  }
  
class square {
    constructor() {
      this.color = '';
    }
  
    setColor(color) {
      this.color = color;
    }
  
    renderShapes() {
      return `<rect x="50" y="50" width="100" height="100" fill="${this.color}" />`;
    }
  }
  

module.exports = { triangle, circle, square}
      