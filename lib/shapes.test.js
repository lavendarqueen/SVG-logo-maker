class Shape {
  constructor(name) {
    this.name = name;
  }
}

class Circle extends shape {
  constructor(name) {
    super(name);
    shape.setColor("green");
    expect(shape.render()).toEqual(
      '<circle points="0, 0, 150, 150" fill="green" />'
    );
  }
}

class Triangle extends shape {
  constructor(name) {
    super(name);
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
    );
  }
}

class Square extends shape {
  constructor(name) {
    super(name);
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      '<rect points="100, 100, 10, 10" fill="red" />'
    );
  }
}
