var axios = require('axios');

// Name actions
// ---------------------------------
// Change name action
export var changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name
  };
};

// Hobby actions
// ---------------------------------
// Add hobby action
export var addHobby = (hobby) => {
  return {
    type: 'ADD_HOBBY',
    hobby
  };
};

// Remove hobby action
export var removeHobby = (id) => {
  return {
    type: 'REMOVE_HOBBY',
    id
  };
};

// Movie actions
// ---------------------------------
// Add movie action
export var addMovie = (title, genre) => {
  return {
    type: 'ADD_MOVIE',
    title,
    genre
  };
};

// Remove movie action
export var removeMovie = (id) => {
  return {
    type: 'REMOVE_MOVIE',
    id
  };
};

// Map actions
// ---------------------------------
// Start location fetch action
export var startLocationFetch = () => {
  return {
    type: 'START_LOCATION_FETCH'
  };
};

// Complete location fetch action
export var completeLocationFetch = (url) => {
  return {
    type: 'COMPLETE_LOCATION_FETCH',
    url
  };
};

// Fetch location action from API
export var fetchLocation = () => {
  return (dispatch, getState) => {
    dispatch(startLocationFetch());

    axios.get('http://ipinfo.io').then(function(res) {
      var loc = res.data.loc;
      var baseUrl = 'http://maps.google.com?q=';

      dispatch(completeLocationFetch(baseUrl + loc));
    });
  };
};
