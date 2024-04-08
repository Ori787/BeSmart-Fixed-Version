import axios from 'axios';
import { getToken } from '../../services/tokenStorage';

const destinationInsertion = async (payload) => {
    const Token = getToken();
    try {
        const response = await axios.post(`/destinations`, payload, {
            headers: {
                Authorization: `Bearer ${Token}`
            }
        })
        const { data } = response;
        console.log("data", data)
    } catch (err) {
        console.log("error", err)
    };
};

export default destinationInsertion;