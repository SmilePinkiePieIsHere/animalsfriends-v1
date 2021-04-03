import { Card, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useCookies } from 'react-cookie';

import * as animalsService from "../../services/animalsService";
import { genderAnimal, statusAnimal } from '../General/Helpers/enum.js';

import style from "./Animal.scss";

function AnimalDetails({
    match
}) {
    const [animal, setAnimal] = useState({});
    const [cookies] = useCookies(['username']);    
    let isLoggedIn = !(typeof (cookies.username) == "undefined" || cookies.username == "undefined");

    useEffect(() => {
        animalsService.default.getAnimal(match.params.animalId)
            .then(res => setAnimal(res));
    }, []);

    return (       
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
                        <Card.Link href={`/animals/${animal.id}/delete`}>Изтрий</Card.Link>                       
                    </Card.Text>
                    ) : null}                    
                </Card.Body>
            </Card>
        </Col>        
    );
}

export default AnimalDetails;

