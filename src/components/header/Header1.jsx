import   { useContext, useState } from "react";
import { ColorModeContext } from "../../theme";
import { Box, Container, IconButton, Link, Stack, Typography, useTheme } from "@mui/material";
import { DarkModeOutlined, LightModeOutlined, HelpOutlined, ExpandMore} from "@mui/icons-material";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import EmailSharpIcon from '@mui/icons-material/EmailSharp';


const Header1 = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div id="home">
    <Box sx={{ 
      bgcolor: "#2B3445",
      py: "1px",
      borderBottomRightRadius: 4,
      borderBottomLeftRadius: 4,    
       }}>
  
    
    <Stack direction={"row"} alignItems={"center"} px={2}>
    <HelpOutlined sx={{ fontSize: "16px", color: "#fff"}}/>
    <Link href="https://wa.me/6285950512898/?text=hallo" underline="none">
          <Typography
            sx={{
              ml: 1,
              fontSize: "13px",
              fontWeight: 300,
              color: "#fff",
            }}
            variant="body2"
          >
            Dapatkan Bantuan
          </Typography>
      </Link>

    <Box flexGrow={1}/>

    <div>
      {theme.palette.mode === "light" ? (
        <IconButton
          onClick={() => {
            localStorage.setItem(
              "mode",
              theme.palette.mode === "dark" ? "light" : "dark"
            );
            colorMode.toggleColorMode();
          }}
          color="inherit"
        >
          <LightModeOutlined fontSize="small" sx={{ color: "#fff",mb:1 }}/>
        </IconButton>
      ) : (
        <IconButton
          onClick={() => {
            localStorage.setItem(
              "mode",
              theme.palette.mode === "dark" ? "light" : "dark"
            );
            colorMode.toggleColorMode();
          }}
          color="inherit"
        >
          <DarkModeOutlined fontSize="small" sx={{ mb:1 }} />
        </IconButton>
      )}




        <Link href="https://www.tiktok.com/@podojoyo_laptop?refer=creator_embed" sx={{ mt:1 }}>
        <svg fill="#ffffff" width="18px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"stroke="#ffffff">
            <g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/><g id="SVGRepo_iconCarrier"><path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/></g>
        </svg>
        </Link>

        <Link href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#search/roeypnb26%40gmail.com?compose=new">
          <EmailSharpIcon
            sx={{
              fontSize: "18px",
              mx: 1,
              color: "#fff",
            }}
          />
        </Link>

        <a href="https://www.instagram.com/podojoyo_laptop/">
          <InstagramIcon
            sx={{
              mt: 1,
              fontSize: "18px",
              color: "#fff",
            }}
          />
          </a>
    </div>

    </Stack>
  
    </Box>
    </div>
  )
}

export default Header1