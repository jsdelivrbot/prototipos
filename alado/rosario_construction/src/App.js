import React from 'react';
import Navigation from './components/Navigation.js';
import Carousel from './components/Carousel.js';

class App extends React.Component {
    render(){
        return (
            <div>
                <Navigation />
                <Carousel />
            </div>
        )
    }
}

export default App;