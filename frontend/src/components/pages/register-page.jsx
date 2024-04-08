import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SignupLogic from '../../hooks/signupLogic';
 import SignupRequest from '../../Logic/Data Insertion/signUpRequest';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/" sx={{textDecoration: 'none'}}>
        BeSmart
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const defaultTheme = createTheme();

const SignUp = () => {

  const { signupValue, handleInputChange } = SignupLogic();

  const handleSubmit = (e) => {
    e.preventDefault();
    SignupRequest(signupValue);
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
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="first"
                  required
                  fullWidth
                  id="first"
                  value={signupValue.first}
                  onChange={handleInputChange}
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="last"
                  value={signupValue.last}
                  onChange={handleInputChange}
                  label="Last Name"
                  name="last"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  id="PhoneNumber"
                  value={signupValue.PhoneNumber}
                  onChange={handleInputChange}
                  label="Phone Number"
                  name="PhoneNumber"
                  autoComplete="Phone-Number"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  value={signupValue.email}
                  onChange={handleInputChange}
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={signupValue.password}
                  onChange={handleInputChange}
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="street"
                  label="street"
                  type="street"
                  id="street"
                  value={signupValue.street}
                  onChange={handleInputChange}
                  autoComplete="Address"
                />
              </Grid>
              <Grid item xs={3} sm={3}>
                <TextField
                  required
                  fullWidth
                  id="country"
                  value={signupValue.country}
                  onChange={handleInputChange}
                  label="country"
                  name="country"
                  autoComplete="country"
                />
              </Grid>
              <Grid item xs={3} sm={3}>
                <TextField
                  required
                  fullWidth
                  id="zip"
                  value={signupValue.zip}
                  onChange={handleInputChange}
                  label="zip"
                  name="zip"
                  autoComplete="zip"
                />
              </Grid>
              <Grid item xs={3} sm={3}>
                <TextField
                  required
                  fullWidth
                  id="city"
                  value={signupValue.city}
                  onChange={handleInputChange}
                  label="city"
                  name="city"
                  autoComplete="city"
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  required
                  fullWidth
                  id="houseNumber"
                  value={signupValue.houseNumber}
                  onChange={handleInputChange}
                  label="House Number"
                  name="houseNumber"
                  autoComplete="houseNumber"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value={signupValue.isBusiness} id="isBusiness" onChange={handleInputChange} color="primary" />}
                  label="is this a business user?"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}

export { SignUp };