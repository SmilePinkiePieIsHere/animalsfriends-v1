import { Container, Row, Col, Form, Button } from "react-bootstrap";

function AnimalFormView({
    onSubmitHandler,
    validated,
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

    return (
        <Container>
            <Row>
                <Col></Col>
                <Col xs={6}>
                    <Form className="form-view" noValidate validated={validated} onSubmit={onSubmitHandler}>
                        <Form.Group>
                            <Form.Control required type="text" name="name" onChange={(e) => setAnimalName(e.target.value)} value={animalName} placeholder="Име" />
                            <Form.Control.Feedback type="invalid">Моля, въведете име.</Form.Control.Feedback>
                        </Form.Group>                        
                        <Form.Group>
                            <Form.Control type="select" name="gender" onChange={(e) => setAnimalGender(e.target.value)} as="select" value={animalGender}  >   
                                {bindDropDown(genderOptions)}                                   
                            </Form.Control>   
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="select" name="status" onChange={(e) => setAnimalStatus(e.target.value)} as="select" value={animalStatus}>   
                                {bindDropDown(statusOptions)}                               
                            </Form.Control>    
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="select"  name="species" onChange={(e) => setAnimalSpecies(e.target.value)} as="select" value={animalSpecies}>
                                {bindDropDown(speciesOptions)}                          
                            </Form.Control>     
                        </Form.Group>
                        <Form.Group>
                            <Form.Control required type="textarea" as="textarea" rows={3} name="description" onChange={(e) => setAnimalDescription(e.target.value)} value={animalDescription} placeholder="Описание" />
                            <Form.Control.Feedback type="invalid">Моля, въведете кратко описание.</Form.Control.Feedback>
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