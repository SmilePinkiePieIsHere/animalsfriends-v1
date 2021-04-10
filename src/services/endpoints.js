const baseUrl = "https://localhost:44337"; //"https://localhost:44337"; 44358

var endpoints = {
    baseUrl: `${baseUrl}`,
    animals: `${baseUrl}/animals`,
    users: `${baseUrl}/user`,
    userLogin: `${baseUrl}/user/login`,
    userRegister: `${baseUrl}/user/register`,
    userRefresh: `${baseUrl}/user/refresh_token`
}
export default endpoints;