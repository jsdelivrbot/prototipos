/*jshint esversion: 6 */ 
//Create Records in Database

const assert = require('assert');
// ../ up a directory
const User = require('../src/user');
// string of whatsit going to be about 
describe('Creating Records', () => {
    it('saves a user', (done) => {
        //This creates an instant called a user joe but not saved
        const ever = new User({ name: 'Ever' });

        ever.save()
        .then(() => {
            //Hass user been saved?
            assert(!ever.isNew);
            done();
        });
    });
});