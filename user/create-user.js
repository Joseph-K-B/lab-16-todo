// export function createUser(formData){
//     const newUser = {
//         username: formData.get('username'),
//         password: formData.get('password'),
//         toDos: [{
//             todo:'',
//             completed: false
//         }],
//     };
//     return newUser;
// }

export function createUser(formData){
    const newUser = {
        username: formData.get('username'),
        password: formData.get('password'),
        toDos: [{
            todo:'',
            completed: false
        }],
    };
    return newUser;
}

