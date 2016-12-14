var redux = require('redux');

console.log('Starting redux example');

// Name reducer and action generator
// ---------------------------------
var nameReducer = (state = 'Anonymous', action) => {
  switch(action.type) {
    case 'CHANGE_NAME':
      return action.name;
    default:
      return state;
  }
};

// Change name action
var changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name
  };
};

// Hobbies reducer and action generator
// ---------------------------------
var nextHobbyId = 1;
var hobbiesReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_HOBBY':
      return [
        ...state,
        {
          id: nextHobbyId++,
          hobby: action.hobby
        }
      ];
    case 'REMOVE_HOBBY':
      return state.filter((hobby) => hobby.id !== action.id);
    default:
      return state;
  }
};

// Add hobby action
var addHobby = (hobby) => {
  return {
    type: 'ADD_HOBBY',
    hobby
  };
};

// Remove hobby action
var removeHobby = (id) => {
  return {
    type: 'REMOVE_HOBBY',
    id
  };
};

// Movies reducer and action generator
// ---------------------------------
var nextMoviesId = 1;
var moviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return [
        ...state,
        {
          id: nextMoviesId++,
          title: action.title,
          genre: action.genre
        }
      ];
    case 'REMOVE_MOVIE':
      return state.filter((movie) => movie.id !== action.id);
    default:
      return state;
  }
};

// Add movie action
var addMovie = (title, genre) => {
  return {
    type: 'ADD_MOVIE',
    title,
    genre
  };
};

// Remove movie action
var removeMovie = (id) => {
  return {
    type: 'REMOVE_MOVIE',
    id
  };
};

// final combined reducer from other reducers
// ---------------------------------
var reducer = redux.combineReducers({
  name: nameReducer,
  hobbies: hobbiesReducer,
  movies: moviesReducer
});


var store = redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// Subscribe to changes
// ---------------------------------
var unsubcribe = store.subscribe(() => {
  var state = store.getState();

  console.log('Name is', state.name);
  document.getElementById('app').innerHTML = state.name;

  console.log('New state', store.getState());
});

var currentState = store.getState();
console.log('currentState', currentState);

// Dispatches
// ---------------------------------
store.dispatch(changeName('Aakash'));
store.dispatch(addHobby('Running'));
store.dispatch(addHobby('Walking'));
store.dispatch(removeHobby(2));
store.dispatch(addMovie('Hero', 'Action'));
store.dispatch(changeName('Ajit'));
store.dispatch(addMovie('Villain', 'Romance'));
store.dispatch(removeMovie(1));
