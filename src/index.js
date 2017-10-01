import _ from 'lodash';
import './css/style.css';
import Image1 from './img/image.jpg';
import Data from './data/data.xml';
import printMe from './js/print.js';
import {
  cube
} from './js/math.js';


function component2() {
  var element = document.createElement('pre');

  element.innerHTML = [
    'Hello webpack!',
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n');

  return element;
}

document.body.appendChild(component2());


function component() {

  // Log imported XML to the console
  console.log(Data);

  // Lodash, now imported by this script
  var element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'Jordan!'], ' ');
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

var element3 = component(); // Store the element3 to re-render on print.js changes
document.body.appendChild(element3);

if (module.hot) {
  module.hot.accept('./js/print.js', function () {
    console.log('Accepting the updated printMe module!');
    // printMe();
    document.body.removeChild(element3);
    element3 = component(); // Re-render the "component" to update the click handler
    document.body.appendChild(element3);
  })
}