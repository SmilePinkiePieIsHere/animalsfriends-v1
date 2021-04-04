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
    //debugger;
    let isFemale = (genderAnimal[animalGender] === "жена");
    let isMale = (genderAnimal[animalGender] === "мъж");
    let status = statusAnimal[animalStatus];
    let type = speciesAnimal[animalSpecies];

    return (
        <Container>
            <Row>
                <Col></Col>
                <Col xs={6}>
                    <Form className="form-view" onSubmit={onSubmitHandler}>
                        <Form.Group>
                            <Form.Control type="text" name="name" value={animalName} onChange={(e) => setAnimalName(e.target.value)}  placeholder="Име" />
                        </Form.Group>                        
                        <Form.Group controlId="formBasicCheckbox" onChange={(e) => setAnimalGender(e.target.value)}>
                            <Form.Check inline label="мъж" type="radio" id="1" name="gender" defaultChecked={isMale} />
                            <Form.Check inline label="жена" type="radio" id="2" name="gender" defaultChecked={isFemale} /> 
                            {/* <Form.Control type="text" name="gender" value={animalGender} onChange={(e) => setAnimalGender(e.target.value)}  placeholder="Пол" /> */}
                        </Form.Group>
                        <Form.Group>
                            <Form.Control onChange={(e) => setAnimalStatus(e.target.value)} as="select" defaultValue={speciesAnimal[animalSpecies]} >
                                <option>Избери състояние...</option>
                                <option>осиновен</option> 
                                <option>в болница</option>
                                <option>търси дом</option>
                            </Form.Control>
                            {/* <Form.Control type="text" name="state" value={animalState} onChange={(e) => setAnimalState(e.target.value)}  placeholder="Състояние" /> */}
                        </Form.Group>
                        <Form.Group>
                            <Form.Control onChange={(e) => setAnimalSpecies(e.target.value)} as="select" defaultValue={speciesAnimal[animalSpecies]}>
                                <option>Избери вид...</option>
                                <option>котка</option> 
                                <option>куче</option>                          
                            </Form.Control>
                            {/* <Form.Control type="text" name="species" value={speciesAnimal[animalSpecies]} onChange={(e) => setAnimalSpecies(e.target.value)}  placeholder="Вид животно" /> */}
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