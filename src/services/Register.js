import axios, { URL } from '../constants/axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const registerUser = async (credentials)  => {

    credentials.username = credentials.email

    await axios  
     .post(URL.register, credentials)
        .then((response) => {
            console.log('Success');
            console.log('User Profile', response.data.user);
            console.log('User Token', response.data.jwt);
            if (response.data.jwt) { cookies.set('jwt', response.data.jwt, { path: '/' }) }
            console.log("jwt: ", cookies.get('jwt')); 

        })
    
        .catch((error) => {
            console.log('Error occurred:', error.response);
        });
    
}
    
