/*jshint esversion: 6 */ 
/*jshint ignore:start */
import React from 'react';
//import React, { Component } from 'react'; // ex 621.2

/*functional component for basic
 const SearchBar = () => {
     return <input />
 }
*/

//Class component which used for internal data keeping.
    // whats happened to it since rendered
    // for functonality
    
class SearchBar extends React.Component { //gives search class react functionality
    constructor(props) { // initilize state in class components.
                     //fuctional components cant do this construcot stuff
                    //constructor method is the only thing called automatically for every new instance
        
        super(props); //calling Component class to inherit with super //MUST
        this.onInputChange = this.onInputChange.bind(this);
        this.state = { term: '' }; //this.state === an object
        console.log('class SearchBar: ', props)
    }

    onInputChange(term) { //or handleInputChange // run this code
        console.log(event.target.value)
        //console.log(this.state)
        this.setState({ term })
        this.props.onSearchTermChange(term)
    }

    render() { //render method every class needs it
        return (
            <div className='search-bar'>
                <input 
                    value = { this.state.term }
                    onChange = { event => this.onInputChange(event.target.value)}
                />
                Value of input: { this.state.term }
            </div>
        )
        
    }


}

//or ex 621.2
// class SearchBar extends React { //gives search class react functionality
//     render() { //render method every class needs it
//         return <input />;
//     }
// }

//or ex 621.3
// class SearchBar extends React { //gives search class react functionality
//     render() { //render method every class needs it
//         return <input onChange = { event => console.log(event.target.value) }/>;
//     }

//     onInputChange(event) { //or handleInputChange // run this code
//         console.log(event.target.value)
//     }
// }

// class SearchBar extends React.Component {
//     constructor(props){
//         super(props);

//         this.state = { term: '' }
//     }

//     render() {
//         return(
//             <div>
//                 <input
//                     value = { this.state.term }
//                     onChange = { event => this.setState({ term: event.target.value })} 
//                  />
//                 <p>Value of the input: { this.state.term }</p>
//             </div>
            
//         )
//     }
// } 


export default SearchBar;

//STATE
//state is a plain javascript object to reacord and reactto user events
//each class based components has a state object.
//When a components state is changed the component re-renders along with children
