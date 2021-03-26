import { Component } from "react";

const test = function (e) {
    console.log("test");
}

class ContactUs extends Component {
    constructor(props) {
        super(props);
    }

    

    render() {
        return (
            <form onSubmit={test}>

            </form>);
    };
}

export default ContactUs;