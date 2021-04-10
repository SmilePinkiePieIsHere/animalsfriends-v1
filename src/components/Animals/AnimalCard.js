import { Card, Col, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useCookies } from 'react-cookie';

import { genderAnimal } from '../General/Helpers/enum.js';

import "./AnimalCard.scss";

function AnimalCard({
    id,
    name,
    profileImg,
    gender
}) {
    const [cookies] = useCookies(['username']);
    const history = useHistory();
    let isNotLoggedIn = typeof (cookies.username) === "undefined" || cookies.username === "undefined";

    const goToEdit = (e) => {
        e.preventDefault();
        history.push(`/animals/${id}/edit`);
    }

    const goToDetails = (e) => {
        e.preventDefault();
        history.push(`/animals/details/${id}`);
    }

    return (
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
                        {!isNotLoggedIn && <Button onClick={goToEdit}>Редактирай</Button>}
                        <Button onClick={goToDetails}>Детайли</Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default AnimalCard;
