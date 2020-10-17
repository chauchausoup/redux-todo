//here we will try to dissect the react reducer

import React, { useState } from "react";
import { connect } from "react-redux";

import { v4 as uuidv4 } from "uuid";

//import { TodoContext } from "../contexts/todo-context";

//here we have imported the useContext hook which will basically give us our context to bind the states to other components by being a provider

//we all know the work of useState right?

import { addTodo, doneTodo } from "../actions/index";

function Todo({ todos, addTodo, doneTodo }) {
  //now the components starts to work here

  // const [state, dispatch] = useContext(TodoContext);

  //todo do nothave its own state and dispatch which comes from useReducer so the main motive here is to keep the reducer fixed in the palce like in our context and to use it anywhere we want
  //as we can see in the useReducer hook what we can see is that so we will come to it in the later portion too

  const [text, setText] = useState("");

  //normal state for textual handeling

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  //normal function for handling input data

  const handleAddTodo = () => {
    if (!text) return;
    addTodo({ text, id: uuidv4() });
    setText(""); //this makes the input value back to blank
  };

  //this handles adding of the components state data in by dispatching it

  const handleTodoDelete = (id) => {
    doneTodo(id);
  };

  return (
    <div>
      <div>
        <label>Add todo:</label>
        <input type="text" value={text} onChange={handleInputChange} />
        <button type="button" onClick={handleAddTodo}>
          Add Todo
        </button>
      </div>

      <ul>
        {todos.map(({ id, text }) => (
          <li key={id} onClick={() => handleTodoDelete(id)}>
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => ({ todos: state.todos });
const mapDispathToProps = (dispatch) => {
  return {
    addTodo: (payload) => dispatch(addTodo(payload)),
    doneTodo: (payload) => dispatch(doneTodo(payload)),
  };
};

export default connect(mapStateToProps, mapDispathToProps)(Todo);
