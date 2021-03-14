import { Component } from "react";

import * as animalsService from "./services/animalsService";

class OurAnimals extends Component {
    constructor() {
        this.state = {
            animals: []
        }
    }

    componentDidMount() {
        animalsService.getAll()
        .then(animals => {
            this.setState({animals});
        });
    }

    render() {
        return <footer>This is footer!</footer>;
    };
}

export default OurAnimals;