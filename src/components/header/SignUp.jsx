import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {Link} from "react-router-dom"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PermIdentityOutlined from '@mui/icons-material/PermIdentityOutlined';
import { GoogleLogin } from 'react-google-login';
import { Divider, IconButton, useMediaQuery } from '@mui/material';
import { ColorModeContext, useMode } from "../../theme";
const clientId = "548204688154-p0qo8nbl1rpo8pun1a7cjahipd4kfomg.apps.googleusercontent.com"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';



 

export default function SignUp() {
  const [theme, colorMode] = useMode();
 
  //Signup google
  const onSucces = (res) => {
    console.log("LOGIN SUCCES! Curent User: ",res.profileObj);
  };
  const onFailure = (res) => {
    console.log("LOGIN FAILED! Curent User: ",res.profileObj);
  };
  //signup strapi
  const [message, setMessage] = useState(null);
  const register = async (event) => {
      event.preventDefault();
      setMessage(null);
      const formData = new FormData(event.target);
      // @ts-ignore
      const jsonData = Object.fromEntries(formData);

      const reqOptions = {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(jsonData)
      };

      const req = await fetch("http://localhost:1337/api/auth/local/register", reqOptions);
      const res = await req.json();

      if (res.error) {
          setMessage(res.error.message);
          return;
      }

      if (res.jwt && res.user) {
          setMessage('succsessfull registration.');
      }

  }
  return (
    <ColorModeContext.Provider 
    // @ts-ignore
    value={colorMode}>   
         <ThemeProvider 
    // @ts-ignore
         theme={theme}>
      <Link to="/">
            <ArrowBackIcon fontSize='small' style={{ margin: "15px", }} />
      </Link>
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
            <PermIdentityOutlined />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ textTransform: "capitalize" }}>
            Register
          </Typography>
          <Box component="form" noValidate onSubmit={register} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
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
                />
              </Grid>
              <Grid item xs={12}>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, textTransform: "capitalize", borderRadius: "20px" }}
            >
              Register
            </Button>
            <div style={{ textAlign:"center", marginBottom:"5px" }}>{ message }</div>
          
            <Typography sx={{ fontFamily: "Figtree", color: "#333", textAlign: "center"}}>ATAU</Typography>
            <Box sx={{ alignItems: "center", position: "relative", textAlign: "center", marginBottom: 5, mt: 2 }}>
<GoogleLogin 
  clientId={clientId}
  buttonText='Continue with Google'
  onSuccess={onSucces}
  onFailure={onFailure}
  cookiePolicy={'single_host_origin'}
/>
</Box>
            <Grid container justifyContent="center">
              <Grid item >
                <Link to="login">
                  Sudah punya akun? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      </ThemeProvider>
      </ColorModeContext.Provider>
  )
}