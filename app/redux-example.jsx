var redux = require('redux');

console.log('Starting redux example');

var stateDefault = {
  name: 'Anonymous',
  hobbies: [],
  movies: []
};

var nextHobbyId = 1;
var nextMoviesId = 1;
var reducer = (state = stateDefault, action) => {
  // state = state || {name: 'Anonymous'};

  switch(action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
    case 'ADD_HOBBY':
      return {
        ...state,
        hobbies: [
          ...state.hobbies,
          {
            id: nextHobbyId++,
            hobby: action.hobby
          }
        ]
      };
    case 'ADD_MOVIE':
      return {
        ...state,
        movies: [
          ...state.movies,
          {
            id: nextMoviesId++,
            title: action.title,
            genre: action.genre
          }
        ]
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

  console.log('New state', store.getState());
});
// unsubcribe();

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Aakash'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Running'
});

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'Hero',
  genre: 'Action'
});

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Ajit'
});

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'Villain',
  genre: 'Romance'
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
