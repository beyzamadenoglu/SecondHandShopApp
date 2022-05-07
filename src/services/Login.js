import axios, { URL } from '../constants/axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const loginUser = async (credentials)  => {
    return await axios  
     .post(URL.login, {identifier: credentials.email, password: credentials.password})
        .then((response) => {
            console.log('login jsjs')
            if (response.data.jwt) { cookies.set('jwt', response.data.jwt, { path: '/' }) }
            return response;
        })
    
        .catch((error) => {
            console.log('Error occurred:', error);
            return error.code;
        });
}
    
    