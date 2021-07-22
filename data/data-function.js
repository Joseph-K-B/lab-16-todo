const USER = 'USER';

export function saveUser(userObject){
    const userString = JSON.stringify(userObject);
    localStorage.setItem(USER, userString);
}

export function getUser(){
    const userString = localStorage.getItem(USER);
    return JSON.parse(userString);
}