import { Alert } from "react-bootstrap";
import api from "./api.js";

function getAll(status) {
    let animalsURL = api.animals + ((status) ? `${status}` : '');

    return fetch(animalsURL)
        .then(res => res.json())
        .catch(error => {
            <Alert variant='danger'>Error while getting animals from the server!</Alert>
            console.log(error)
        });
}

function getAnimal(animalId) {
    debugger;
    return fetch(`${api.animals}/${animalId}`)
        .then(res => res.json())
        .catch(error => {
            <Alert variant='danger'>Error while recieving the animal from the server!</Alert>
            console.log(error)
        });
}

function addAnimal(name, description, gender, species, currentState) {
    let animal = {
        name: name,
        gender: gender,
        currentState: currentState,
        species: species,
        description: description,
        profileImg: ''
    }

    return fetch(api.animals, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(animal)
    })
        .then(res => res.json())
        .catch(error => {
            <Alert variant='danger'>Error while adding new animal to the server!</Alert>
            console.log(error)
        });
}

export default {
    getAll,
    getAnimal,
    addAnimal
}