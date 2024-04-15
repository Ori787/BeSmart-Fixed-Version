import { useMutation } from "@tanstack/react-query";
import { fetchHotels } from "../../requests/amadeus-hotels";

export function useHotles() {
    return useMutation({
        mutationFn: async (cityCode) => {
            return await fetchHotels(cityCode);
        }
    });
}