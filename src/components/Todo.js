import React, { useState } from "react";
import { connect } from "react-redux";

import { v4 as uuidv4 } from "uuid";

import { addTodo, doneTodo } from "../actions/index";

function Todo({ todos, addTodo, doneTodo }) {
  const [text, setText] = useState("");

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleAddTodo = () => {
    if (!text) return;
    addTodo({ text, id: uuidv4() });
    setText(""); //this makes the input value back to blank
  };

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
