import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function AnimalCard({
    id,
    name,
    profileImg,
    gender
}) {
    return (
        <Card style={{ width: '21rem' }} className="wrap-animal">
            <Card.Body>
                <p className="profile-img"><img alt={name} src={profileImg} /></p>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{gender}</Card.Subtitle>
                <div className="details">
                    <Card.Link href={`/animals/${id}/edit`}>Редактирай</Card.Link>
                    <Card.Link href={`/animals/details/${id}`}>Детайли</Card.Link>
                    {/* <Link to={`/animals/details/${id}`}><button className="button">Детайли</button></Link> */}
                </div>
            </Card.Body>
        </Card>
    )
}

export default AnimalCard;
