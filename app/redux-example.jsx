var redux = require('redux');

console.log('Starting redux example');

var reducer = (state = {name: 'Anonymous'}, action) => {
  // state = state || {name: 'Anonymous'};

  switch(action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
    default:
      return state;
  }
};
var store = redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// Subscribe to changes
var unsubcribe = store.subscribe(() => {
  var state = store.getState();

  console.log('Name is', state.name);
  document.getElementById('app').innerHTML = state.name;
});
// unsubcribe();

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Aakash'
});

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Ajit'
});

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
