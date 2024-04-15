import accessToken from "../Amadeus API/accessToken";
import {amadeusClient} from '../utils/axios-clients/amadeus-client';

export async function fetchHotels(cityCode) {
    try {
        const response = await amadeusClient.get(`/reference-data/locations/hotels/by-city`, {
            params: {
                cityCode: cityCode
            }, 
        });

        return response.data.data;
    } catch (error) {
        console.error(error);
    }
};
  