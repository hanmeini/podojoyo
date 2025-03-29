import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import Logout from "./Logout";
import {Link} from "react-router-dom"
import { GoogleLogin } from 'react-google-login';
import { Copyright } from '@mui/icons-material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from 'react';
import PermIdentityOutlined from '@mui/icons-material/PermIdentityOutlined';
import { ColorModeContext, useMode } from "../../theme";
const clientId = "548204688154-p0qo8nbl1rpo8pun1a7cjahipd4kfomg.apps.googleusercontent.com"
const defaultTheme = createTheme();



function Login() {
  const [theme, colorMode] = useMode();
  //Login Google
  const onSucces = (res) => {
    console.log("LOGIN SUCCES! Curent User: ",res.profileObj);
  }
  const onFailure = (res) => {
    console.log("LOGIN FAILED! Curent User: ",res.profileObj);
  }
  
  //Login Strapi
  const [message, setMessage] = useState(null);
  const login = async (event) => {
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

      const req = await fetch("http://localhost:1337/api/auth/local", reqOptions);
      const res = await req.json();

      if (res.error) {
          setMessage(res.error.message);
          return;
      }

      if (res.jwt && res.user) {
          setMessage('Login berhasil.');
          window.location.href = '/user';
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
      
            <ArrowBackIcon fontSize='small' style={{ margin: "15px" }}/>
        
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
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={login} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="identifier"
              label="Email Address"
              name="identifier"
              autoComplete="identifier"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, textTransform: "capitalize", borderRadius: "20px" }}
              
            >
              Sign In
            </Button>
            <div style={{ textAlign:"center", marginBottom:"5px" }}>{ message }</div>
            <Typography sx={{ fontFamily: "Figtree", color: "#778899", fontWeight: "600", textAlign: "center"}}>OR</Typography>
            <Box sx={{ alignItems: "center", position: "relative", textAlign: "center", marginBottom: 5, mt: 2 }}>
            <GoogleLogin 
              clientId={clientId}
              buttonText='Continue with Google'
              onSuccess={onSucces}
              onFailure={onFailure}
              cookiePolicy={'single_host_origin'}
              isSignedIn={true}
            />
            </Box>
            <Grid container justifyContent={"center"}>
                <Link to="signup" variant="body2"  >
                  {"Belum punya akun? Register"}
                </Link>
            </Grid>
          </Box>
        </Box>
      </Container>
     </ThemeProvider>
      </ColorModeContext.Provider>
  )
}

export default Login