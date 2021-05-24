import { useEffect, useState, Fragment } from "react";
import { Card, Col, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useCookies } from 'react-cookie';

import ModalNotification from "../General/ModalNotification";
import AlertNotification from "../General/AlertNotification";
import ThemeContext from "../General/ThemeContext";

import endpoints from "../../services/endpoints.js";
import { deleteAuthData, getData } from "../../services/services.js";
import { genderAnimal } from '../General/Helpers/enum.js';

import "./AnimalCard.scss";

function AnimalCard({
    id,
    name,
    profileImg,
    gender
}) {
    const [popUp, setPopUp] = useState(false);
    const [alertModal, setAlertModal] = useState({
        alertShow: false,
        alertTitle: '',
        alertText: '',            
        alertClass: ''
    });
    const [shouldUpdate, setShouldUpdate] = useState(false);
    const [cookies] = useCookies(['username']);
    const history = useHistory();
    let isNotLoggedIn = typeof (cookies.username) === "undefined" || cookies.username === "undefined";

    const popUpDelete = (e) => {
        e.preventDefault();
        setPopUp(true);
    }

    const hidePopUp = (e) => {
        setPopUp(false);
    }

    const goToEdit = (e) => {
        e.preventDefault();
        history.push(`/animals/${id}/edit`);
    }

    const goToDetails = (e) => {
        e.preventDefault();
        history.push(`/animals/details/${id}`);
    }

    const alertDetails = (shouldShow, message, classAlert) => { 
        setAlertModal({
            alertShow: shouldShow,
            alertText: message,            
            alertClass: classAlert
        });
    }

    const deleteAnimal = (e) => {
        deleteAuthData(`${endpoints.animals}/${id}`, function (data) {
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
        }, function (error) {
            alertDetails(true, "Грешка от страна на сървъра при изтриване на животното. Моля опитайте по-късно.", "danger");
            history.goBack();
        });
    }

    return (
        <>
            <Col>
                <Card className="animal-card">
                    <Card.Body>
                        <p className="profile-img">
                            {
                                profileImg
                                    ? <img alt={name} src={profileImg} />
                                    : <span className="no-image">No image</span>
                            }
                        </p>
                        <Card.Title>{name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{genderAnimal[gender]}</Card.Subtitle>
                        <div className="details">
                            {!isNotLoggedIn && <Button onClick={popUpDelete}>Изтрий</Button>}
                            {!isNotLoggedIn && <Button onClick={goToEdit}>Редактирай</Button>}
                            <Button onClick={goToDetails}>Детайли</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <ModalNotification text="Сигурен ли сте, че искате да премахнете това животно?" variant="warning" show={popUp} onSuccess={deleteAnimal} onCancel={hidePopUp} />
            <AlertNotification text={alertModal.alertText} heading={alertModal.alertTitle} variant={alertModal.alertClass} show={alertModal.alertShow} />
        </>
    )
}

export default AnimalCard;
