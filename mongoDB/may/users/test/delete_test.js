/*jshint esversion: 6 */ 
const assert = require('assert');
const User = require('../src/user');

describe('Reading users out of database', () => {
    let joe;

    beforeEach((done) => {
        ever = new User ({ name: 'Ever'});
        ever.save()
            .then(() => done())
    });

    it('model instance remove', (done) => {
        ever.remove()
            .then(() => User.findOne({ name: 'Ever' }))
            .then((user) => {
                assert(user === null);
                done();
            });
    });
    it('class method remove', (done) => {
        User.remove({ name: 'Ever'})
            .then(() => User.findOne({ name: 'Ever' }))
            .then((user) => {
                assert(user === null);
                done();
            });
            
    });
    it('class mothod findOneAndRemove', (done) => {
        User.findOneAndRemove({ name: 'Ever'})
            .then(() => User.findOne({ name: 'Ever' }))
            .then((user) => {
                assert(user === null);
                done();
            });
    });
    it('class mothod findByIdAndRemove', (done) => {
        User.findByIdAndRemove(ever._id)
            .then(() => User.findOne({ name: 'Ever' }))
            .then((user) => {
                assert(user === null);
                done();
            });
    });
});

// remove() //remove lots of data
//findOneAndRemove() //first record inthe criteria gets removed
//findByIdAndRemove //find by unique id 
