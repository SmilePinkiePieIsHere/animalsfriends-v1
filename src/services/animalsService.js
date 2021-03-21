import api from "./api.js";

function getAll(status) {   
    let animalsURL = api.animals + ((status && status != 'all') ? `${status}` : '');

    return fetch(animalsURL)
        .then(res => res.json())
        .catch(error => console.log(error));
}

function getOne(animalId) {
    var url = `${api.animals}/${animalId}`;
    return fetch(url)
        .then(res => res.json())
        .catch(error => console.log(error));
}

export default {
    getAll,
    getOne
}