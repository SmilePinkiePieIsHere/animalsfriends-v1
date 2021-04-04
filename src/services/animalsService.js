import { Alert } from "react-bootstrap";

import endpoints from "./endpoints.js";

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

var animalsActions = {
    getAll,
    getAnimal   
}

export default animalsActions;
