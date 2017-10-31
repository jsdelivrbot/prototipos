import React from 'react';
import Navigation from './components/Navigation.js';
import Carousel from './components/Carousel.js';
import Home from './components/Home.js';

class App extends React.Component {
    render(){
        return (
            <div className="container">
                <Navigation />
                <Carousel />
                <Home />
            </div>
        )
    }
}

export default App;


