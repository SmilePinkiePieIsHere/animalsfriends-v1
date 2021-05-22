import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useContext} from 'react';

import Uploader from "../General/Uploader";
import ThemeContext from "../General/ThemeContext";

function PostFormView() {   
    const context = useContext(ThemeContext);
    
    let categoriesOptions= [
        { key: "Choose...", value: "Изберете състояние..."},
        { key: "News", value: "новини"},
        { key: "Causes", value: "каузи"}      
      ];          

    const bindDropDown = (values) => {
        return values.map(v => (
            <option key={v.key} value={v.key}>{v.value}</option>
          ));
    }   

    return (
        <Container>
            <Row>
                <Col></Col>
                <Col xs={6}>
                {/* noValidate validated={validated} onSubmit={onSubmitHandler} */}
                    <Form className="form-view"> 
                        <Form.Group>
                            <Form.Control required type="text" name="title" dafaultValue={context} placeholder="Име" />
                            <Form.Control.Feedback type="invalid">Моля, въведете име.</Form.Control.Feedback>
                        </Form.Group>      
                        <Form.Group>
                            <Form.Control required type="textarea" as="textarea" rows={3} name="description" dafaultValue={context} placeholder="Описание" />
                            <Form.Control.Feedback type="invalid">Моля, въведете кратко описание.</Form.Control.Feedback>
                        </Form.Group>                  
                        <Form.Group>
                            <Form.Control type="select" name="author" as="select" dafaultValue={context}  >   
                                {bindDropDown(categoriesOptions)}                                   
                            </Form.Control>   
                        </Form.Group>
                        <Form.Group>
                            <Uploader/>
                        </Form.Group>
                        <Button variant="primary" type="submit">Edit</Button>
                    </Form>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    );
};

export default PostFormView;