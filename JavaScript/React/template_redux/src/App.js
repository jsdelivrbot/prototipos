import React from 'react';

import {createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index.js';

const createStoreWithMiddleware = applyMiddleware()(createStore);

class App extends React.Component {
    render(){
        return (
            <Provider store = { createStoreWithMiddleware(rootReducer) }>
                <h1>React App 621</h1>
            </Provider>
        )
    }
}

export default App;