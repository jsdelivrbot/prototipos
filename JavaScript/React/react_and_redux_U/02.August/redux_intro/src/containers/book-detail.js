import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    render() {
        if(!this.props.book){
           return <h1>Select a book to get started</h1>
        }

        return (
            <div>
                <h1>Details for: </h1>                
                <h4>Title: { this.props.book.title }</h4>
                <h4>Pages: { this.props.book.pages }</h4>
            </div>
        )
    }
}

function mapStateToProps(state) {
    // Whatever is returned will show up as props
    // inside of BookList
    console.log('state: ', state)
    return {
        book: state.activeBook,
    };
}

export default connect(mapStateToProps)(BookDetail)