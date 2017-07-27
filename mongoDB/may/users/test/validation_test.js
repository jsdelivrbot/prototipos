/*jshint esversion: 6 */ 
const assert = require('assert');
const User = require('../src/user');

describe('Validating Records', () => {
    it('Require a user name', () => {
        const user = new User({ name: undefined });
        const validationResult = user.validateSync();
        // const message = validationResult.errors.name.message;
        const { message } = validationResult.errors.name;
        
        assert(message === 'Name is required.')
    })

    it('requires a user name longer than2 characters', () => {
        const user = new User({ name: 'Ur' });
        const validationResult = user.validateSync();
        // const message = validationResult.errors.name.message;
        const { message } = validationResult.errors.name;
        
        assert(message === 'Name must be longer thqn 2 characters.')
    })

    it('disalows invalid records from being saved', () => {
        const user = new User({ name: 'Ur' });
        user.save()
            .catch((validationResult) => {
                const { message } = validationResult.errors.name;
                assert(message === 'Name must be longer thqn 2 characters.')
                done()
            })
        
    })
})