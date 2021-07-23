// import functions
import { saveUser } from './data/data-function.js';
import { createUser } from './user/create-user.js';

// reference needed DOM elements

const userForm = document.getElementById('user-form');
// const createBtn = document.getElementById('create-btn');

// set event listeners 

// userForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const formData = new FormData(userForm);
//     const user = getUser(formData);
//     // add function find by item to look for existing users
//     // window.location.replace = './list';
// });

userForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(userForm);
    const newUser = createUser(formData);
    saveUser(newUser);
    window.location.replace('./list');
});
  // get user input(s)
  // do any needed work with the value(s)
  // update DOM to reflect new value(s)
