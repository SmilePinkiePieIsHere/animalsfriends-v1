import { Component } from "react";

import * as animalsService from "../../services/animalsService";

class Animals extends Component {
    constructor(props) {
        super(props);

        this.state = {
            animals: []
        }
    }

    componentDidMount() {       

        animalsService 
            .default
            .getAll()
            .then(res => {
                console.log("" + res);
                this.setState({ animals: res })
            });
        
    }

    render() {
        return (<span>
            <ul className="other-pets-list">
               {this.state.animals.map(x => 
                    x.name
                )}
            </ul>
        </span>);
    };
}

export default Animals;