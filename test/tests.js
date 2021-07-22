// IMPORT MODULES under test here:
// import { add } from '../calculator.js';

import { createUser } from '../user/create-user.js';
import { findByUser } from '../data/data-function.js';
import users from '../data/user-data.js';

const test = QUnit.test;




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

test('does findByUser find user', (expect) => {
    const expected = {
        username: 'planty11',
        password: '1234',
        toDos: [
            {
                todo: '',
                completed: false
            },
        ] };

    const actual = findByUser(users, 'planty11');

    expect.deepEqual(actual, expected);
});