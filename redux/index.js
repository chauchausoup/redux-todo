//here we are going to implemnet a redux in case of JS methodology

const redux = require("redux");
const createStore = redux.createStore;

//first we will make a action
const BUY_CAKE = "BUY_CAKE";
const BUY_ICE_CREAME = "BUY_ICE_CREAM";

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux ever,literally.",
  };
}

function buyIceCream() {
  return {
    type: BUY_ICE_CREAME,
    info: "Redux action to buy icecream.",
  };
}

//now we will implement a reducer

const initialCakeState = {
  no_of_cake: 10,
};

const initialIceCreamState = {
  no_of_IceCream: 5,
};

const iceCreamrReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICE_CREAME:
      return {
        ...state,
        no_of_IceCream: state.no_of_IceCream - 1,
      };
    default:
      return state;
  }
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        no_of_cake: state.no_of_cake - 1,
      };

    default:
      return state;
  }
};

const rootReducer = redux.combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamrReducer,
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
