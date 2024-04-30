const Shape = require("./shape");
const Circle = require("./circle");
const Triangle = require("./triangle");
const Square = require("./square");

describe("Shape class", () => {
  test("Should create the specified shape and color.", () => {
    const shape = new Circle("pal", "green", "white");

    expect(shape.render()).toBe(`<svg version="1.1"
      width="300"
      height= "200"
      xmlns="http://www.w3.org/2000.svg">
      <circle cx="150" cy="100" r="80" fill="green"/>
      <text
        x="150"
        y="125"
        font-size="60"
        text-anchor="middle"
        fill="white">
        pal
      </text>
    </svg>`);
  });
});

describe("Shape class", () => {
  test("Should create the specified shape and color.", () => {
    const shape = new Square("pal", "green", "white");

    expect(shape.render()).toBe(`<svg version="1.1"
      width="300"
      height= "200"
      xmlns="http://www.w3.org/2000.svg">
       <rect width="300" height="300" x="10" y="10" rx="20" ry="20" fill="green"
  />
      <text
        x="150"
        y="125"
        font-size="60"
        text-anchor="middle"
        fill="white">
        pal
      </text>
    </svg>`);
  });
});

describe("Shape class", () => {
  test("Should create the specified shape and color.", () => {
    const shape = new Triangle("pal", "green", "white");

    expect(shape.render()).toBe(`<svg version="1.1"
      width="300"
      height= "200"
      xmlns="http://www.w3.org/2000.svg">
      <polygon points="150, 18 244, 182 56, 182" fill="green"/>
      <text
        x="150"
        y="125"
        font-size="60"
        text-anchor="middle"
        fill="white">
        pal
      </text>
    </svg>`);
  });
});
