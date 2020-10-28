//here we are going to implemnet a redux in case of JS methodology

const redux = require("redux");
const axios = require('axios')

const createStore = redux.createStore;

//first we will make a action
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";
const API_ENDPOINT = "https://jsonplaceholder.typicode.com/users";


function fetchUserRequest() {
  return {
    type: FETCH_USERS_REQUEST,
    info: "lets fetch users from our api to store the value in our state object",
  };
}
function fetchUserSuccess() {
    return {
      type: FETCH_USERS_SUCCESS,
      info: "lets fetch users succeded",
    };
}
function fetchUserFailure() {
    return {
      type: FETCH_USERS_FAILURE,
      info: "lets fetch users failed",
    };
}



//now we will implement a reducer

const initial_user_state={
    loading:true,
    users:axios(),
    error:""
}


const fetchUserRequestReducer = (state = initial_user_state, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading:true,
        users:,
      };
    default:
      return state;
  }
};


const rootReducer = redux.combineReducers({
  requestUsers:fetchUserRequestReducer
});

const store = createStore(rootReducer);
console.log("Initial State:", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("Update state", store.getState())
);

store.dispatch(buyIceCream());
store.dispatch(buyCake());
store.dispatch(buyIceCream());

unsubscribe();
