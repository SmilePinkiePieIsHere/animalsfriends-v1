import api from "./api.js";

//function getAll(queryParams) {  
//     return fetch(`${api.animals}${queryParams}`)
//         .then(res => res.json())
//         .catch(error => console.log(error));
// }

function getAll(status) {   
    let animalsURL = api.animals + ((status && status != 'all') ? `${status}` : '');

    return fetch(animalsURL)
        .then(res => res.json())
        .catch(error => console.log(error));
}

function getOne(animalId) {
    return fetch(`${api.animals}/${animalId}`)
        .then(res => res.json())
        .catch(error => console.log(error));
}

export default {
    getAll,
    getOne
}