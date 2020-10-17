import React from 'react';
import './App.css';
import {TodoContextProvider} from './contexts/todo-context'
import Todo from './components/Todo'



function App() {
  return (
    <div className="App">
      <TodoContextProvider>
        <Todo/>
      </TodoContextProvider>
    </div>
  );
}

export default App;
