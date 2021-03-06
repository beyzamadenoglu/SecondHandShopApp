import axios, { URL } from '../constants/axios';

const getAllProducts = async () => {
    try {
        return await axios
            .get(URL.product).then((res) => {
                if (res.status === 200) {
                    return res.data;
                }
                else {
                    return {
                        error: 'Products not found',
                    }
                }
            });
    }
    catch (error) {
        console.log(error);
    }

}

export default getAllProducts;