var redux = require('redux');

console.log('Starting redux example');

// require actions and store
var actions = require('./actions/index'),
    store = require('./store/configureStore').configure();

// Subscribe to changes
// ---------------------------------
var unsubcribe = store.subscribe(() => {
  var state = store.getState();

  console.log('Name is', state.name);
  console.log('New state', store.getState());

  if(state.map.isFetching) {
    document.getElementById('app').innerHTML = 'Loading...';
  } else if (state.map.url) {
    document.getElementById('app').innerHTML = '<a href="'+ state.map.url +'" target="_blank">View Your Location</a>'
  }
});
// unsubcribe();

// Fetch location dispatch
store.dispatch(actions.fetchLocation());

var currentState = store.getState();
console.log('currentState', currentState);

// Dispatches
// ---------------------------------
store.dispatch(actions.changeName('Aakash'));
store.dispatch(actions.addHobby('Running'));
store.dispatch(actions.addHobby('Walking'));
store.dispatch(actions.removeHobby(2));
store.dispatch(actions.addMovie('Hero', 'Action'));
store.dispatch(actions.changeName('Ajit'));
store.dispatch(actions.addMovie('Villain', 'Romance'));
store.dispatch(actions.removeMovie(1));
