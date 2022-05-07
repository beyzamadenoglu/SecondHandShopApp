import axios, { URL } from '../constants/axios';

const getFilteredCategories = async (id) => {
    try {
        return await axios
            .get(`${URL.categories}/${id}`).then((res) => {
                if (res.status === 200) {
                    return res.data;
                }
                else {
                    return {
                        error: 'Category not found',
                    }
                }
            });

    }
    catch (error) {
        console.log(error);
    }

}

export default getFilteredCategories;