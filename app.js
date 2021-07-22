// import functions
import { getUser, saveUser } from './data/data-function.js';


// reference needed DOM elements

const userForm = document.getElementById('user-form');
const createBtn = document.getElementById('create-btn');

// set event listeners 

userForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(userForm);
    const user = getUser(formData);

    window.location.replace = './list';
});

createBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const formData = new FormData(userForm);
    const newUser = saveUser(formData);
});
  // get user input(s)
  // do any needed work with the value(s)
  // update DOM to reflect new value(s)
