import './hello';

const btn = document.querySelector('.webpack-button');

const clickButton = () => console.log('button clicked!')

btn.addEventListener("click", clickButton);

let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };

console.log(z);

