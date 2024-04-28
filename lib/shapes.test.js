const Shape = require("./shape");

describe("Shape class", () => {
  test("Should create the specified shape and color.", () => {
    const shape = new Shape("Cir", "Circle", "red", "yellow");
  });

  expect(Shape.shapeType).toBe("Cir");
  expect(Shape.shapeName).toBe("Circle");
  expect(Shape.shapeColor).toBe("green");
  expect(Shape.textColor).toBe("yellow");
});

describe("Shape class", () => {
  test("Should create the specified shape and color.", () => {
    const shape = new Shape("Tri", "Triangle", "green", "yellow");
  });
  expect(Shape.shapeType).toBe("Tri");
  expect(Shape.shapeName).toBe("Triangle");
  expect(Shape.shapeColor).toBe("green");
  expect(Shape.textColor).toBe("yellow");
});

describe("Shape class", () => {
  test("Should create the specified shape and color.", () => {
    const shape = new Shape("Square", "Sq", "purple", "white");
  });
  expect(Shape.shapeType).toBe("Square");
  expect(Shape.shapeName).toBe("Sq");
  expect(Shape.shapeColor).toBe("purple");
  expect(Shape.textColor).toBe("white");

  test("Should set default values if not provided", () => {
    const shape = new Shape();

    expect(shape.shapeType).toBeUndefined();
    expect(shape.shapeName).toBeUndefined();
    expect(shape.shapeColor).toBeUndefined();
    expect(shape.textColor).toBeUndefined();
  });
});
