import { Component } from "react";
import { Container, Row } from "react-bootstrap";

import ThemeContext from "../General/ThemeContext";
import AnimalCard from "./AnimalCard";
import AnimalsFilters from '../Animals/AnimalsFilters';

import endpoints from "../../services/endpoints.js";
import { getData } from "../../services/services";

import "./Animals.scss";

class Animals extends Component {
    constructor(props) {
        super(props);

        this.state = {
            animals: [],
            currentStatus: '',
            shouldUpdate: false
        }
    }

    componentDidMount() {
        getData(endpoints.animals, function (error) {
            alert(error);
        }, "Грешка от страна на сървъра при вземане на животните!")
            .then(res => {
                this.setState({ animals: res })
            });
    }

    componentDidUpdate(prevProps) {
        debugger;
        const status = this.props.location.search; //this.props.match.params.status;

        if (prevProps.location.search === status) { //prevProps.match.params.status == status
            return;
        }

        let animalsURL = endpoints.animals + ((status) ? `${status}` : '');
        getData(animalsURL, function (error) {
            alert(error);
        }, "Грешка от страна на сървъра при вземане на животните!")
            .then(res => {
                this.setState({ animals: res, currentStatus: status })
            });
    }
    
    render() {
        return (
            <ThemeContext.Provider value={this.state.shouldUpdate}>
                <div className="wrap-animals">
                    <Container>
                        <AnimalsFilters />
                        <Row>
                            {this.state.animals?.map(x =>
                                <AnimalCard key={x.id} {...x} />
                            )}
                        </Row>
                    </Container>
                </div>
            </ThemeContext.Provider>
        );
    };
}

Animals.contextType = ThemeContext;

export default Animals;