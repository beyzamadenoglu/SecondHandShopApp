import axios from 'axios';

//declare baseurl one time, use everywhere
export const baseURL = 'https://bootcamp.akbolat.net';
//when we request with axios it will request this url everytime
export default axios.create({baseURL});

export const URL = {
    register: '/auth/local/register',
    login: '/auth/local',
    brands: '/brands',
    categories: '/categories',
    color: '/color',
    offers: '/offers',
    product: '/products',
    asdf: 'asdfadsf'
}
