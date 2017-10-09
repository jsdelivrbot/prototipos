import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../components/Main_Components/Home';
import About from '../components/Main_Components/About';
import Services from '../components/Main_Components/Services';
import Contact from '../components/Main_Components/Contact';

const Main = (props) => {
    console.log(props.tab);
    return (
        <div style={{ paddingTop: '77px' }}>
            <Switch>
                <Route exact path = "/" component = { Home } />
                <Route path = "/about" component = { About } />
                <Route path = "/services" component = { Services } />
                <Route path = "/contact" component = { Contact } />
            </Switch>
        </div>
    )
}

export default Main;