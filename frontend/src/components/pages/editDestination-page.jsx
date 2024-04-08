import axios from "axios";
import { useState } from "react";
import { getToken } from "../../services/tokenStorage";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';



const EditDestinationComp = () => {

    const defaultTheme = createTheme();

const [destinationValue, setDestinationValue] = useState({
Destination: "",
Image: "",
Description: "",
});

const handleEditdestination = async (_id) => {

    const URL = process.env.REACT_APP_SERVER_BASE_URL;

try {

const response = await axios.put(`${URL}/destinations`, destinationValue, {
    headers: {
        Authorization: `Bearer ${getToken()}`
    }, params: {
        _id
    },
});

} catch (err) {

console.log("Error", err)

};
}

const handleInputChange = (e) => {
    setDestinationValue((original) => ({
...original,
[e.target.id] : e.target.value
    }));
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
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Update your information
          </Typography>
          <Box component="form" noValidate onSubmit={handleEditdestination} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="destination"
                  name="destination"
                  required
                  fullWidth
                  id="destination"
                  value={destinationValue.Destination}
                  onChange={handleInputChange}
                  label="Destination"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="Description"
                  value={destinationValue.Description}
                  onChange={handleInputChange}
                  label="Description"
                  name="Description"
                  autoComplete="Description"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  id="Image"
                  value={destinationValue.Image}
                  onChange={handleInputChange}
                  label="Image"
                  name="Image"
                  autoComplete="Image"
                />
              </Grid>
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
  );
};

export default EditDestinationComp;