import axios from 'axios';
import accessToken from '../../Amadeus API/accessToken';

export const amadeusClient = axios.create({
    baseURL: 'https://test.api.amadeus.com/v1',
    headers: {
        Authorization: `Bearer ${accessToken}`
    },
});