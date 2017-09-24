import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetch_posts } from '../actions'

class Posts_index extends React.Component {
    // runs function after the component is loaded on screen
    componentDidMount() {
        this.props.fetch_posts();
    }

    renderPosts() {
        return _.map(this.props.posts, post => {
            return (
                <li key = { post.title }>{ post.title }</li>
            );
        });
    }

    render() {   
        return (
            <div>
                <div className = 'text-xs-right'>
                    <Link className = 'btn btn-primary' to='/posts/new'>
                        Add A Post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className = 'list-group'>
                    { this.renderPosts() }
                </ul>
            </div>
        )
    }
}

function MapSatetToProps(state) {
    return { posts: state.posts }
}

// null because not passing MapSatetToProps
export default connect(null, { fetch_posts: fetch_posts })(Posts_index);