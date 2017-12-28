import React from 'react';
import Carousel from './HomeComponents/Carousel';
import SomeAbout from './HomeComponents/SomeAbout.js';
import SomeProjects from './HomeComponents/SomeProjects';
import Reference from './HomeComponents/Reference';


class Home extends React.Component {
    render(){
        return (
            <main>
                <Carousel />
                <SomeAbout />
                <SomeProjects />
                <Reference />
            </main>
        )
    }
}

export default Home;