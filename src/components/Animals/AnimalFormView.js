import { Container, Row, Col, Form, Button } from "react-bootstrap";

function AnimalFormView({
    onSubmitHandler,
    buttonTitle,
    animalName,
    setAnimalName,
    animalGender,
    setAnimalGender,
    animalState,
    setAnimalState,
    animalSpecies,
    setAnimalSpecies,
    animalDescription,
    setAnimalDescription
}) {
    return (
        <Container>
            <Row>
                <Col></Col>
                <Col xs={6}>
                    <Form className="form-view" onSubmit={onSubmitHandler}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="text" name="name" value={animalName} onChange={(e) => setAnimalName(e.target.value)}  placeholder="Име" />
                        </Form.Group>                        
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="text" name="name" value={animalGender} onChange={(e) => setAnimalGender(e.target.value)}  placeholder="Пол" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="text" name="name" value={animalState} onChange={(e) => setAnimalState(e.target.value)}  placeholder="Състояние" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="text" name="name" value={animalSpecies} onChange={(e) => setAnimalSpecies(e.target.value)}  placeholder="Вид животно" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="text" name="name" value={animalDescription} onChange={(e) => setAnimalDescription(e.target.value)}  placeholder="Описание" />
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