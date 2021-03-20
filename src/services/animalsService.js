import api from "./api.js";

function getAll() {
    return fetch(api.animals)
    .then(res => res.json())
    .catch(error => console.log(error));
}

export default {
    getAll
}

// const url = 'https://localhost:44358/animals';

// export const getAll = () => {    
//     //let petURl = url + ((category && category != 'all') ? '?category=${category}' : '');

//     console.log(url);
//     return fetch(url)
//         .then(res => res.json())        
//         .catch(error => console.log(error));
// }

// , {
//     method: 'GET', // *GET, POST, PUT, DELETE, etc.
//     mode: 'cors', // no-cors, *cors, same-origin
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'same-origin', // include, *same-origin, omit
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//     },
//     redirect: 'follow', // manual, *follow, error
//     referrerPolicy: 'no-referrer', // no-referrer, *client       
// }

// export const getOne = (petId) => {   
//     return fetch(`${url}/${petId}`)
//         .then(res => res.json)        
//         .catch(error => console.log(error));
// }