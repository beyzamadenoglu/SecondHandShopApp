import axios, { URL } from '../constants/axios';

export const registerUser = async (credentials)  => {

    credentials.username = credentials.email

    await axios  
     .post(URL.register, credentials)
        .then((response) => {
            console.log('Success');
            console.log('User Profile', response.data.user);
            console.log('User Token', response.data.jwt);
        })
    
        .catch((error) => {
            console.log('Error occurred:', error.response);
        });
    
}
    
 