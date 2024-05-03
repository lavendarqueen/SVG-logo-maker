# SVG-logo-maker

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath) ![License](https://img.shields.io/badge/License-MIT-blue.svg)

## Description

This is an application to create logos in varying shapes and colors at the user's discretion, using a few prompts from the command line interface. It was a fun and interesting project and I learned about the SVG (Scalable Vector Graphics) coordinate system, as well as how to build tests using Jest.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Credits](#credits)
- [License](#license)
- [Contributions](#contributions)
- [Contact](#contact)

## Installation

From the command line, input node index.js and follow the prompts:
![]()

## Usage

1. To preview your logo, right-click on the logo.svg file.
   ![]()

2. Select "Preview SVG".
   ![]()
   .

## Tests

I built testing suites for each of the three shape and various color choices for this application using Jest. To run the tests:

1. From the command line, input "npm install jest" and hit enter.
2. Then input "npm run test" and hit enter.
3. You will find the test results in the terminal.

## Credits

I collaborated with Melissa Cade, Teacher's Assistant Casey Miller, and Tutors Megan Meyers and Andrew Hardemon.

I also consulted the following third-party assets:

- Wikipedia: https://en.wikipedia.org/wiki/SVG
- Jest: https://jestjs.io/
- MDN web docs SVG tutorial: https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial

## License

### MIT License

Copyright (c) 2024 Phyllis Ann Lataille

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

## Contributions

Contributions in the interest of sharing ideas and concepts are sincerely appreciated. To contribute, fork my repository and send a pull request with your improvements. Please leave a star!

## Contact

- Email: lataillep@gmail.com
- GitHub username: lavendarqueen
- Deployed repository: https://note-taker-ytjo.onrender.com

![Yellow Triangle](/assets/Screenshot2-logo.png)

<!-- ## User Story

AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer

## Acceptance Criteria

GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered

Mock-Up
The following image shows a mock-up of the generated SVG given the following input entered by the user: SVG for the text, white for the text color, circle from the list of shapes, and green for the shape color. Note that this is just an image of the output SVG and not the SVG file itself:

Image showing a green circle with white text that reads "SVG.".
Getting Started
This Challenge combines many of the skills covered so far. In addition to the User Story and Acceptance Criteria, we’ve provided some guidelines to help you get started.

Because this Challenge requires a video submission, refer to the Full-Stack Blog video submission guideLinks to an external site. for guidance on creating and sharing a video.

Your application should use JestLinks to an external site. for running the unit tests and InquirerLinks to an external site. for collecting input from the user. The application will be invoked by using the following command:

node index.js
It is recommended that you start with a directory structure that looks like the following example:

.
├── examples/ // Example svg file(s) created with the app
├── lib/ // Folder for classes or functions
├── shapes.js // Exports `Triangle`, `Circle`, and `Square` classes
├── shapes.test.js // Jest tests for shapes
└── more... // Additional files and tests
├── .gitignore // Indicates which folders and files Git should ignore
├── index.js // Runs the application using imports from lib/
├── package.json
└── README.md // App description, link to video, setup and usage instructions
IMPORTANT
Make sure that you remove dist from the .gitignore file so that Git will track this folder and include it when you push up to your application's repository.

The application must include Triangle, Circle, and Square classes, as well as tests for each of these classes using Jest. While not a requirement, it is recommended that you place any common functionality and properties shared by the Triangle, Circle, and Square classes in a parent Shape class and use inheritance to reuse the code in the child classes.

Each shape class should be tested for a render() method that returns a string for the corresponding SVG file with the given shape color.

The following example test should pass:

const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
You may need to add additional files in the lib folder for handling user input, writing to a file, etc. Writing tests for these additional files is optional. -->
