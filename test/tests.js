// IMPORT MODULES under test here:
// import { add } from '../calculator.js';

import { createUser } from '../user/create-user.js';

const test = QUnit.test;

// name your test by what it is testing
test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true; // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


test('should create new user', (expect) => {
    const expected = {
        username: 'planty12',
        password: '1234',
        toDos: [
            {
                todo: '',
                completed: false
            },
        ] };
    const userData = new FormData();
    userData.set('username', 'planty12');
    userData.set('password', 1234);
    const actual = createUser(userData);
    expect.deepEqual(actual, expected);
});