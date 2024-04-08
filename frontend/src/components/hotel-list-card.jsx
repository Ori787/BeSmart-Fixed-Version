import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';



export const HotelOffer = ({ name }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        padding: '2',
      }}
    >
      <Box
        component="div"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 2,
          flexWrap: 'wrap',
          p: 0,
          m: 0,
          maxWidth: 600,
          width: '100%',
        }}
      >
<Card component="div" sx={{ minWidth: 300, width: '100%', height: '8vh', marginTop: '3.5vh', borderColor:'darkblue', borderWidth: 2, borderRadius: 8 }} variant="outlined">
          <CardContent>
<Typography>{name}</Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

