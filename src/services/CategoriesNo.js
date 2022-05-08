import axios, { URL } from '../constants/axios';

const getCategoriesNo = async () => {
    try {
        return await axios
            .get(`${URL.categories}/count`).then((res)=> {
                if (res.status === 200) {
                    return res.data;
                }
                else {
                    return {
                        error: 'Status not found',
                    }
                }
            });
    }
    catch (error) {
        console.log(error);
    }

}

export default getCategoriesNo;

