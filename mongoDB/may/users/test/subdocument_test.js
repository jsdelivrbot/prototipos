/*jshint esversion: 6 */ 
const assert = require('assert');
const User = require('../src/user');

describe('Subdocuments', () => {

    it('can create a subdocument', (done) => {
        const ever = new User ({
                 name: 'Ever', 
                 posts: [{ title: 'PostTitle'}] 
            });
    
    ever.save()
        .then(() => User.findOne({ name: 'Ever' }))
        .then((user) => {
            assert(user.posts[0].title === 'PostTitle');
            done();
        });
    });

    it('Can add subdocuments to an existing record', (done) => {
        const ever = new User ({
            name: 'Ever',
            posts: []
        });

        ever.save()
            .then(() => User.findOne({ name: 'Ever' }))
            .then((user) => {
                user.posts.push({ title: 'New Post' }); //must save immediatly
                return user.save(); //need a return to continue .then()
            })
            .then(() => User.findOne({  name: 'Ever' }))
            .then((user) => {
                assert(user.posts[0].title === 'New Post')
                done()
            })
    });

    it('Can remove existing subdocuments', (done) => {
        const ever = new User ({
            name: 'Ever',
            posts: [{ title: 'New Title' }]
        });

        ever.save()
            .then(() => User.findOne({ name: 'Ever' }))
            .then((user) => {
                const post = user.posts[0];
                post.remove();
                return user.save(); //need a return to continue .then()
            })
            .then(() => User.findOne({ name: 'Ever' }))
            .then((user) => {
                assert(user.posts.length === 0);
                done(); 
            });
    })
});