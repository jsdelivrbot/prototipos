import React from 'react';
import {
    BrowserRouter as Router,
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
                    <Route exact path="/evergarcia.com/rosario_construction" component={ Home }/>
                    <Route path="/evergarcia.com/about" component={About}/>
                    <Route path="/evergarcia.com/services" component={Services}/>
                    <Route path="/evergarcia.com/contact" component={Contact}/>
                    <Route path="/evergarcia.com/login" component={Login}/>
                </div>
                <Footer />
            </div>
            </Router>
        )
    }
}

export default App;



