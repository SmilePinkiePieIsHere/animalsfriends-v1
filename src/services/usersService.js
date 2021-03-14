function getAll() {
    return fetch("http://localhost:3000/users")
    .then()
    .catch((error) => console.log(error));
}

export default {
    getAll
}