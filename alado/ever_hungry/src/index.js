import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import 'semantic-ui-css/semantic.min.css'; // in index.html

const destination = document.querySelector('#app');
    destination.style.height = '100%';
const div_style = {
    height: '100%',
    margin: '0 !important'
}
ReactDOM.render(
    <div style= { div_style }>
        <App />
    </div>,
    destination
)