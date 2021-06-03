const { name, campus } = require('./information');
const cowsay = require('cowsay')

let output = cowsay.say({ text: `Hello I\'m ${name} from ${campus} Campus!` });
console.log(output);
