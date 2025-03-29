import {
  Box,
  Container,
  Drawer,
  IconButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import AppleIcon from '@mui/icons-material/Apple';
import WindowIcon from "@mui/icons-material/Window";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import {
  SportsEsportsOutlined,
  LaptopChromebookOutlined,
  Close,
} from "@mui/icons-material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";

const Header3 = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = useTheme();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleDrawerClose = () => {
    setState({ ...state, right: false });
  };

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mt: 5,
        flexDirection: "row",
      }}
    >
      <Box>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            width: 222,
            // @ts-ignore
            bgcolor: theme.palette.myColor.main,
            color: theme.palette.text.secondary,
          }}
        >
          <WindowIcon />
          <Typography
            sx={{
              padding: "0",
              textTransform: "capitalize",
              mx: 1,
            }}
          >
            Kategori
          </Typography>
          <Box flexGrow={1} />
          <KeyboardArrowRightOutlinedIcon />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{
            ".MuiPaper-root": {
              width: 220,
              // @ts-ignore
              bgcolor: theme.palette.myColor.main,
            },
          }}
        >
          <MenuItem onClick={handleClose} sx={{ textDecoration: 'none' }} component={Link} to="#produk">           
            <ListItemIcon>
              <LaptopChromebookOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>Notebook</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose} sx={{ textDecoration: 'none' }} component={Link} to="#produk">
            <ListItemIcon>
              <AppleIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Macbook</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose} sx={{ textDecoration: 'none' }} component={Link} to="#produk">
            <ListItemIcon>
              <SportsEsportsOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>Series Gaming</ListItemText>
          </MenuItem>
        </Menu>
      </Box>

      {useMediaQuery("(min-width:1200px)") && (
        <Stack gap={3} flexDirection={"row"} justifyContent={"center"}>
          <ListItemButton sx={{ textDecoration: 'none' }} component={Link} to="#home">
            <ListItemText primary="Beranda" />
          </ListItemButton>
          <ListItemButton sx={{ textDecoration: 'none' }} component={Link} to="#about">
            <ListItemText primary="Tentang kami" />
          </ListItemButton>
          <ListItemButton sx={{ textDecoration: 'none' }} component={Link} to="#produk">
            <ListItemText primary="Produk" />
          </ListItemButton>
          <ListItemButton
            sx={{ textDecoration: 'none' }}
            component="a"
            href="https://wa.me/6285950512898/?text=hallo"
            target="_blank"
          >
            <ListItemText primary="Services" />
          </ListItemButton>
          <ListItemButton
            sx={{ textDecoration: 'none' }}
            component="a"
            href="https://wa.me/6285950512898/?text=hallo"
            target="_blank"
          >
            <ListItemText primary="Hubungi kami" />
          </ListItemButton>
        </Stack>
      )}

      {useMediaQuery("(max-width:1200px)") && (
        <IconButton onClick={toggleDrawer("right", true)}>
          <MenuIcon />
        </IconButton>
      )}

      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
        sx={{
          ".MuiPaper-root.css-1sozasi-MuiPaper-root-MuiDrawer-paper": {
            height: "100%",
          },
        }}
      >
        <Box
          sx={{ width: 444, mx: "auto", mt: 6, position: "relative", pt: 10, pl: 5 }}
        >
          <IconButton
            sx={{
              ":hover": { color: "red", rotate: "180deg", transition: "0.3s" },
              position: "absolute",
              top: 0,
              right: 10,
            }}
            onClick={toggleDrawer("right", false)}
          >
            <Close />
          </IconButton>
          <ListItemButton sx={{ textDecoration: 'none' }} component={Link} to="#home" onClick={handleDrawerClose}>
            <ListItemText primary="Beranda" />
          </ListItemButton>
          <ListItemButton sx={{ textDecoration: 'none' }} component={Link} to="#about" onClick={handleDrawerClose}>
            <ListItemText primary="Tentang Kami" />
          </ListItemButton>
          <ListItemButton sx={{ textDecoration: 'none' }} component={Link} to="#produk" onClick={handleDrawerClose}>
            <ListItemText primary="Produk" />
          </ListItemButton>
          <ListItemButton
            sx={{ textDecoration: 'none' }}
            component="a"
            href="https://wa.me/6285950512898/?text=hallo"
            target="_blank"
            onClick={handleDrawerClose}
          >
            <ListItemText primary="Services" />
          </ListItemButton>
          <ListItemButton
            sx={{ textDecoration: 'none' }}
            component="a"
            href="https://wa.me/6285950512898/?text=hallo"
            target="_blank"
            onClick={handleDrawerClose}
          >
            <ListItemText primary="Kontak Kami" />
          </ListItemButton>
        </Box>
      </Drawer>
    </Container>
  );
};

export default Header3;
