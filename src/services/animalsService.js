import api from "./api.js";


// export const getAll = (category = '') => {    
//     let petURl = url + ((category && category != 'all') ? '?category=${category}' : '');

//     return fetch(petURl)
//         .then(res => res.json)        
//         .catch(error => console.log(error));
// }

function getAll() {
    return fetch(api.animals)
        .then(res => res.json())
        .catch(error => console.log(error));
}

function getOne(animalId) {
    return fetch(`${api.animals}/${animalId}`)
        .then(res => res.json)
        .catch(error => console.log(error));
}

export default {
    getAll,
    getOne
}