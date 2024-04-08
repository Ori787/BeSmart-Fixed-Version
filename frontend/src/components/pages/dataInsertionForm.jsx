import axios from "axios";
import { useState } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { useSelector } from "react-redux";
import SignupRequest from "../../Logic/Data Insertion/signUpRequest";
import destinationInsertion from "../../Logic/Data Insertion/destinationInsertion";

const DataInsertionForm = () => {

 const addUserClicked = useSelector((bigPie) => bigPie.addUserClicked.clicked)

 const addDestinationClicked = useSelector((bigPie) => bigPie.addDestinationClick.clicked)

  const defaultTheme = createTheme();


    const [UserinputValue, setUserInputValue] = useState({
      first: "",
      middle: "",
      last: "",
      PhoneNumber: "",
      email: "",
      password: "",
      country: "",
      zip: "",
      city: "",
      street: "",
      houseNumber: "",
      isBusiness: "",
  });

  const [DestinationinputValue, setDestinationInputValue] = useState({
    Description: "",
    Image: "",
    Destination: "",
});

    const handleUserInputChange = (e) => {
      setUserInputValue((prev) => ({
...prev,
[e.target.id] : e.target.value
      }));
    };

    const handleDestinationInputChange = (e) => {
      setDestinationInputValue((prev) => ({
        ...prev,
        [e.target.id] : e.target.value
      }))
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if (addUserClicked) {
        SignupRequest(UserinputValue);
      } else {
        destinationInsertion(DestinationinputValue);
      }
    };
    

return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Add new { addUserClicked ? "user" : "destination" }
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name={addUserClicked ? "first" : "Destination"}
                  id={addUserClicked ? "first" : "Destination"}
                  value={addUserClicked ? UserinputValue.first : DestinationinputValue.Destination}
                  onChange={addUserClicked ? handleUserInputChange : handleDestinationInputChange}
                  label={addUserClicked ? "First Name" : "Destination"}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name={addUserClicked ? "middle" : "Description"}
                  id={addUserClicked ? "middle" : "Description"}
                  value={addUserClicked ? UserinputValue.middle : DestinationinputValue.Description}
                  onChange={addUserClicked ? handleUserInputChange : handleDestinationInputChange}
                  label={addUserClicked ? "Middle Name" : "Description"}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  name={addUserClicked ? "last" : "Image"}
                  id={addUserClicked ? "last" : "Image"}
                  value={addUserClicked ? UserinputValue.last : DestinationinputValue.Image}
                  onChange={addUserClicked ? handleUserInputChange : handleDestinationInputChange}
                  label={addUserClicked ? "Last Name" : "Image"}
                />
              </Grid>
              { addUserClicked && (
                <>
                <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  name="email"
                  id="email"
                  value={UserinputValue.email}
                  onChange={handleUserInputChange}
                  label="email"
                  type="email"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  id="password"
                  value={UserinputValue.password}
                  onChange={handleUserInputChange}
                  label="password"
                  type="password"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  name="phoneNumber"
                  id="PhoneNumber"
                  value={UserinputValue.PhoneNumber}
                  onChange={handleUserInputChange}
                  label="Phone Number"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  name="Country"
                  id="country"
                  value={UserinputValue.country}
                  onChange={handleUserInputChange}
                  label="Country"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  name="City"
                  id="city"
                  value={UserinputValue.city}
                  onChange={handleUserInputChange}
                  label="City"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  name="Street"
                  id="street"
                  value={UserinputValue.street}
                  onChange={handleUserInputChange}
                  label="Street"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  name="House Number"
                  id="houseNumber"
                  value={UserinputValue.houseNumber}
                  onChange={handleUserInputChange}
                  label="House Number"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  name="Zip"
                  id="zip"
                  value={UserinputValue.zip}
                  onChange={handleUserInputChange}
                  label="Zip"
                />
              </Grid>
              </>
              )}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Update
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )};

export default DataInsertionForm;