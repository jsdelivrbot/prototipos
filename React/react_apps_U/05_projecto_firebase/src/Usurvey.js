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
            studentName: 'uriel621',
            answers: {
                answer1: '',
                answer2: '',
                answer3: ''
            },
            isSubmitted: false
        };

        this.nameSubmit = this.nameSubmit.bind(this);
        this.answerSelected = this.answerSelected.bind(this);
        this.questionsSubmit = this.questionsSubmit.bind(this);        
    }

    nameSubmit(event) {
        var studentName = this.refs.name.value;
        this.setState({ studentName: studentName}, function(){
            console.log(this.state)
        })
    }

    answerSelected() {
        console.log(621)
    }

    questionsSubmit() {
        
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
            questions = <div>
                            <h2>Here are some questions</h2>
                            <form onSubmit={ this.questionsSubmit }>
                                <div className='card'>
                                    <label>What kind of courses you like the most: </label><br />
                                    <input type='radio' name='answer1' value='Technology' onChange={ this.answerSelected } /> Technology
                                    <input type='radio' name='answer1' value='Design' onChange={ this.answerSelected } /> Design
                                    <input type='radio' name='answer1' value='Marketing' onChange={ this.answerSelected } /> Marketing                            
                                </div>
                                <div className='card'>
                                    <label>You are a: </label><br />
                                    <input type='radio' name='answer2' value='student' onChange={ this.answerSelected } /> student
                                    <input type='radio' name='answer2' value='in-job' onChange={ this.answerSelected } /> in-job
                                    <input type='radio' name='answer2' value='looking-job' onChange={ this.answerSelected } /> looking-job                            
                                </div>
                                <div className='card'>
                                    <label>Is online learning helpful: </label><br />
                                    <input type='radio' name='answer3' value='yes' onChange={ this.answerSelected } /> yes
                                    <input type='radio' name='answer3' value='no' onChange={ this.answerSelected } /> no 
                                    <input type='radio' name='answer3' value='maybe' onChange={ this.answerSelected } /> maybe                            
                                </div>
                                <div className='div-button'>
                                    <input className='feedback-button' type='submit' value='submit' />
                                </div>
                            </form>
                        </div>;
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