import { getUser, saveUser } from '../data/data-function.js';
// import users from '../data/user-data.js';


const list = document.getElementById('to-do-list');
const addBtn = document.getElementById('to-do-add');
const input = document.getElementById('to-do');

const user = getUser();
// const toDoLocal 


addBtn.addEventListener('click', (e)=>{
    user.toDos.push({ todo:input.value, completed: false });
    saveUser(user);
    e.preventDefault();
    const li = document.createElement('li');
    li.innerText = input.value;
    list.append(li);
    input.value = '';
});
