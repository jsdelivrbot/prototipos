import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promises';

import rootReducer from './reducers/index';
import Posts_index from './components/posts_index';
import Posts_new from './components/posts_new';

const createStoreWithMiddleware = applyMiddleware()(createStore);

class App extends React.Component {
    render(){
        return (
            <Provider store = { createStoreWithMiddleware(rootReducer) }>
                <BrowserRouter>
                    <div>
                        <Switch>
                            <Route exact path = "/" component = { Posts_index } />
                            <Route path = "/posts/new" component = { Posts_new } />
                        </Switch>
                    </div>
                </BrowserRouter>
            </Provider>
        )
    }
}

export default App;