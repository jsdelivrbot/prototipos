/*jshint esversion: 6 */ 
const assert = require('assert');
const User = require('../src/user');

describe('Reading users out of database', () => {
    let ever;

    beforeEach((done) => {
        ever = new User ({ name: 'Ever', likes: 0 });
        ever.save()
            .then(() => done())
    });

    it('instance type using set and save', (done) => {
        ever.set('name', 'Uriel');
        ever.save()
            .then(() => User.find({}))
            .then((users) => {
                assert(users.length === 1);
                assert(users[0].name === 'Uriel');
                done();
            });
    });

    it('a model instance can update', (done) => {
        ever.update({ name: 'Uriel' })
            .then(() => User.find({}))
            .then((users) => {
                assert(users.length === 1);
                assert(users[0].name === 'Uriel');
                done();
            });
    });

    function assertName(operation, done){
        operation
            .then(() => User.find({}))
            .then((users) => {
                assert(users.length === 1);
                assert(users[0].name === 'Uriel');
                done();
            });
    }

    it('A model class can update', (done) => {
        User.update({ name: 'Ever'}, { name: "Uriel"})
            .then(() => User.find({}))
            .then((users) => {
                assert(users.length === 1);
                assert(users[0].name === 'Uriel');
                done();
            });
    });

    it('A model class can update the first one record', (done) => {
        User.findOneAndUpdate({ name: 'Ever'}, { name: "Uriel"})
            .then(() => User.find({}))
            .then((users) => {
                assert(users.length === 1);
                assert(users[0].name === 'Uriel');
                done();
            });
    });

    it('A model class can find  record with an ID and update', (done) => {
         User.findByIdAndUpdate(ever._id, { name: "Uriel"})
            .then(() => User.find({}))
            .then((users) => {
                assert(users.length === 1);
                assert(users[0].name === 'Uriel');
                done();
            });
    });

    it('A user can have their likes incremented by 1', (done) => {
         User.update({ name: 'Ever' }, { $inc: { likes: 10 } })
            .then(() => User.findOne({ name: 'Ever' }))
            .then((user) => {
                assert(user.likes === 10);
                done();
            });
    });

})

// model instance 
    //'set' and'save' - update a couple of of different properties in a couple of steps 
    //update() - one go, save it all, call it done

//model class
    //update()
    //findOneAndUpdate()
    //findByIdAndUpdate()
