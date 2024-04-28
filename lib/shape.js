const fs = require("fs");

class Shape {
  constructor(backgroundShape, backgroundColor) {
    this.backgroundShape = backgroundShape;
    this.backgroundColor = backgroundColor;
  }
  renderShape() {
    if (this.backgroundShape === "circle") {
      const svgShape = `<circle r="150" cx="150" cy="150 fill="${this.backgroundColor}" />`;
      return svgShape;
    } else if (this.backgroundShape === "square") {
      const svgShape = `<rect width="300" height="300 fill=${this.backgroundColor}"/>`;
      return svgShape;
    } else if (this.backgroundShape === "triangle") {
      const svgShape = `<triangle polygon points="150 20.1 300 279.9 0 279.9 0 150" fill="${this.backgroundColor}"/>`;
      return svgShape;
    }
  }
}

module.exports = Shape;
