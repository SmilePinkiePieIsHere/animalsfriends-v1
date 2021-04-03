import Cookies from 'universal-cookie';

import endpoints from "./endpoints.js";
import { postData } from "./services.js";

function getAccessToken() {  
    const cookies = new Cookies();
    const accessToken = cookies.get('access_token');
    const refreshToken = cookies.get('refresh_token');

    if(!accessToken && refreshToken){

       postData(endpoints.userRefresh, refreshToken, function (data){
            if(data){
                const expires_in = new Date(new Date().getTime() + (data.expires_in * 1000));        
                cookies.set('access_token', data.access_token, { expires: expires_in });
                cookies.set('refresh_token', data.refresh_token);

                return true
            }
        })
    }

    return accessToken;
}

 export default getAccessToken;
