// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {}

module.exports = reverse;

// Easy solution with arry revers
// function reverse(str) {
//   return str
//     .split('')
//     .reverse()
//     .join('');
// }

// For of solution
// function reverse(str) {
//   let reversed = '';
//   for (let character of str) {
//     reversed = character + reversed;
//   }

//   return reversed;
// }

// Reduce method to solve the problem
// function reverse(str) {
//   return str.split('').reduce((reversed, character) => {
//     return character + reversed;
//   }, '');
// }

// One line solution with arrow function function reverse(str) {
// return str.split('').reduce((rev, char) => char + rev);
// }(params) {

// }
