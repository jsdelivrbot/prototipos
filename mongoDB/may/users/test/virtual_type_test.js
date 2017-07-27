/*jshint esversion: 6 */ 
const assert = require('assert');
const User = require('../src/user');

describe('Virtual types', () => {
    it('postCount returns number of posts', (done) => {
        const ever = new User({
            name: 'Ever',
            posts: [{ title: 'PostTitle' }]
        });

        ever.save()
            .then(() => User.findOne({ name: 'Ever' }))
            .then((user) => {
                assert(ever.postCount === 1);
                done();
            });
    });
});