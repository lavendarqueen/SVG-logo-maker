const fs = require("fs");
const inquirer = require("inquirer");
const createSVG = require("'.lib/createSVG");

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
    name: "text-color",
  },
  {
    type: "list",
    message: "Please select a font for your Text.",
    name: "textFont",
    choices: [
      "Arial",
      "Broadway",
      "Calisto",
      "Garamond",
      "Helvetica",
      "Lucida",
      "Tahoma",
      "Times New Roman",
      "Trebuchet MS",
      "Verdana",
    ],
  },
  {
    type: "list",
    message: "Please choose a background shape.",
    name: "backgroundShape",
    choices: ["square", "circle", "ellipse", "triangle", "triangle", "hexagon"],
  },
  {
    type: "input",
    message:
      "Please enter a color name or hexadecimal code for your background shape.",
    name: "backgroundColor",
  },
];
