import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Main';
import Footer from './components/Footer';

import About from './components/MainComponents/About';
import Resources from './components/MainComponents/Resources';


const Routes = () => (
    <Router>
      <div>
        <Header />
        <main>
          <Route exact path="/" component={ Home } />
          <Route path="/about" component={ About } />
          <Route path="/resources" component={ Resources } />
          <Footer />  
        </main>        
      </div>
    </Router>
);

export default Routes;