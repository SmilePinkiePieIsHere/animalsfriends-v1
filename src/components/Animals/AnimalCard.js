import { Card, Col } from "react-bootstrap";
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
    let isNotLoggedIn = typeof (cookies.username) === "undefined" || cookies.username === "undefined";

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
                        {!isNotLoggedIn && <Card.Link href={`/animals/${id}/edit`}>Редактирай</Card.Link>}
                        <Card.Link href={`/animals/details/${id}`}>Детайли</Card.Link>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default AnimalCard;
