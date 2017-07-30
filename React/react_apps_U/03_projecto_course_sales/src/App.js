import React from 'react';
import ReactDom from 'react-dom'; 
import Trucksales from './Trucksales';

class App extends React.Component {
    render(){
        var trucks = [
            { name: 'GMC Sierra', price: 45000 },
            { name: 'Ford F150', price: 35000 },
            { name: 'Dodge Ram', price: 33000 },
            { name: 'Toyota Tundra', price: 48000 }
        ]
        return (
            <div>
                <h1>Welcome to Truck Purchase Page</h1>
                <Trucksales items = { trucks } />
            </div>
        )
    }
}

ReactDom.render(<App />, document.querySelector('#app'));