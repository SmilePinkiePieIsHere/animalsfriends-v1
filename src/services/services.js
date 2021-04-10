import getAccessToken from "./auth.js";

const accessToken = getAccessToken();

// async function baseFetch(url, method, headers) {
//     return await fetch(url, {
//         method: 'POST',
//         mode: 'cors', // no-cors, *cors, same-origin
//         cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//         credentials: 'same-origin', // include, *same-origin, omit
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'          
//         },  
//         redirect: 'follow', // manual, *follow, error
//         referrerPolicy: 'no-referrer', // no-referrer, *client      
//         body: JSON.stringify(data)
//     })
//     .then(res => res.json())
//     .then((data) => {       
//         onSuccess(data);
//     })
//     .catch(error => {  
//         console.log(error); 
//         onFailure('Сървърна грешка при оторизацията!');
//     });
// }

export async function postData(url = '', data = {}, onSuccess, onFailure) {
    await fetch(url, {
        method: 'POST',
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'          
        },  
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client      
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then((data) => {       
        onSuccess(data);
    })
    .catch(error => {  
        console.log(error); 
        onFailure('Сървърна грешка при оторизацията!');
    });
}

export async function postAuthData(url = '', data = {}, onSuccess, onFailure, methodRequest = 'POST') {  
    await fetch(url, {
        method: methodRequest,
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit       
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + accessToken       
        },        
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client      
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then((data) => {  
        onSuccess(data);
    })
    .catch(error => {       
        console.log(error); 
        onFailure('Сървърна грешка при обновяване на данни!');
    });
}

export async function deleteAuthData(url = '', onSuccess, onFailure) {  
    await fetch(url, {
        method: 'DELETE',        
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + accessToken       
        }
    })
    .then(res => res.json())
    .then((data) => {    
        onSuccess(data);
    })
    .catch(error => {  
        console.log(error);
        onFailure('Сървърна грешка при изтриване!');
    });
}



