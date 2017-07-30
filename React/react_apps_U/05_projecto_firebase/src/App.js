/*jshint esversion: 6 */ 
/*jshint ignore:start */

import React from 'react';
import ReactDom from 'react-dom';

import Usurvey from './Usurvey';

class App extends React.Component {
    render(){
        return (
            <div>
                <h1>React App 621</h1>
                <Usurvey />
            </div>
        )
    }
}

ReactDom.render(<App />, document.querySelector('#app'));