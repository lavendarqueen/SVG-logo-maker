const Shape = require("./shape");

// Child class
class Triangle extends Shape {
  constructor(shapeName, shapeColor, textColor) {
    super(shapeName, shapeColor, textColor);
  }
  render() {
    return `<svg version="1.1"
      xmlns="http://www.w3.org/2000.svg">
      <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>
      <text
        x="150"
        y="125"
        font-size="60"
        text-anchor="middle"
        fill="${this.textColor}">
        ${this.shapeName}
      </text>
    </svg>`;
  }
}

module.exports = Triangle;
