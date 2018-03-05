import React from 'react';
import { Container, Header, Segment } from 'semantic-ui-react'
import _Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
const div_style = {
    height: 'inherit',
    textAlign: 'center'
}
class App extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            map: '<div></div>'
        }
        this.google_map = this.google_map.bind(this)
    }
    google_map(map){
        console.log(map)
        console.log('mapzzz')
        this.setState({ 'map': map })
    }
    render(){
        return (
            <div style = { div_style }>
                <Segment.Group style = { div_style }>
                    <_Header />
                    <Main map={ this.google_map } />
                    <Footer map={ this.state.map } />
                </Segment.Group>
            </div>
        )
    }
}

export default App;