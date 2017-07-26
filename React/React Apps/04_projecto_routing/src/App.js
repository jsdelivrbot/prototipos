import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from './Home';
import One from './One';
import Two from './Two';
import Header from './Header';

class App extends React.Component {
    render(){
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={ Home }/>
                    <Route path="/One" component={ One }/>
                    <Route path="/Two" component={ Two }/>
                </Switch>
            </div>
        )
    }
}

export default App;

