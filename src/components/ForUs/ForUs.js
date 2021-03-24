import { Component } from "react";
import GoogleApiWrapper from "./GoogleApiWrapper";

class ForUs extends Component {
    constructor(props) {
        super(props);
    }   

    render() {
        return (
            <span>
                <GoogleApiWrapper/>
            </span>);
    };
}

export default ForUs;