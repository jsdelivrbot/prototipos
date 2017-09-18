import React from 'react';

import {createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index.js';
import ReduxPromise from 'redux-promise';

import Search_bar from './containers/Search_bar'

const create_store_with_middleware = applyMiddleware(ReduxPromise)(createStore);

class App extends React.Component {
    render(){
        return (
            <Provider store={create_store_with_middleware(rootReducer)}>
                <Search_bar />
            </Provider>
        )
    }
}

export default App;