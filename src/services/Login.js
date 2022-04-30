import axios, { URL } from '../constants/axios';

export const loginUser = async (credentials)  => {

    await axios  
     .post(URL.login, {identifier: credentials.email, password: credentials.password})
        .then((response) => {
            console.log('Success');
            console.log('User Profile', response.data.user);
            console.log('User Token', response.data.jwt);
        })
    
        .catch((error) => {
            console.log('Error occurred:', error.response.data.messages);
        });
}
    
    