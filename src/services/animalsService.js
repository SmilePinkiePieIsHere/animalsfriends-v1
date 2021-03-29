import { Alert } from "react-bootstrap";
import api from "./api.js";
import auth from "./auth.js";

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
    return fetch(`${api.animals}/${animalId}`)
        .then(res => res.json())
        .catch(error => {
            <Alert variant='danger'>Error while recieving the animal from the server!</Alert>
            console.log(error)
        });
}

function addAnimal(name, description, gender, species, currentState, accessToken) {
    debugger;
    let animal = {
        name: name,
        gender: gender,
        currentState: currentState,
        species: species,
        description: description,
        profileImg: ''
    }

    var accessToken = accessToken; //auth.getAccessToken();
    // if(!accessToken){
    //     await authenticate();
    //     accessToken = getAccessToken();
    // }

    return fetch(api.animals, {
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