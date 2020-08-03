import '@babel/polyfill';
let template = require('../views/user.pug');


document.querySelector('main').innerHTML = template();

console.log('hello');