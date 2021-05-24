import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useContext, useState, useEffect } from 'react';
import DatePicker from "react-datepicker";

import Uploader from "../General/Uploader";
import ThemeContext from "../General/ThemeContext";
import AuthContext from "../General/AuthContext";

import endpoints from "../../services/endpoints.js";
import { getData } from "../../services/services.js";

import "react-datepicker/dist/react-datepicker.css";

function PostFormView() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [category, setCategory] = useState();
    const [animals, setAnimals] = useState( [
        { key: "", value: "Изберете животно..." }
    ]);

    const context = useContext(ThemeContext);
    const authContext = useContext(AuthContext);
    
    let categoriesOptions = [
        { key: "Choose...", value: "Изберете категория..." },
        { key: 1, value: "новини" },
        { key: 2, value: "каузи" }
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
        context.post.category = Number(form.category.value);
        context.post.userId = authContext.userId;
        context.post.publishedOn = new Date();
        context.post.startDate = form.startDate != undefined ? new Date(form.startDate.value) : null;
        context.post.endDate = form.endDate != undefined ? new Date(form.endDate.value) : null;
        context.post.animalId = form.animal.value;

        context.postSubmit();
    }

    const validateEndDate = (e) => {
        debugger;
    }

    useEffect(() => {
        getData(endpoints.animals, function (error) {
            alert(error);
        }, "Грешка от страна на сървъра при вземане на животнo!")
            .then(res => {  
                let animalsOptions = [{ key: "", value: "Изберете животно..." }];          
                res.forEach((animal) => {
                    animalsOptions.push({ "key": animal.id, "value": animal.name })
                })
                setAnimals(animalsOptions);
            });
    }, []);

    return (
        <Container>
            <Row>
                <Col></Col>
                <Col xs={6}>
                    <Form className="form-view" onSubmit={onSubmit}>
                        <Form.Group>
                            <Form.Control required type="text" name="title" dafaultvalue={context.post.title} placeholder="Заглавие" />
                            <Form.Control.Feedback type="invalid">Моля, въведете име.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control required type="textarea" as="textarea" rows={3} name="description" dafaultvalue={context.post.description} placeholder="Описание" />
                            <Form.Control.Feedback type="invalid">Моля, въведете кратко описание.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="select" name="animal" as="select" dafaultvalue={context.post.animal}  >
                                {bindDropDown(animals)}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="select" required name="category" as="select" dafaultvalue={context.post.category} onChange={(e) => setCategory(e.currentTarget.value)} >
                                {bindDropDown(categoriesOptions)}
                            </Form.Control>
                        </Form.Group>
                        {
                            category == 2 
                            ?
                            <>
                                <Form.Group>
                                    <Form.Label>Начална дата: </Form.Label>
                                    <DatePicker name="startDate" selected={startDate} showTimeSelect onChange={date => setStartDate(date)} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Крайна дата: </Form.Label>
                                    <DatePicker name="endDate" selected={endDate} showTimeSelect onSelect={validateEndDate} onChange={date => setEndDate(date)} />
                                </Form.Group>
                            </>
                            :
                            null
                        }
                        {/* <Form.Group>
                            <Uploader />
                        </Form.Group> */}
                        <Button variant="primary" type="submit">Добави</Button>
                    </Form>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    );
};

export default PostFormView;