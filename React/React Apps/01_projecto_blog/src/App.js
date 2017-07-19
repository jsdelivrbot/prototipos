import React from 'react';
import ReactDom from 'react-dom';
import Navbar from './components/Navbar';
import Header from './components/Header'; 
import Home from './components/Home'; 
import Footer from './components/Footer'; 

class App extends React.Component {
    render(){
        return (
            <div>
                <Navbar />
                <Header />
                <Home />
                <hr />
                <Footer />
            </div>
        )
    }
}
export default App;
//ReactDom.render(<App />, document.querySelector('#app'));