import React from 'react';
import { Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form';

class Posts_new extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.onSubmit = this.onSubmit.bind(this);
    // }
    render_field(field) {
        return (
            <div className = 'form-group has-danger'>
                <label>{ field.label }</label>
                <input
                    type = 'text'
                    className = 'form-control'
                    {...field.input}
                />
                <div className = 'text-help'>
                    { field.meta.touched ? field.meta.error : '' }
                    {/* <label> { if(field.meta.touched) { 
                                            field.meta.error: '' 
                        }} </label> */}
                </div>
            </div>
        )         
    }
    onSubmit(values) {
        console.log(this.props.handleSubmit)
        console.log(values)
    }

    render() {
    const { handleSubmit } = this.props
    // this.props.handleSubmit    
        return (                //calls handle submit if pass the onSubmit ivokes
            <form onSubmit = { handleSubmit(this.onSubmit.bind(this)) } >
                <Field
                    label = 'Title'
                    name = 'title'
                    component = { this.render_field } 
                />
                <Field
                    label = 'Categories'
                    name = 'categories'
                    component = { this.render_field } 
                />
                <Field
                    label = 'Post Content'
                    name = 'content'
                    component = { this.render_field } 
                />
                <button type = 'submit' className = 'btn btn-primary'>Submit</button>
                <Link to = '/' className = 'btn btn-danger'>Cancel</Link>
            </form>
        )
    }
}
// called when form submitted
function validate(values) {
    const errors = {};
    if(!values.title) { // property must be iedentical as Field comp
        errors.title = 'Enter a title!';
    }

    if(!values.categories) {
        errors.categories = 'Enter a categories!';
    }

    if(!values.content) {
        errors.content = 'Enter a content!';
    }
    // pass if error empty
    // fail if any properties return invalid
    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm' //name of my form
})(Posts_new);