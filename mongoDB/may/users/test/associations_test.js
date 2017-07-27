/*jshint esversion: 6 */ 
const mongoose = require('mongoose');
const User = require('../src/user');
const Comment = require('../src/comment');
const BlogPost = require('../src/blogPost');
const assert = require('assert');

describe('Associations', () => {
    let Ever, blogPost, comment;
    beforeEach((done) => {
        ever = new User({ name: 'Ever' });
        blogPost = new BlogPost({ title: 'Welcome', content: 'Yes you there' });
        comment = new Comment({ content: 'Congrats uriel621' });

        ever.blogPosts.push(blogPost);
        blogPost.comments.push(comment);
        comment.user = ever;

        //tHIS WONT WORK
        // joe.save();
        // blogPost.save();
        // comment.save();

        Promise.all([ever.save(), blogPost.save(), comment.save()])
            .then(() => done());
    });
    //it.only   just run this
    it('saves a relation between a user and a blogpost', (done) => {
        User.findOne({ name: 'Ever' })
            .populate('blogPosts') //user.js
            .then((user) => {
                console.log(user);
                assert(user.blogPosts[0].title === 'Welcome');
                done();
            });
    });

    it('saves a full relation graph', (done) => {
        User.findOne({ name: 'Ever' })
            .populate({
                path: 'blogPosts', //lookinto User object, find blogPosts property, attempt to load associate blogPosts
                populate: { // load up addition comments in blogPost comments
                    path: 'comments',
                    model: 'comment',
                    populate: {
                        path: 'user',
                        model: 'user'
                    }
                }
            })
            .then((user) => {
               // console.log(user);
                assert(user.name === 'Ever');
                assert(user.blogPosts[0].title === 'Welcome');
                assert(user.blogPosts[0].comments[0].content === 'Congrats uriel621');
                assert(user.blogPosts[0].comments[0].user.name === 'Ever');
                
                done();
            });
    });
});