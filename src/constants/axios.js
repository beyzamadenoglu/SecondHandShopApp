import axios from 'axios';

export const baseURL = 'https://bootcamp.akbolat.net';

export default axios.create({baseURL});

export const URL = {
    register: '/auth/local/register',
    login: '/auth/local',
    brands: '/brands',
    categories: '/categories',
    color: '/colors',
    offers: '/offers',
    product: '/products',
    status: '/using-statuses',
    upload: '/upload/'
}
