import * as React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import ColumnsGrid from './Search-Inputs';
import AccountMenu from './Account-header';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Links from './links';



const DemoPaper = styled(Paper)(({ theme }) => ({
  width: '100vw',
  height: '40vh',
  backgroundColor: '#00064A',
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {

    height: '15vh',
  },

  [theme.breakpoints.down('xs')]: {

    height: '15vh',
  },
}));

const MyBox = () => {

  const location = useLocation();

  const isAdminPanel = location.pathname.startsWith("/admin")


  const navigate = useNavigate();

  const navigateToHotels = () => {
    navigate('/hotels')
  }

  const navigateToFlights = () => {
    navigate('/')
  }

  const navigateToUsersPanel = () => {
    navigate('/admin/users')
  }

  const navigateToDestinationsPanel = () => {
    navigate('/admin/destinations')
  }

  return (
    <Stack direction="row" spacing={2}>
      <DemoPaper variant="outlined" sx={{xs: {height: '8vh'}, sm: {height: '8vh'} }}>
      <Links />
        <AccountMenu/>
        <Box sx={{mt: 7}}>
        <Typography variant={'h4'} color={'white'} mr={120} sx={{ mt: {xs: -14, sm: -14, md: 2, lg:2}  }}>BeSmart. Travel Smart.</Typography>
<Container sx={{ml: -48.5, mt:5}}>
  <Box sx={{display: isAdminPanel ? 'none' : 'block'}}>
  <Button variant="outlined" onClick={navigateToFlights} sx={{marginInline:1, color: 'white'}}>Flights</Button>
  <Button variant="outlined" onClick={navigateToHotels} sx={{marginInline:1, color: 'white'}}>Hotels</Button>
  </Box>
  {isAdminPanel &&
  (
    <>
    <Button variant="outlined" onClick={navigateToUsersPanel} sx={{marginInline:1, color: 'white'}}>Users Panel</Button>
    <Button variant="outlined" onClick={navigateToDestinationsPanel} sx={{marginInline:1, color: 'white'}}>Destinations Panel</Button>
    </>
    )}
  </Container>
  </Box>
  <Box sx={{mt: {md: 5, lg: 5}}}>
  <ColumnsGrid/>
  </Box>
        </DemoPaper>
    </Stack>
  );
}

export {MyBox};