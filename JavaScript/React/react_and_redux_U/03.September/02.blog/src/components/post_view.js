import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetch_post, deletePost } from '../actions';
import { Link } from 'react-router-dom';

class post_show extends Component {
    constructor(props){
        super(props)

        this.on_delete_click = this.on_delete_click.bind(this);
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetch_post(id);
    }

    on_delete_click() {
        const id = this.props.match.params.id;        
        this.props.deletePost(id, () => {
            this.props.history.push('/')
        })
    }
    render() {
        const post = this.props.post
        console.log('post: ', post)
        if(!post){
            return <div>Loading...</div>
        }
        return (
            <div>
                <Link to = '/'>Back To Index</Link>
                <button
                    className = "btn btn-danger pull-xs-right"
                    onClick = { this.on_delete_click } >Delete
                </button>
                <h3>{ post.title }</h3>
                <h6>Categories: { post.categories }</h6>
                <p>{ post.content }</p>
            </div>
        );
    }
}
function mapStateToProps({ posts }, ownProps) {
    return { post: posts[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetch_post, deletePost })(post_show)