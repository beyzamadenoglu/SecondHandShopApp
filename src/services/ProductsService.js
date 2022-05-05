import axios, { URL } from '../constants/axios';

const getAllProducts = async () => {

    try {
        const res = await axios
            .get(URL.product);
        if (res.status === 200) {
            console.log(res);
            return res.data;
        }
        else {
            return {

                error: 'Products not found',
            }
        }
    }
    catch (error) {
        console.log(error);
    }

}

export default getAllProducts;