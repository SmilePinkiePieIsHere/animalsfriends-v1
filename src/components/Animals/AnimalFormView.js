import { Container, Row, Col, Form, Button } from "react-bootstrap";

import { genderAnimal, statusAnimal, speciesAnimal } from '../General/Helpers/enum.js';

function AnimalFormView({
    onSubmitHandler,
    buttonTitle,
    animalName,
    setAnimalName,
    animalGender,
    setAnimalGender,
    animalStatus,
    setAnimalStatus,
    animalSpecies,
    setAnimalSpecies,
    animalDescription,
    setAnimalDescription
}) {   
    let test11 = animalStatus;
    
    let statusOptions= [
        { key: "Choose...", value: "Изберете състояние..."},
        { key: "Adopted", value: "осиновен"},
        { key: "InMedicalCare", value: "в болница"},
        { key: "NeedHome", value: "търси дом" },     
      ];

    let speciesOptions= [
        { key: "Choose...", value: "Изберете вид..."},
        { key: "cat", value: "котка"},
        { key: "dog", value: "куче"}         
      ];  
      
    let genderOptions= [
        { key: "Choose...", value: "Изберете пол..."},
        { key: "female", value: "жена"},
        { key: "male", value: "мъж"}         
      ];  

    const bindDropDown = (values) => {
        return values.map(v => (
            <option key={v.key} value={v.key}>{v.value}</option>
          ));
    }   

    const test = (e) => {
        var test121 = e.target.value;
        setAnimalStatus(e.target.value);
    }

    return (
        <Container>
            <Row>
                <Col></Col>
                <Col xs={6}>
                    <Form className="form-view" onSubmit={onSubmitHandler}>
                        <Form.Group>
                            <Form.Control type="text" name="name" value={animalName} onChange={(e) => setAnimalName(e.target.value)}  placeholder="Име" />
                        </Form.Group>                        
                        <Form.Group>
                            <Form.Control onChange={(e) => setAnimalGender(e.target.value)} as="select" value={animalGender}>   
                                {bindDropDown(genderOptions)}                                   
                            </Form.Control>          
                        </Form.Group>
                        <Form.Group>
                            <Form.Control onChange={test} as="select" value={animalStatus}>   
                                {bindDropDown(statusOptions)}                               
                            </Form.Control>                            
                        </Form.Group>
                        <Form.Group>
                            <Form.Control onChange={(e) => setAnimalSpecies(e.target.value)} as="select" value={animalSpecies}>
                                {bindDropDown(speciesOptions)}                          
                            </Form.Control>                            
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="textarea" rows={3} name="description" value={animalDescription} onChange={(e) => setAnimalDescription(e.target.value)}  placeholder="Описание" />
                        </Form.Group>
                        <Button variant="primary" type="submit">{buttonTitle}</Button>
                    </Form>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    );
};

export default AnimalFormView;