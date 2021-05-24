import { Card, Col, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useCookies } from 'react-cookie';

import { genderAnimal } from '../General/Helpers/enum.js';

import "./PostCard.scss";


function PostCard({
    id,
    title,
    description
}) {
    // const [cookies] = useCookies(['username']);
    const history = useHistory();
    // let isNotLoggedIn = typeof (cookies.username) === "undefined" || cookies.username === "undefined";

    // const goToEdit = (e) => {
    //     e.preventDefault();
    //     history.push(`/animals/${id}/edit`);
    // }

    const goToDetails = (e) => {
        e.preventDefault();
        history.push(`/blog/details/${id}`);
    }

    const addReadMore = (text) => {
        if (text.length > 250) {
            text = text.substr(0, 250) + "...";
        }
        return text;
    }

    return (
        <Col xs={12}>
            <Card className="post-card">
                <Card.Header>{title}</Card.Header>
                <Card.Body>
                    <Card.Text>
                        {addReadMore(description)}
                    </Card.Text>
                    <Button onClick={goToDetails}>Прочети още...</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default PostCard;
