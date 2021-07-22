const USER = 'USER';

export function saveUser(userObject){
    const userString = JSON.stringify(userObject);
    localStorage.setItem(USER, userString);
}

export function getUser(){
    const userString = localStorage.getItem(USER);
    return JSON.parse(userString);
}

function findByUser(array, username) {
    for (let index = 0; index < array.length; index++) {
        const item = array[index];
        if (item.username === username) {
            return item;
        }
    }

    return null;
}

export default findByUser;