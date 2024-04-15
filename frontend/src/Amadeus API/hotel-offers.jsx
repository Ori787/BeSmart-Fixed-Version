import { useState } from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import axios from "axios";
import { HotelOffer } from "../components/hotel-list-card";
import { fetchHotels } from "../requests/amadeus-hotels";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useHotles } from "../hooks/requests/use-hotels";

const HotelList = () => {
  const [cityCode, setCityCode] = useState('');

  const { data: hotels = [], mutateAsync: getHotels, isPending: isGettingHotels } = useHotles();

  const handleFetchHotels = async () => {
    await getHotels(cityCode);
  }

  const handleCityChange = (event) => {
    setCityCode(event.target.value)
  };

  return (
    <>
      <Box sx={{ flexGrow: 1, mt: 5, ml: 6.2 }}>
        <Grid container spacing={2} columns={36} display={'flex'} justifyContent={'center'}>
          <Grid item xs={12} sm={6}>
            <TextField sx={{ bgcolor: 'white' }}
              autoComplete="city"
              name="city"
              fullWidth
              id="city"
              label="City"
              type="text"
              value={cityCode}
              onChange={handleCityChange}
              autoFocus
            />
          </Grid>
          <Button variant="contained" sx={{ height: '7vh', mt: 2, ml: 10 }} onClick={handleFetchHotels}>Search</Button>
          <Grid item xs={2.4}>
          </Grid>
        </Grid>
      </Box>
      <Box mt={10}>

        <div style={{
          marginTop: '120px',
          zIndex: 9999,
        }}>
          {isGettingHotels && (
            <CircularProgress />
          )}
        </div>

        {hotels.map((offer, index) => (
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

const person = {
  name: 'ori',
}

const { name: firstName } = person;

console.log(firstName);