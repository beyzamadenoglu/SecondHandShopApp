import axios, { URL } from '../constants/axios';

const getAllCategories = async () => {

    try {
        const res = await axios
            .get(URL.categories);
        if (res.status === 200) {
            return res.data;
        }
        else {
            return {
                error: 'Categories not found',
            }
        }
    }
    catch (error) {
        console.log(error);
    }

}

export default getAllCategories;