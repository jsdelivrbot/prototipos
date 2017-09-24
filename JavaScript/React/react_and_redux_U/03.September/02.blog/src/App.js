import React from 'react';

import {createStore} from 'redux';
import { Provider } from 'react-redux';
import rootReduce from './reducers/index.js';
const store = createStore(rootReduce);

class App extends React.Component {
    render(){
        return (
            <Provider store={store}>
                <h1>React App 621</h1>
            </Provider>
        )
    }
}

export default App;