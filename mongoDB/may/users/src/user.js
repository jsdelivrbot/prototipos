/*jshint esversion: 6 */ 
const mongoose = require('mongoose');
const PostSchema = require('./post');
const Schema = mongoose.Schema;



const UserSchema = new Schema({
    //name: String,
    name: {
        type: String,
        validate: {
            validator: (name) => name.length > 2,
            message: 'Name must be longer thqn 2 characters.'
        },
        required: [true, 'Name is required.']
    },
    posts: [PostSchema],
    likes: Number,
    blogPosts: [{
        type: Schema.Types.ObjectId,
        ref: 'blogPost'
    }]
});
//seperate and virtual field
UserSchema.virtual('postCount').get(function(){ //function key word not fat arrows
    return this.posts.length;
});
// User: entire collection of data not single a user

//---middleware
UserSchema.pre('remove', function(){
    const BlogPost = mongoose.model('blogPost');
    // this === ever

    BlogPost.remove({
         _id: {$in: this.blogPosts } 
        })

});
const User = mongoose.model('user', UserSchema);

module.exports = User;