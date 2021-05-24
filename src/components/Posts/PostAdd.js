import { Component, Fragment, useEffect, useState } from 'react';

import PostFormView from "../Posts/PostFormView";
import AlertNotification from "../General/AlertNotification";
import ThemeContext from "../General/ThemeContext";

import endpoints from "../../services/endpoints.js";
import { postAuthData } from "../../services/services.js";

function PostAdd() {
    const [post, setPost] = useState({
        title: "",
        description: "",
        previewImg: "",
        category: 1,
        startDate: null,
        endDate: null,
        animalId: null
    });
    const [alert, setAlert] = useState({
        alertShow: false,
        alertTitle: "",
        alertText: "",
        alertClass: ""
    });

    const onSubmit = () => {
        const parrentScope = this;

        postAuthData(endpoints.posts, context.post, function (data) {
            parrentScope.alertDetails(true, "Успешно добавихте животно!", "success");

            setTimeout(() => {
                //history.push("/blog");
            }, 3000);

        }, function (error) {
            parrentScope.alertDetails(true, "Грешка от страна на сървъра при добавяне на животното. Моля опитайте по-късно.", "danger");

            setTimeout(() => {
                parrentScope.alertDetails(false, "", "danger");
            }, 3000);
        })
    }

    const alertDetails = (shouldShow, message, classAlert) => {
        setAlert({
            alertShow: shouldShow,
            alertText: message,
            alertClass: classAlert
        });
    }

    let context = {
        post: post,
        postSubmit: onSubmit
    }

    useEffect(() => {

    }, []);

    return (
        <Fragment>
            {
                alert.alertShow
                    ? (<AlertNotification text={alert.alertText} heading={alert.alertTitle} variant={alert.alertClass} show={alert.alertShow} />)
                    : null
            }
            <ThemeContext.Provider value={context}>
                <PostFormView />
            </ThemeContext.Provider>
        </Fragment>)
};

export default PostAdd;