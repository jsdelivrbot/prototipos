/*jshint esversion: 6 */ 
const assert = require('assert');
const User = require('../src/user');

describe('Reading users out od database', () => {

    let ever;
    beforeEach((done) => {
        ever = new User({ name: 'Ever'});
        ever.save()
            .then(() => done());
    })
    it('finds all users with name of ever', (done) => {
        User.find({ name: 'Ever' })
         .then((users) => {
            console.log(users);
            assert(users[0]._id.toString() === ever._id.toString());
            done();
         });
    });

    it('Find a user with a particular id', (done) => {
    User.findOne({ _id: ever._id })
        .then((user) => {
            assert(user.name === 'Ever');
            done();
        });
    });

});



// These methods will always accept an object
//.find(criteria) find all users that match
//.findOne(criteria) find the first match
//"test": "nodemon --exec 'mocha -R min'"