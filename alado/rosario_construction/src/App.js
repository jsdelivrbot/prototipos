import React from 'react';
import Navigation from './components/Navigation.js';
import Carousel from './components/Carousel.js';
import Footer from './components/Footer.js';
import About from './components/About.js';
import Home from './components/Home.js';

class App extends React.Component {
    render(){
        return (
            <div>
                <div className="container">
                    <Navigation />
                    <Carousel />
                    <Home />
                </div>
                <Footer />
            </div>
        )
    }
}

export default App;


