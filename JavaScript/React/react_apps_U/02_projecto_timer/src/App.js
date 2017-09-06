import React from 'react';
import ReactDom from 'react-dom';
import Timer from './Timer';

class App extends React.Component {
    render(){
        return (
            <div>
                <h1>React App</h1>
                <Timer start = { Date.now() } />
            </div>
        )
    }
}

ReactDom.render(<App />, document.querySelector('#app'));