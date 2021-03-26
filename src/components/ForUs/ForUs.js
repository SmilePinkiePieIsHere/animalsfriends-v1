import { Component } from "react";
import ContactUs from "./ContactUs";
import GoogleApiWrapper from "./GoogleApiWrapper";

class ForUs extends Component {
    constructor(props) {
        super(props);
    }   

    render() {
        return (
            <span>
                <ContactUs/>
                <GoogleApiWrapper/>
            </span>);
    };
}

export default ForUs;