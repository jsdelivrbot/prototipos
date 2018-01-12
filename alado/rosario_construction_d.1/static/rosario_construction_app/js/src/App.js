import React from 'react';
import {
    HashRouter as Router,
    Route,
    Link
  } from 'react-router-dom'

import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Login from './components/Login/Login';

class App extends React.Component {
    render(){
        return (
            <Router>
            <div>
                <div className="container-fluid">
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



