import { Alert } from "react-bootstrap";
import api from "./api.js";

function getAll() {
    return fetch(api.users)
    .then(res => res.json())
    .catch(error => console.log(error));
}


async function loginUser(name, pass, onSuccess) {    
    let user = {
        username: name,
        password: pass       
    }  

    await fetch(api.users + '/login', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(user) // body data type must match "Content-Type" header
    })
    .then(res => res.json())
    .then((data) => {       
        onSuccess(data);
    })
    .catch(error => {        
        alert('Error while authorization!');
        <Alert variant='danger'>Error while authorization!</Alert>
        console.log(error)
    });
}

export default {
    getAll,
    loginUser
}