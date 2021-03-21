import { Component } from "react";

import * as animalsService from "../../services/animalsService";

import Animal from "../Animals/Animal";
import AnimalsFilters from '../Animals/AnimalsFilters';

class Animals extends Component {
    constructor(props) {
        super(props);

        this.state = {
            animals: [],
            currentStatus: '',
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

        if (prevProps.location.search == status) { //prevProps.match.params.status == status
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
            <span>

                <AnimalsFilters />

                <ul className="wrapper-animals">
                    {this.state.animals?.map(x =>
                        <Animal key={x.id} {...x} />
                    )}
                </ul>
            </span>);
    };
}

export default Animals;