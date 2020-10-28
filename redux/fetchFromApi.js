//here we are going to implemnet a redux in case of JS methodology

const redux = require("redux");
const axios = require('axios')
const thunkMiddleware = require('redux-thunk').default
const applyMiddleware=redux.applyMiddleware


const createStore = redux.createStore;

//first we will make a action
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";


function fetchUserRequest() {
  return {
    type: FETCH_USERS_REQUEST,
    info: "lets fetch users from our api to store the value in our state object",
  };
}
function fetchUserSuccess(users) {
    return {
      type: FETCH_USERS_SUCCESS,
      payload:users,
      info: "lets fetch users succeded",
    };
}
function fetchUserFailure(error) {
    return {
      type: FETCH_USERS_FAILURE,
      payload:error,
      info: "lets fetch users failed",
    };
}



//now we will implement a reducer

const initial_user_state={
    loading:false,
    users:[],
    error:""
}


const reducer = (state = initial_user_state, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading:true,
        
      };
    case FETCH_USERS_SUCCESS:
      return{
        ...state,
        loading:false,
        users:action.payload,
        error:''
        
      };
    case FETCH_USERS_FAILURE:
      return{
        ...state,
        loading:false,
        users:[],
        error:action.payload
      }
 
};

const fetchUsers=()=>{
  return function(dispatch){
    dispatch(fetchUserRequest())
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(response=>{
        const users=response.data.map(user=>user.id)
        dispatch(fetchUserSuccess(users))
      })
      .catch(error=>{
        dispatch(fetchUserFailure(error.message))
      })
  }
}


const store = createStore(reducer,applyMiddleware(thunkMiddleware));
store.subscribe(()=>{console.log(store.getState())})
store.dispatch(fetchUsers())
