import { Card, Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";

import AlertNotification from "../General/AlertNotification";

import endpoints from "../../services/endpoints.js";
import { getData } from "../../services/services.js";

import "./PostCard.scss";


function PostDetails({
    match
}) {
    const [post, setPost] = useState({
        title: "",
        description: "",
        previewImg: "",
        category: 1,
        startDate: null,
        endDate: null,
        animalId: null
    });

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
            .then(res => {
                setPost(res);               
            });
        
    }, [alertModal]);

    return (
        <>
            <Container>
                <Row>
                    <Col xs={12}>
                        <Card className="post-card">
                            <Card.Body>
                                <Card.Title>{post.title}</Card.Title>                                
                                {
                                    post.startDate
                                        ?
                                        <Card.Subtitle className="mb-2 text-muted">Провеждане: {new Date(post.startDate).toLocaleDateString()}}</Card.Subtitle>
                                        :
                                        null
                                }
                                {
                                    post.previewImg
                                        ?
                                        <Card.Img variant="top" src={post.previewImg} />
                                        :
                                        null
                                }
                                <Card.Text>
                                    {post.description}
                                </Card.Text>
                                {/* <Card.Text className="text-right">
                                    <small className="text-muted">Автор: <cite title="Source Title">{post.user?.FirstName}</cite></small>                                    
                                </Card.Text> */}
                                <Card.Text className="text-right">                                    
                                    <small className="text-muted">Публикувано на: <cite title="Source Title">{new Date(post.publishedOn).toLocaleDateString()}</cite></small>
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
