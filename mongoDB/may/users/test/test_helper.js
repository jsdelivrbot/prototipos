/*jshint esversion: 6 */ 

//------------------------------
//Connecting to Moongoose
//------------------------------

//Import the library
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// one time executed
before((done) => {

//What server to connect to. ex mongodb://65.65.5.3000/users_test 
    mongoose.connect('mongodb://localhost/users_test');
    // 'open' and 'error' are very perticular words of mongoose library
    mongoose.connection
        .once('open', () => {
            done();
        })
        .on('error', (error) => {
            console.warn('Warning', error);
        });
    //test it in the terminal and make sure Mongo is running in the background
        // node test/test_helper.js


})


// executed before any tests gets executed
beforeEach((done) => {
    // //erases all data
    // mongoose.connection.collections.users.drop(() => {
    //     //Readyto run the next test
    //     done();
    // });
                    //lowercase blogpost !blogPost
    const { users, comments, blogposts } = mongoose.connection.collections;
    users.drop(() => {
        comments.drop(() => {
            blogposts.drop(() => {
                done();
            })
        })
    })
});

//queries 
//User.findOne({ name: 'Ever' }).then()  or exec() old

//User = In my User collection
//findOne = Find one first record with this criteria
//// modiefier = .populate('blogPost')
//then = execute the query