import { getUser, saveUser } from '../data/data-function.js';


const list = document.getElementById('to-do-list');
const addBtn = document.getElementById('to-do-add');
const input = document.getElementById('to-do');
const ul = document.querySelector('ul');

const user = getUser();


//ADD ITEMS TO THE LIST EVENT LISTENER
addBtn.addEventListener('click', (e)=>{
    user.toDos.push({ todo:input.value, completed: false });
    saveUser(user);
    e.preventDefault();
    const li = document.createElement('li');
    li.innerText = input.value;
    list.append(li);
    input.value = '';
});

//GO HOME LINK
const a = document.createElement('a');
a.textContent = 'home'; 
list.append(a);
a.href = '../index.html';

// ul.addEventListener('click', (e)=> {
//     if (e.target.tagName === 'LI'){
//         e.target.classList.add('done'); 
//     }
//     saveUser(user);
// });

//TO DISPLAY EXISTING ITEM IF USER LOGS IN AGAIN
if (user){
    for (let item of user.toDos){
        const li = document.createElement('li');
        li.innerText = item.todo;
        list.append(li);
    }
}


// IDEA TO MAKE THE FALSE GO TO TRUE... NEED TO CHANGE THE TARGET TO BUTTONS FOR IT TO WORK AND MATCH APPLES TO APPLES
ul.addEventListener('click', (e)=> {
    if (e.target.tagName === 'LI'){
        e.target.classList.add('done'); 
        for (let item of user.toDos){
            if (e.target.textContent === item.todo){
                item.completed = true;
            }
        }
           
    }
    saveUser(user);
});