// IMPORT MODULES under test here:
// import { add } from '../calculator.js';

import { createUser } from '../user/create-user.js';

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