const Shape = require("./shape");

// Child class
class Square extends Shape {
  constructor(shapeName, shapeColor, textColor) {
    super(shapeName, shapeColor, textColor);
  }

  render() {
    return `<svg
    version="1.1"
    width="300"
    height="200"
    xmlns="http://www.w3.org/2000/svg"
  >
  <rect width="300" height="300" x="10" y="10" rx="20" ry="20" fill="${this.shapeColor}"
  />

    <text
      x="150"
      y="125"
      font-size="60"
      text-anchor="middle"
      fill="${this.textColor}"
    >
      ${this.shapeName}
    </text>
  </svg>`;
  }
}

module.exports = Square;
