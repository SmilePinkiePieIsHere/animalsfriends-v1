import { Card, Col, Button } from "react-bootstrap";
import { useEffect, useState, Fragment } from "react";
import { useCookies } from 'react-cookie';
import { NavLink } from "react-router-dom";

import ModalNotification from "../General/ModalNotification";
import AlertNotification from "../General/AlertNotification";
import ThemeContext from "../General/ThemeContext";

import endpoints from "../../services/endpoints.js";
import { deleteAuthData, getData } from "../../services/services.js";
import { genderAnimal, statusAnimal } from '../General/Helpers/enum.js';

import "./AnimalDetails.scss";

function AnimalDetails({
    match,
    history
}) {
    const [animal, setAnimal] = useState({});
    const [popUp, setPopUp] = useState(false);
    const [alertModal, setAlertModal] = useState({
        alertShow: false,
        alertTitle: '',
        alertText: '',            
        alertClass: ''
    });
    const [shouldUpdate, setShouldUpdate] = useState(false);
    const [cookies] = useCookies(['username']);

    let isLoggedIn = !(typeof (cookies.username) === "undefined" || cookies.username === "undefined");

    useEffect(() => {
        let animalUrl = `${endpoints.animals}/${match.params.animalId}`;
        getData(animalUrl, function (error) {
            alert(error);
        }, "Грешка от страна на сървъра при вземане на животнo!")
            .then(res => setAnimal(res));
    }, [alertModal]);

    const goToEdit = (e) => {
        e.preventDefault();
        history.push(`/animals/${animal.id}/edit`);
    }

    const popUpDelete = (e) => {
        e.preventDefault();
        setPopUp(true);
    }

    const hidePopUp = (e) => {
        setPopUp(false);
    }

    const alertDetails = (shouldShow, message, classAlert) => { 
        setAlertModal({
            alertShow: shouldShow,
            alertText: message,            
            alertClass: classAlert
        });
    }

    const deleteAnimal = (e) => {
        deleteAuthData(`${endpoints.animals}/${animal.id}`, function (data) {
            setPopUp(false);

            if (!data.error_description) {
                setShouldUpdate(true);

                alertDetails(true, "Успешно изтрито животно.", "success");
                setTimeout(() => {
                    history.push("/animals");
                }, 2000);
            }
            else {
                alertDetails(true, "Грешка от страна на сървъра при изтриване на животното. Моля опитайте по-късно.", "danger");
                history.goBack();
            }
        }, function (error){  
            alertDetails(true, "Грешка от страна на сървъра при изтриване на животното. Моля опитайте по-късно.", "danger");
            history.goBack();
        });
    }

    return (
        <ThemeContext.Provider value={shouldUpdate}>
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
                            {isLoggedIn ? (
                                <Card.Text className="details">                                    
                                    <Button onClick={goToEdit}>Редактирай</Button>
                                    <Button onClick={popUpDelete}>Изтрий</Button>
                                </Card.Text>
                            ) : null}
                        </Card.Body>
                    </Card>
                </Col>
                <ModalNotification text="Сигурен ли сте, че искате да премахнете това животно?" variant="warning" show={popUp} onSuccess={deleteAnimal} onCancel={hidePopUp} />
                <AlertNotification text={alertModal.alertText} heading={alertModal.alertTitle} variant={alertModal.alertClass} show={alertModal.alertShow} />
            </Fragment>
        </ThemeContext.Provider>
    );
}

export default AnimalDetails;

