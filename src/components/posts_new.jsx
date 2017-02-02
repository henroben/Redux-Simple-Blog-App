import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component {

    render() {
        const { fields: { title, categories, content }, handleSubmit } = this.props;

        return(
            <form onSubmit={handleSubmit(this.props.createPost)}>
                <h3>Create A New Post</h3>
                <div className={`form-group ${title.touched && title.invalid ? 'has-error has-feedback' : ''}`}>
                    <label>Title</label>
                    <input type="text" className="form-control" placeholder={title.touched ? title.error : ''} {...title} />
                    <span className={` ${title.touched && title.invalid ? 'glyphicon glyphicon-remove form-control-feedback' : ''}`}></span>
                </div>
                <div className={`form-group ${categories.touched && categories.invalid ? 'has-error has-feedback' : ''}`}>
                    <label>Categories</label>
                    <input type="text" className="form-control" placeholder={categories.touched ? categories.error : ''} {...categories} />
                    <span className={`${categories.touched && categories.invalid ? 'glyphicon glyphicon-remove form-control-feedback' : ''}`}></span>
                </div>
                <div className={`form-group ${content.touched && content.invalid ? 'has-error has-feedback' : ''}`}>
                    <label>Content</label>
                    <textarea type="text" className="form-control" placeholder={content.touched ? content.error : ''} {...content} />
                    <span className={`${content.touched && content.invalid ? 'glyphicon glyphicon-remove form-control-feedback' : ''}`}></span>
                </div>

                <button className="btn btn-primary" type="Submit">Save</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    if(!values.title) {
        errors.title = 'Please enter a title';
    }
    if(!values.categories) {
        errors.categories = 'Please enter a category';
    }
    if(!values.content) {
        errors.content = 'Please enter some content';
    }

    return errors;
}

// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: first argument is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps


export default reduxForm({
    form: 'PostsNewForm',
    fields: ['title', 'categories', 'content'],
    validate
}, null, { createPost })(PostsNew);