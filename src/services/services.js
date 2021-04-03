export async function postData(url = '', data = {}, onSuccess) {
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
        alert('Error while authorization!');       
        console.log(error)
    });
}

export async function postAuthData(url = '', data = {}, accessToken, onSuccess) {  
    await fetch(url, {
        method: 'POST',        
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + accessToken       
        },            
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then((data) => {       
        onSuccess(data);
    })
    .catch(error => {    
        console.log(error)
    });
}

// export default {
//     postData,
//     postAuthData
// };

