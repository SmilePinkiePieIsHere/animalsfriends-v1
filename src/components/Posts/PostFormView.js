import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useContext, useEffect } from 'react';

import Uploader from "../General/Uploader";
import ThemeContext from "../General/ThemeContext";
import AuthContext from "../General/AuthContext";

function PostFormView() {   
    const context = useContext(ThemeContext);
    const authContext = useContext(AuthContext);
    
    let categoriesOptions= [
        { key: "Choose...", value: "Изберете категория..."},
        { key: 1, value: "новини"},
        { key: 2, value: "каузи"}      
      ];

    const bindDropDown = (values) => {
        return values.map(v => (
            <option key={v.key} value={v.key}>{v.value}</option>
          ));
    }       

    const onSubmit = (e) => {
        debugger;

        const form = e.currentTarget; 

        context.post.title = form.title.value;
        context.post.description = form.description.value;
        context.post.category =  Number(form.category.value);        
        context.post.userId = authContext.userId;
        context.post.publishedOn = new Date();
        context.post.startDate = new Date();
         context.post.endDate = new Date();
        // context.post.animalId = null;

        context.postSubmit();
    }

    return (
        <Container>
            <Row>
                <Col></Col>
                <Col xs={6}>
                    <Form className="form-view" onSubmit={onSubmit}> 
                        <Form.Group>
                            <Form.Control required type="text" name="title" dafaultvalue={context.post.title} placeholder="Име" />
                            <Form.Control.Feedback type="invalid">Моля, въведете име.</Form.Control.Feedback>
                        </Form.Group>      
                        <Form.Group>
                            <Form.Control required type="textarea" as="textarea" rows={3} name="description" dafaultvalue={context.post.description} placeholder="Описание" />
                            <Form.Control.Feedback type="invalid">Моля, въведете кратко описание.</Form.Control.Feedback>
                        </Form.Group>                  
                        <Form.Group>
                            <Form.Control type="select" name="category" as="select" dafaultvalue={context.post.category}  >   
                                {bindDropDown(categoriesOptions)}                                   
                            </Form.Control>   
                        </Form.Group>
                        <Form.Group>
                            <Uploader/>
                        </Form.Group>
                        <Button variant="primary" type="submit">Добави</Button>
                    </Form>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    );
};

export default PostFormView;