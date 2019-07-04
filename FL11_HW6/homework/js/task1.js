const a1 = prompt('Enter x-coordinate point A', 0);
const a2 = prompt('Enter y-coordinate point A', 0);
const b1 = prompt('Enter x-coordinate point B', 4);
const b2 = prompt('Enter y-coordinate point B', 4);
const c1 = prompt('Enter x-coordinate point C', 2);
const c2 = prompt('Enter y-coordinate point C', 2);

const checkLineCenterX = (a1+b1)/2; 
const checkLineCenterY = (a2+b2)/2;

console.log(checkLineCenterX === +c1 && checkLineCenterY === +c2);
