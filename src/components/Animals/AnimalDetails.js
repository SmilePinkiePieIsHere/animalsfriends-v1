import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState, Fragment } from "react";
import { useCookies } from 'react-cookie';

import AlertNotification from "../General/AlertNotification";

import * as animalsService from "../../services/animalsService";
import { genderAnimal, statusAnimal } from '../General/Helpers/enum.js';

import style from "./Animal.scss";

function AnimalDetails({
    match
}) {
    const [animal, setAnimal] = useState({});
    const [popUp, setPopUp] = useState(false);
    const [cookies] = useCookies(['username']);    
    let isLoggedIn = !(typeof (cookies.username) == "undefined" || cookies.username == "undefined");

    useEffect(() => {
        animalsService.default.getAnimal(match.params.animalId)
            .then(res => setAnimal(res));
    }, []);

    const popUpDelete = (e) => {  
        setPopUp(true);
    }  
    
    const deleteAnimal = (e) => {  
        animalsService.default.removeAnimal(animal.id);
        setPopUp(false);
    }   

    return (      
        <Fragment>
            <Col> 
                <Card className="wrap-animal">
                    <Card.Body>
                        <p className="profile-img"><img alt={animal.name} src={animal.profileImg} /></p>
                        <Card.Title>{animal.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{genderAnimal[animal.gender]}/{statusAnimal[animal.currentStatus]}</Card.Subtitle>
                        <Card.Text>{animal.description}</Card.Text>
                        {isLoggedIn ? (
                            <Card.Text className="details">
                            <Card.Link href={`/animals/${animal.id}/edit`}>Редактирай</Card.Link>
                            <Card.Link onClick={popUpDelete}>Изтрий</Card.Link>                       
                        </Card.Text>
                        ) : null}                    
                    </Card.Body>
                </Card>
            </Col>  
            <AlertNotification text="Сигурен ли сте, че искате да премахнете това животно?" variant="warning" show={popUp} onSuccess={deleteAnimal} />
        </Fragment>       
    );
}

export default AnimalDetails;

