import React from 'react'
var firebase = require('firebase');
var uuid = require('uuid');

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDWtjPso7LN2Z_9XAQqDBy0gEuM_yJ0CeM",
    authDomain: "usurvey-1e80c.firebaseapp.com",
    databaseURL: "https://usurvey-1e80c.firebaseio.com",
    projectId: "usurvey-1e80c",
    storageBucket: "usurvey-1e80c.appspot.com",
    messagingSenderId: "212625546191"
  };
  firebase.initializeApp(config);


class Usurvey extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            uid: uuid.v1(),
            studentName: '',
            answers: {
                answer1: '',
                answer2: '',
                answer3: ''
            },
            isSubmitted: false
        };

        this.nameSubmit = this.nameSubmit.bind(this)
    }

    nameSubmit(event) {
        var studentName = this.refs.name.value;
        this.setState({ studentName: studentName}, function(){
            console.log(this.state)
        })
    }

    render() {
        var studentName;
        var questions;

        if (this.state.studentName === '' && this.state.isSubmitted === false){
            studentName =   <div>
                                <h1>Hey Student, please let us know your name: </h1>
                                <form onSubmit={ this.nameSubmit }>
                                    <input  className = 'namy' type='text' placeholder='Enter your name' ref='name' />
                                </form>
                            </div>
        }
else  if (this.state.studentName !== '' && this.state.isSubmitted === false){
    studentName = <h1>Welcome to U-Survey, { this.state.studentName }</h1>;
    questions = <p>Hey</p>;
}
        return (
            <div>
                { studentName }
                --------------------------------
                { questions }
            </div>
        );
    }
}

export default Usurvey;