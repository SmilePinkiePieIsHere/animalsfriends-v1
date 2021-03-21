import { Component } from "react";

import * as animalsService from "../../services/animalsService";

import Animal from "../Animals/Animal";

class Animals extends Component {
    constructor(props) {
        super(props);

        this.state = {
            animals: [],
            currentStatus: '',
        }
    }

    componentDidMount() {
        animalsService
            .default
            .getAll()
            .then(res => {
                this.setState({ animals: res })
            });
        console.log(this.props.match.params);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(this.props.match.params);

        // let currCategory = this.props.match.params.category;

        // if (prevProps.match.params.category == currentCategory) {
        //     return;
        // }

        // petServices
        // .getAll(currCategory)
        // .then(
        //     res => 
        //     this.setState({ pets: res, currentCategory: currCategory}
        // ));
    }

    render() {
        return (<span>
            <ul className="other-pets-list">
                {this.state.animals?.map(x =>
                    <Animal key={x.id} {...x} />
                )}
            </ul>
        </span>);
    };
}

export default Animals;