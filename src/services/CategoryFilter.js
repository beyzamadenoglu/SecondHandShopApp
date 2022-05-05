import axios, { URL } from '../constants/axios';

const getFilteredCategories = async (id) => {

    try {
        console.log(`${URL.categories}/${id}`);
        console.log(id);
        const res = await axios
            .get(`${URL.categories}/${id}`);
        if (res.status === 200) {
            return res.data;
        }
        else {
            return {
                error: 'Category not found',
            }
        }
    }
    catch (error) {
        console.log(error);
    }

}

export default getFilteredCategories;