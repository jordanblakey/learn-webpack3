import _ from 'lodash';
import './style.css';
import Image1 from './image.jpg';
import Data from './data.xml';
import printMe from './print.js'

function component() {

  // Log imported XML to the console
  console.log(Data);


  // Lodash, now imported by this script
  var element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div.
  var myImage1 = new Image();
  myImage1.src = Image1;
  element.appendChild(myImage1);

  // Create the button
  var btn = document.createElement('button');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());