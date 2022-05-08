import axios, { URL } from '../constants/axios';

const getFilteredCategories = async (id) => {
    try {
        return await axios
            .get(`${URL.categories}/${id}`).then((res) => {
                if (res.status === 200) {
                    console.log(res.data);
                    return res.data.products;
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