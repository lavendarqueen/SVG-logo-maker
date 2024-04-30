const fs = require("fs");
const inquirer = require("inquirer");
const Circle = require("./lib/circle.js");
const Square = require("./lib/square.js");
const Triangle = require("./lib/triangle.js");

// Questions for user input
const questions = [
  {
    type: "input",
    message: "Please enter up to three letters for your logo.",
    name: "textContent",
  },
  {
    type: "input",
    message: "Please enter a color name or hexadecimal code for your text.",
    name: "textColor",
  },
  {
    type: "list",
    message: "Please choose a background shape.",
    name: "backgroundShape",
    choices: ["triangle", "square", "circle"],
  },
  {
    type: "input",
    message:
      "Please enter a color name or hexadecimal code for your background shape.",
    name: "backgroundColor",
  },
];

inquirer.prompt(questions).then((answers) => {
  let shape;
  if (answers.backgroundShape === "triangle") {
    shape = new Triangle(
      answers.textContent,
      answers.backgroundColor,
      answers.textColor
    );
  } else if (answers.backgroundShape === "circle") {
    shape = new Circle(
      answers.textContent,
      answers.backgroundColor,
      answers.textColor
    );
  } else {
    shape = new Square(
      answers.textContent,
      answers.backgroundColor,
      answers.textColor
    );
  }
  fs.writeFile("logo.svg", shape.render(), (err) => {
    if (err) console.log(err);
    else console.log("logo successfully created");
  });
});
