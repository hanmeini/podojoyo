
import { Box, CssBaseline,ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Header1 from "./components/header/Header1";
import Header2 from "./components/header/Header2";
import Header3 from "./components/header/Header3";
import Hero from "./components/hero/Hero";
import Main from "./components/main/main";
import Login from "./components/header/Login"
import Footer from "./components/footer/footer";
import ScrollToTop from "./components/scroll/ScrollToTop";
import SignUp from "./components/header/SignUp";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useEffect } from "react";
import {gapi} from "gapi-script"
import ProductDetails from "./components/main/ProductDetails";
import About from "./components/header/About";
import React, { useState } from "react";
import User from "./components/header/User";

const clientId = "548204688154-p0qo8nbl1rpo8pun1a7cjahipd4kfomg.apps.googleusercontent.com"




function App() {
  const [theme, colorMode] = useMode();
  const [clickedProduct, setclickedProduct] = useState({});

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    };

gapi.load('client:auth2', start)
  })
  return (
  <
// @ts-ignore
  BrowserRouter>
    <Switch>
      <Route exact path="/">

     <ColorModeContext.Provider 
// @ts-ignore
value={colorMode}>   
     <ThemeProvider 
// @ts-ignore
     theme={theme}>
      
      <CssBaseline/>
      <Header1/>
      <Header2/>
      <Header3/>
      
      <Box
          bgcolor={
            // @ts-ignore
            theme.palette.bg.main
          }
          >
          <Hero />
          <About/>
          <Main />
          <ScrollToTop/>
          <Footer/>
        </Box>

     </ThemeProvider>
      </ColorModeContext.Provider>
      </Route>
      <ColorModeContext.Provider 
// @ts-ignore
value={colorMode}>   
     <ThemeProvider 
// @ts-ignore
     theme={theme}></ThemeProvider>
      <Route exact path="/login">
          <Login/>
      </Route>
      <Route exact path="/signup">
          <SignUp/>
      </Route>
      <Route exact path="/user">
          <User/>
      </Route>
      </ColorModeContext.Provider>
      </Switch>
      </BrowserRouter>

  )
}

export default App
