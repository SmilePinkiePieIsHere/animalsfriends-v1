function getAll() {
    return fetch("http://localhost:3000/causes")
    .then()
    .catch((error) => console.log(error));
}

export default {
    getAll
}