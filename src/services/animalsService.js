// import api from "./api.js";

// function getAll() {
//     return fetch(api.animals)
//     .then(res => {
//         debugger;
//         res.json()
//     })
//     .catch(error => console.log(error));
// }

// export default {
//     getAll
// }

const url = 'https://localhost:44358/animals';

export const getAll = () => {    
    //let petURl = url + ((category && category != 'all') ? '?category=${category}' : '');

    return fetch(url)
        .then(res => res.json())        
        .catch(error => console.log(error));
}

// export const getOne = (petId) => {   
//     return fetch(`${url}/${petId}`)
//         .then(res => res.json)        
//         .catch(error => console.log(error));
// }