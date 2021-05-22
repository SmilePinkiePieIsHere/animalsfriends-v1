import { Component, Fragment } from 'react';

import PostFormView from "../Posts/PostFormView";
import AlertNotification from "../General/AlertNotification";
import ThemeContext from "../General/ThemeContext";

import endpoints from "../../services/endpoints.js";
import { postAuthData, getData } from "../../services/services.js";

function PostAdd() {
        const context = {
            title: "",
            description: ""
        }

        return(<Fragment>
            {/* {
                this.state.alertShow
                    ? (<AlertNotification text={this.state.alertText} heading={this.state.alertTitle} variant={this.state.alertClass} show={this.state.alertShow} />)
                    : null
            }        */}
                <ThemeContext.Provider value={context}>
                    test
                    <PostFormView/>  
                </ThemeContext.Provider>
        </Fragment>)   
};

export default PostAdd;