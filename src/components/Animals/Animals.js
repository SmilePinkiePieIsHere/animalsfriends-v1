import { Component } from "react";
import { Container, Row } from "react-bootstrap";

import AnimalCard from "./AnimalCard";
import AnimalsFilters from '../Animals/AnimalsFilters';

import * as animalsService from "../../services/animalsService";

import "./Animals.scss";

class Animals extends Component {
    constructor(props) {
        super(props);

        this.state = {
            animals: [],
            currentStatus: ''           
        }
    }

    componentDidMount() {
        animalsService.default
            .getAll()
            .then(res => {
                this.setState({ animals: res })
            });        
    }

    componentDidUpdate(prevProps) {
        const status = this.props.location.search; //this.props.match.params.status;

        if (prevProps.location.search === status) { //prevProps.match.params.status == status
            return;
        }

        animalsService.default
            .getAll(status)
            .then(res => {
                this.setState({ animals: res, currentStatus: status })
            })
    }

    render() {
        return (
            <div className="wrap-animals">
                <Container>                
                    <Row><AnimalsFilters /></Row>
                    <Row>
                        {this.state.animals?.map(x =>
                            <AnimalCard key={x.id} {...x} />
                        )}
                    </Row>
                </Container>
            </div>
            );
    };
}

export default Animals;