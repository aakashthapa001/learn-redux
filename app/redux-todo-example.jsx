var redux = require('redux');

console.log('Starting redux todo example');

var stateDefault = {
  searchText: '',
  showCompleted: false,
  todos: []
};

var reducer = (state = stateDefault, action) => {
  switch(action.type)  {
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText
      }
    default:
      return state
  }
};

var store = redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

var unsubcribe = store.subscribe(() => {
  var state = store.getState();

  console.log('searchText is', state.searchText);
  document.getElementById('app').innerHTML = state.searchText;
});

var currentState = store.getState();
console.log('Current state', currentState);

store.dispatch({
  searchText: 'Redux',
  type: 'CHANGE_SEARCH_TEXT'
});

store.dispatch({
  searchText: 'Redux changed',
  type: 'CHANGE_SEARCH_TEXT'
});

store.dispatch({
  searchText: 'Redux changed again',
  type: 'CHANGE_SEARCH_TEXT'
});
