import axios, { URL } from '../constants/axios';

const getAllCategories = async () => {
    try {
        return await axios
            .get(URL.categories).then((res)=> {
                if (res.status === 200) {
                    return res.data;
                }
                else {
                    return {
                        error: 'Categories not found',
                    }
                }
            });
    }
    catch (error) {
        console.log(error);
    }

}

export default getAllCategories;

