import React from 'react';
import {
    HashRouter as Router,
    Route,
    Link
  } from 'react-router-dom'

import Navigation from './components/Navigation.js';
import Footer from './components/Footer.js';
import About from './components/About.js';
import Services from './components/Services.js';
import Contact from './components/Contact.js';
import Home from './components/Home.js';
import Login from './components/Login.js';

class App extends React.Component {
    render(){
        return (
            <Router>
            <div>
                <div className="container">
                    <Navigation />
                    <Route exact path="/" component={ Home }/>
                    <Route path="/about" component={About}/>
                    <Route path="/services" component={Services}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/login" component={Login}/>
                </div>
                <Footer />
            </div>
            </Router>
        )
    }
}

export default App;



