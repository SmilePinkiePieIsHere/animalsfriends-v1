function getAll() {
    return fetch("http://localhost:3000/animals")
    .then()
    .catch((error) => console.log(error));
}

export default {
    getAll
}