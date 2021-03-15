import { Component } from "react";

//import * as animalsService from "./services/animalsService";

import Animal from "./Animal";

class OurAnimals extends Component {
    constructor(props) {
        super(props);

        this.state = {
            animals: []
        }
    }

    // componentDidMount() {
    //     animalsService.getAll()
    //         .then(animals => {
    //             this.setState({ animals });
    //         });
    // }

    render() {
        return (
            <div>
                ANIMALS
                {/* {this.state.animals.map(a => 
                    <Animal text={m.title} />
                )} */}
            </div>
        )
    };
}

export default OurAnimals;