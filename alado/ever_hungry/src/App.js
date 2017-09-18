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
    render(){
        return (
            <div style = { div_style }>
                <Segment.Group style = { div_style }>
                    <_Header />
                    <Main />
                    <Footer />
                </Segment.Group>
            </div>
        )
    }
}

export default App;