import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index.js'
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList() {
        // console.log(this.props.books)
        return this.props.books.map(book => {
            return (
                <li 
                key={ book.title } 
                onClick = { () => this.props.selectBook(book) }
                className='list-group-item'>
                { book.title }
                </li>
            )
        })
    }

    render() {
        return (
            <ul className='list-group col-sm-4'>
                { this.renderList() }
            </ul>
        )
    }
}

// =========== THE GLUE TO REACT AND REDUX ===========

function mapStateToProps(state) {
    // Whatever is returned will show up as props
    // inside of BookList
    console.log('state: ', state)
    return {
        books: state.books,
    };
}

// Anything returned from this function will end up as props
// on the Booklist container
function mapDispatchToProps(dispatch) {
    // whenever selectBook function called, the rsult should pass 
    // to all of our reducers
    return bindActionCreators({ selectBook: selectBook}, dispatch)
}

// promote booklist from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available 
// as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList)
// connect takes a function and a component and produces a container
