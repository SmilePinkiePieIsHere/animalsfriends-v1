import { Card, Col } from "react-bootstrap";
import { useEffect, useState, Fragment } from "react";

import endpoints from "../../services/endpoints.js";
import { getData } from "../../services/services.js";
import { genderAnimal, statusAnimal } from '../General/Helpers/enum.js';

import "./AnimalDetails.scss";

function AnimalDetails({
    match
}) {
    const [animal, setAnimal] = useState({}); 
    
    useEffect(() => {
        let animalUrl = `${endpoints.animals}/${match.params.animalId}`;
        getData(animalUrl, function (error) {
            alert(error);
        }, "Грешка от страна на сървъра при вземане на животнo!")
            .then(res => setAnimal(res));
    }, []); //alertModal


    return (
        // <ThemeContext.Provider value={shouldUpdate}>
            <Fragment>
                <Col>
                    <Card className="wrap-animal">
                        <Card.Body>
                            <p className="profile-img">
                                {
                                    animal.profileImg
                                        ? <img alt={animal.name} src={animal.profileImg} />
                                        : <span className="no-image">No image</span>
                                }
                            </p>
                            <Card.Title>{animal.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{genderAnimal[animal.gender]}/{statusAnimal[animal.currentStatus]}</Card.Subtitle>
                            <Card.Text>{animal.description}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>                
            </Fragment>
        // </ThemeContext.Provider>
    );
}

export default AnimalDetails;

