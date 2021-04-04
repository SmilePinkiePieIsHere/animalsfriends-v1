import { Card, Col } from "react-bootstrap";
import { useEffect, useState, Fragment } from "react";
import { useCookies } from 'react-cookie';

import ModalNotification from "../General/ModalNotification";
import AlertNotification from "../General/AlertNotification";

import * as animalsService from "../../services/animalsService";
import endpoints from "../../services/endpoints.js";
import { deleteAuthData } from "../../services/services.js";
import { genderAnimal, statusAnimal } from '../General/Helpers/enum.js';

import "./AnimalDetails.scss";

function AnimalDetails({
    match,
    history,
    updateAnimals
}) {
    const [animal, setAnimal] = useState({});
    const [popUp, setPopUp] = useState(false);
    const [alertModal, setAlertModal] = useState(false);    
    const [cookies] = useCookies(['username']);   

    let isLoggedIn = !(typeof (cookies.username) === "undefined" || cookies.username === "undefined");

    useEffect(() => {
        animalsService.default.getAnimal(match.params.animalId)
            .then(res => setAnimal(res));
    }, []);

    const popUpDelete = (e) => {  
        setPopUp(true);        
    } 
    
    const hidePopUp = (e) => {  
        setPopUp(false);
    } 

    const hideAlert = (e) => {  
        setAlertModal(false);
        history.goBack();
    } 
    
    const deleteAnimal = (e) => {  
        deleteAuthData(`${endpoints.animals}/${animal.id}`, function (data){      
            setPopUp(false);

            if(data.status > 300){
                setAlertModal(true);                
            }
            else {       
                updateAnimals();
                history.push("/animals");
            }
        });
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
                            <Card.Link onClick={popUpDelete} className="delete">Изтрий</Card.Link>                       
                        </Card.Text>
                        ) : null}                    
                    </Card.Body>
                </Card>
            </Col>  
            <ModalNotification text="Сигурен ли сте, че искате да премахнете това животно?" variant="warning" show={popUp} onSuccess={deleteAnimal} onCancel={hidePopUp} />
            <AlertNotification text="Грешка от страна на сървъра при изтриване на животното. Моля опитайте по-късно." heading="Грешка!" variant="danger" show={alertModal} onClose={hideAlert} />
        </Fragment>       
    );
}

export default AnimalDetails;

