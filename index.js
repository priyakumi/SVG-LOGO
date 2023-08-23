//  Package decalaration

const inquirer = require('inquirer')
const fs = require('fs')
const { triangle, circle, square } = require('./lib/shapes')

// command line prompt questions decalaration 
const questionsArray = [
    {
        type: 'input',
        message: 'Enter the logo characters(character length should be 3 or less than 3):',
        name: 'characters',
        validate: function(answer) { // check the logo string length it should be less than 3.
            if (answer.length > 3) {
                return console.log("Response needs to be 3 characters or less")
            }
            return true
        }
    },
    {
        type: 'input',
        message: 'Input color of text (color name(eg: blue) or hexadecimal(ffff)):',
        name: 'textColor',
    },
    {
        type: 'list',
        message: 'Choose logo shape',
        choices: ['circle', 'square', 'triangle'],
        name: 'shape',
    },
    {
        type: 'input',
        message: 'Input color of shape(example:red):',
        name: 'shapeColor',
    }
,];

// logoGenerator function generetes the logo accocding to the user input data
function logoGenerator(answers) {
    const { characters, textColor, shape, shapeColor } = answers;
    let shapeObj;
  
    switch (shape) {
      case 'circle':
        shapeObj = new circle();// creating a new shape (circle)
        break;
      case 'square':
        shapeObj = new square();//creating a new shape (square)
        break;
      case 'triangle':
        shapeObj = new triangle();//creating a new shape (triangle)
        break;
      default:
        console.log('Invalid shape');
        return;
    }
  
    shapeObj.setColor(shapeColor); // set the fill color to shape
  
    //generates the logo with chosen shape, given text and color

    const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
        ${shapeObj.renderShapes()}
        <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" fill="${textColor}" font-size="50">${characters}</text>
      </svg>`;

  //writes the logo to the file name logo.svg in the examples folder

    fs.writeFile('./examples/logo.svg', svgContent, (err) => {
      if (err) {
        console.error('Error writing SVG file:', err);
      } else {
        console.log('Logo generated');
      }
    });
  }
  
  // logoMain function  is the main function get the user input data and call the logoGenerator function.
function logoMain() {
    inquirer.prompt(questionsArray).then((answers) => {
      logoGenerator(answers);
    });
  }
  
// Function call to initialize app
logoMain();