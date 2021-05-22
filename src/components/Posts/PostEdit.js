import { Component, Fragment } from 'react';

import PostFormView from "../Animals/PostFormView";
import AlertNotification from "../General/AlertNotification";
import ThemeContext from "../General/ThemeContext";

import endpoints from "../../services/endpoints.js";
import { postAuthData, getData } from "../../services/services.js";

function PostEdit() {
        const contextTest = {
            image: this.state.profileImg,
            uploading: this.onUpload.bind(this)
        }

        return(<Fragment>
            {
                this.state.alertShow
                    ? (<AlertNotification text={this.state.alertText} heading={this.state.alertTitle} variant={this.state.alertClass} show={this.state.alertShow} />)
                    : null
            }       
                <ThemeContext.Provider value={contextTest}>
                    <PostFormView/>  
                </ThemeContext.Provider>
        </Fragment>)   
};

export default PostEdit;