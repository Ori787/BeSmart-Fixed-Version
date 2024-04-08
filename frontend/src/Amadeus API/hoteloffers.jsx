import { useState } from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from "axios";
import accessToken from "./accessToken";
import { HotelOffer } from "../components/hotel-list-card";

const HotelList = () => {
    const [cityCode, setCityCode] = useState('');
    const [error, setError] = useState(null);
    const [hotelOffers, setHotelOffers] = useState([]);

    const baseURL = "https://test.api.amadeus.com/v1"
  
      const fetchHotels = async () => {
        try {
          const response = await axios.get(`${baseURL}/reference-data/locations/hotels/by-city`, {
            params: {
              cityCode: cityCode
            }, headers: {
              Authorization: `Bearer ${accessToken}`
            }
          });
          setHotelOffers(response.data.data);
          console.log("response", response.data.data)
        } catch (error) {
          setError(error.message);
        }
      };


    return (
        <>
                  <Box sx={{ flexGrow: 1, mt:5, ml:6.2 }}>
                      <Grid container spacing={2} columns={36} display={'flex'} justifyContent={'center'}>
            <Grid item xs={12} sm={6}>
            <TextField sx={{bgcolor:'white'}}
                        autoComplete="city"
                        name="city"
                        fullWidth
                        id="city"
                        label="City"
                        type="text"
                        value={cityCode}
                        onChange={(e) => setCityCode(e.target.value)}
                        autoFocus
                      />
                    </Grid>
                    <Button variant="contained" sx={{height:'7vh', mt:2, ml: 10}} onClick={fetchHotels}>Search</Button>
              <Grid item xs={2.4}>
              </Grid>
            </Grid>
            </Box>
            <Box mt={10}>
          {hotelOffers.map((offer, index) => (
            <HotelOffer 
            key={index}
            name={offer.name}
            />
          ))}
          </Box>
              </>
          );
}

export default HotelList;