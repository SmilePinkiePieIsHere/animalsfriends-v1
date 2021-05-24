import { Card, Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";

import AlertNotification from "../General/AlertNotification";

import endpoints from "../../services/endpoints.js";
import { getData } from "../../services/services.js";

import "./PostCard.scss";


function PostDetails({
    match
}) {
    const [post, setPost] = useState({});
    const [alertModal, setAlertModal] = useState({
        alertShow: false,
        alertTitle: '',
        alertText: '',
        alertClass: ''
    });

    const alertDetails = (shouldShow, message, classAlert) => { 
        setAlertModal({
            alertShow: shouldShow,
            alertText: message,            
            alertClass: classAlert
        });
    }

    useEffect(() => {
        getData(`${endpoints.posts}/${match.params.postId}`, function (error) {            
            alertDetails(true, "Грешка от страна на сървъра при вземане на публикацията!", "danger");
        }, "Грешка от страна на сървъра при вземане на публикацията!")
            .then(res => setPost(res));
    }, [alertModal]);

    return (
        <>
            <Container>
                <Row>
                    <Col xs={12}>
                        <Card className="post-card">
                            <Card.Header>{post.title}</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    {post.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col></Row>
            </Container>
            <AlertNotification text={alertModal.alertText} heading={alertModal.alertTitle} variant={alertModal.alertClass} show={alertModal.alertShow} />
        </>
    )
}

export default PostDetails;
