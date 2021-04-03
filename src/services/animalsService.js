import { Alert } from "react-bootstrap";
import endpoints from "./endpoints.js";
import getAccessToken from "./auth.js";

const accessToken = getAccessToken();

function getAll(status) {
    let animalsURL = endpoints.animals + ((status) ? `${status}` : '');

    return fetch(animalsURL)
        .then(res => res.json())
        .catch(error => {
            <Alert variant='danger'>Error while getting animals from the server!</Alert>
            console.log(error)
        });
}

function getAnimal(animalId) {  
    return fetch(`${endpoints.animals}/${animalId}`)
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
    
    return fetch(endpoints.animals, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + accessToken
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