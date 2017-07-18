/*jshint esversion: 6 */ 
/*jshint ignore:start */

import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
    render(){
        return (
            <div>
                <h1>React App</h1>
            </div>
        )
    }
}

ReactDom.render(<App />, document.querySelector('#app'));