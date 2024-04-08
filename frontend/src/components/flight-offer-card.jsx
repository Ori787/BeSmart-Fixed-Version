import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';



export default function MediaCover({ price, origin, destination, isDirectFlightOutbound, isDirectFlightInbound, connectionFinalDestination }) {
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
<Card component="div" sx={{ minWidth: 300, width: '100%', height: '33vh', marginTop: '3.5vh', borderColor:'darkblue', borderWidth: 2, borderRadius: 8 }} variant="outlined">
          <CardContent>
          {isDirectFlightOutbound ? <p>Direct Flight</p> : <p>Flight with Connection Stops</p>}
          <Box sx={{display:'flex',justifyContent:'space-between'}}>
          <Typography><strong>{origin}</strong></Typography>
            <Typography><strong>{isDirectFlightInbound? destination : connectionFinalDestination}</strong></Typography>
            </Box>
            <br/>
            <br/>
            <br/>
            <Box sx={{display:'flex',justifyContent:'space-between'}}>
            <Typography><strong>{isDirectFlightInbound? destination : connectionFinalDestination}</strong></Typography>
            <Typography><strong>{origin}</strong></Typography>
            </Box>
            {isDirectFlightInbound ? <p>Direct Flight</p> : <p>Flight with Connection Stops</p>}
            <Typography sx={{display:'flex', justifyContent: 'flex-end'}}><strong>Total Price: </strong>{price} EUR</Typography>
            <Typography
              level="body-lg"
              fontWeight="lg"
              textColor="#fff"
              mt={{ xs: 12, sm: 18 }}
            >
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

