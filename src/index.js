import _ from 'lodash';
import './style.css';
import Image1 from './image.jpg';
import Data from './data.xml';

function component() {
  var element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div.
  var myImage1 = new Image();
  myImage1.src = Image1;

  element.appendChild(myImage1);

  console.log(Data);

  return element;
}

document.body.appendChild(component());