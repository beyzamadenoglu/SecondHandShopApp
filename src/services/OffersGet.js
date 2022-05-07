import axios, { URL } from '../constants/axios';

const getOffers = async () => {
    try {
        return await axios
            .get(URL.offers).then((res) => {
                if (res.status === 200) {
                    console.log(res);
                    return res.data;
                }
                else {
                    return {
                        error: 'Offers not found',
                    }
                }
            });
    }
    catch (error) {
        console.log(error);
    }

}

export default getOffers;