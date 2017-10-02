import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReduxPromise from 'redux-promise';

import rootReducer from './reducers/index';
import Posts_index from './components/posts_index';
import Posts_new from './components/posts_new';
import post_view from './components/post_view';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

class App extends React.Component {
    render(){
        return (
            <Provider store = { createStoreWithMiddleware(rootReducer) }>
                <BrowserRouter>
                    <div>
                        <Switch>
                            <Route exact path = "/" component = { Posts_index } />
                            <Route path = "/posts/new" component = { Posts_new } />
                            <Route path = "/posts/:id" component = { post_view } />
                        </Switch>
                    </div>
                </BrowserRouter>
            </Provider>
        )
    }
}

export default App;