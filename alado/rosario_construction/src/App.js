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
                <div className="container-fluid">
                    <Navigation />
                    <Route exact path="/rosario_construction" component={ Home }/>
                    <Route path="/rosario_construction/about" component={About}/>
                    <Route path="/rosario_construction/services" component={Services}/>
                    <Route path="/rosario_construction/contact" component={Contact}/>
                    <Route path="/rosario_construction/login" component={Login}/>
                </div>
                <Footer />
            </div>
            </Router>
        )
    }
}

export default App;



