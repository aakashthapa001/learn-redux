var redux = require('redux');

console.log('Starting redux example');

var reducer = (state = {name: 'Anonymous'}, action) => {
  // state = state || {name: 'Anonymous'};

  return state;
};
var store = redux.createStore(reducer);
var currentState = store.getState();

// ===================================================== //
// Pure function
// function add(a, b) {
//   return a + b;
// }
//
// // Not Pure function
// var a = 3;
// function add(b) {
//   return a + b;
// }
//
// var result;
// function add(a, b) {
//   result = a + b;
//   return result;
// }
//
// function add(a, b) {
//   return a + b + new Date().getSeconds();
// }
//
//
//
// function changeProp(obj) {
//   return {
//     ...obj,
//     name: 'Ajit'
//   };
// }
//
// var startingValue = {
//   name: 'Aakash',
//   age: 22
// };
// var res = changeProp(startingValue);
// console.log(startingValue);
// console.log(res);
