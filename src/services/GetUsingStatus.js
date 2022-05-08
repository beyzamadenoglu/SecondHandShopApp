import axios, { URL } from '../constants/axios';

const getAllStatus = async () => {
    try {
        return await axios
            .get(URL.status).then((res)=> {
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

export default getAllStatus;

