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
        //console.log(this.props.match.params.category);
       
        animalsService //.default
        .getAll()
        .then(res => this.setState({ animals: res }));
        console.log(this.state.animals)
    }
   
    render() {
        return(<span>
            {/* <ul className="other-pets-list">
               {this.state.animals.map(x => 
                    x.name
                )}
            </ul> */}
        </span>);
    };
}

export default Animals;