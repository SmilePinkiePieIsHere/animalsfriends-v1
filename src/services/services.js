import getAccessToken from "./auth.js";

async function baseFetch(urlRequest, data = {}, onSuccess, onFailure, methodRequest, failureMsg, hasBody = true, hasAuth = false) {
    let headers =  {
        'Content-Type': 'application/json',
        'Accept': 'application/json'          
    };

    if (hasAuth) {
        let accessToken = await getAccessToken();
        headers['Authorization'] = 'Bearer ' + accessToken;
    }
    
    let request = {
        method: methodRequest,
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: headers,  
        redirect: 'follow',
        referrerPolicy: 'no-referrer'    
    };    

    if (hasBody) {
        request.body = JSON.stringify(data);
    }
    
    await fetch(urlRequest, request)
    .then(res => res.json())
    .then((data) => {       
        onSuccess(data);
    })
    .catch(error => {  
        console.log(error); 
        onFailure(failureMsg);
    });
}

export async function getData(url, onFailure, failureMsg) {
    return fetch(url)
        .then(res => res.json())
        .catch(error => {
            console.log(error);
            onFailure(failureMsg);            
        });
}

export async function postData(url = '', data = {}, onSuccess, onFailure) {
    baseFetch(url, data, onSuccess, onFailure, 'POST', 'Сървърна грешка при оторизацията!');    
}

export async function postAuthData(url = '', data = {}, onSuccess, onFailure, methodRequest = 'POST') {  
    baseFetch(url, data, onSuccess, onFailure, methodRequest, 'Сървърна грешка при обновяване на данни!', true, true);
}

export async function deleteAuthData(url = '', onSuccess, onFailure) {  
    baseFetch(url, {}, onSuccess, onFailure, 'DELETE', 'Сървърна грешка при изтриване!', false, true);
}



