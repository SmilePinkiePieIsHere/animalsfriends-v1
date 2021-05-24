import { Component, Fragment, useEffect, useState } from 'react';

import PostFormView from "../Posts/PostFormView";
import AlertNotification from "../General/AlertNotification";
import ThemeContext from "../General/ThemeContext";

import endpoints from "../../services/endpoints.js";
import { postAuthData } from "../../services/services.js";

function PostAdd() {
    const [post, setPost] = useState({
        // title: "",
        // description: "",
        // previewImg: "",
        // category: 1,
        // userId: null,
        // publishedOn: "",
        // startDate: null,
        // endDate: null,
        // animalId: null
    });

    const onSubmit = () => {
        console.log("add");

        postAuthData(endpoints.posts, context.post, function (data) {
            //parrentScope.alertDetails(true, "Успешно добавихте животно!", "success");

            setTimeout(() => {
                //history.push("/blog");
            }, 3000);

        }, function (error) {
            //parrentScope.alertDetails(true, "Грешка от страна на сървъра при добавяне на животното. Моля опитайте по-късно.", "danger");

            setTimeout(() => {
                //parrentScope.alertDetails(false, "", "danger");
            }, 3000);
        })
    }

    let context = {
        post: post,
        postSubmit: onSubmit
    }

    useEffect(() => {

    }, []);

    return (<Fragment>
        {/* {
                this.state.alertShow
                    ? (<AlertNotification text={this.state.alertText} heading={this.state.alertTitle} variant={this.state.alertClass} show={this.state.alertShow} />)
                    : null
            }        */}
        <ThemeContext.Provider value={context}>
            <PostFormView />
        </ThemeContext.Provider>
    </Fragment>)
};

export default PostAdd;