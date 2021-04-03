import { Card, Col } from "react-bootstrap";
import { useCookies } from 'react-cookie';

import { genderAnimal } from '../General/Helpers/enum.js';

import style from "./Animal.scss";

function AnimalCard({
    id,
    name,
    profileImg,
    gender
}) {
    const [cookies] = useCookies(['username']);
    let isNotLoggedIn = typeof (cookies.username) == "undefined" || cookies.username == "undefined";

    return (
        <Col>
            <Card className="animal-card">
                <Card.Body>
                    <p className="profile-img"><img alt={name} src={profileImg} /></p>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{genderAnimal[gender]}</Card.Subtitle>
                    <div className="details">
                        {!isNotLoggedIn && <Card.Link href={`/animals/${id}/edit`}>Редактирай</Card.Link>}
                        <Card.Link href={`/animals/details/${id}`}>Детайли</Card.Link>
                        {/* <Link to={`/animals/details/${id}`}><button className="button">Детайли</button></Link> */}
                    </div>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default AnimalCard;
