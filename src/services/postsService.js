import api from "./api.js";

function getAll() {
    return fetch(api.posts)
    .then(res => res.json())
    .catch(error => console.log(error));
}

export default {
    getAll
}