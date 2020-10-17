//define reducer in the context as

import React, { useReducer, createContext } from "react";

//create the contex object

export const TodoContext = createContext();

const initState = {
  todos: [
    {
      id: 0,
      text: "Learn React hooks",
    },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [...state.todos, action.payload],
      };
    case "DONE_TODO":
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    default:
      throw new Error();
  }
};

//create a context for the providers to consume and subscribe to the changes

export const TodoContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <TodoContext.Provider value={[state, dispatch]}> 
    
    {/* so this thing gives our state and its corresponding function to the context */}


      {props.children}


    </TodoContext.Provider>
  );
};



// i guess we made a context file by using the useReducer Hooks
//so here the reducer hook is extensively used with combination to useContext Hook




