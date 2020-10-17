import React from 'react'
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from "./reducers";
import Todo from "./components/Todo";

const store = createStore(rootReducer)

function App(){
    return(
        <div className="App">
            <Provider store={store}>
                <Todo/>
            </Provider>
        </div>
    )
}

export default App;

