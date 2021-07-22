let USER = 'USER';
// const USERARR = 'USERARR';

export function saveUser(userObject){
    let userString = JSON.stringify(userObject);
    localStorage.setItem(USER, userString);
}


export function getUser(){
    const userString = localStorage.getItem(USER);
    return JSON.parse(userString);
}

export function findByUser(array, username) {
    for (let index = 0; index < array.length; index++) {
        const item = array[index];
        if (item.username === username) {
            return item;
        }
    }

    return null;
}

// let existingEntries

// export function saveUser2(existingEntries){
//     existingEntries = JSON.parse(localStorage.getItem(USERARR));

//     if (existingEntries === null) existingEntries = [];
//     let userObject = {
//         username:'',
//         password:
//     };

//     localStorage.setItem('USER', JSON.stringify(userObject));
//     existingEntries.push(userObject);
//     localStorage.setItem('allEntries', JSON.stringify(existingEntries));
//     return userObject;
// }