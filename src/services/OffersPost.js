import axios, { URL } from '../constants/axios';

const getOffers = async () => {
    try {
        return await axios
            .post(URL.offers).then((res) => {
                if (res.status === 200) {
                    console.log(res);
                    return res.data;
                }
                else {
                    return {
                        error: 'Offer not send',
                    }
                }
            });
    }
    catch (error) {
        console.log(error);
    }

}

export default getOffers;