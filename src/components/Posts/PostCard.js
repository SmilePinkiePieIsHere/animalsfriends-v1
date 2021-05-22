import { Card, Col, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useCookies } from 'react-cookie';

import { genderAnimal } from '../General/Helpers/enum.js';


function PostCard({
    title,
    desciption
}) {
    // const [cookies] = useCookies(['username']);
    // const history = useHistory();
    // let isNotLoggedIn = typeof (cookies.username) === "undefined" || cookies.username === "undefined";

    // const goToEdit = (e) => {
    //     e.preventDefault();
    //     history.push(`/animals/${id}/edit`);
    // }

    // const goToDetails = (e) => {
    //     e.preventDefault();
    //     history.push(`/animals/details/${id}`);
    // }

    return (
        <Col xs={12}>
            <Card>
                <Card.Header>{title}</Card.Header>
                <Card.Body>                    
                    <Card.Text>
                        {desciption}
                    </Card.Text>
                    <Button variant="primary">Прочети още...</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default PostCard;
