import { Component } from "react";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";

import GoogleApiWrapper from "./GoogleApiWrapper";

import "./ForUs.scss";

class ForUs extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <div className="wrap-for-us">
                            <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                                <Tab eventKey="home" title="Нашата цел">
                                    <h2>Да помогнем на животните в беда!</h2>
                                    <p>Oрганизация в помощ на животните в беда.</p>                                    
                                </Tab>
                                <Tab eventKey="profile" title="Карта" className="wrap-map" >
                                    <GoogleApiWrapper/>
                                </Tab>                              
                            </Tabs>
                        </div>
                    </Col>
                </Row>            
            </Container>);
    };
}

export default ForUs;