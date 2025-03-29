import React, { useState, useRef, useEffect } from "react";
import {
  Badge,
  Container,
  IconButton,
  InputBase,
  Stack,
  Typography,
  useTheme,
  Box,
  Popper,
  Paper,
  ClickAwayListener,
  Button,
  Dialog,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useGetproductByNameQuery } from "../../Redux/product";
import { Link } from "react-router-dom";
import { Close } from "@mui/icons-material";
import ProductDetails from "../main/ProductDetails";

const Search = styled("div")(({ theme }) => ({
  flexGrow: 0,
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  border: "1px solid #777",
  "&:hover": {
    border: "1px solid #333",
  },
  width: "266px",
  [theme.breakpoints.up("sm")]: {
    width: "500px",
  },
  [theme.breakpoints.down("xs")]: {
    width: "100%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#777",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header2 = () => {
  const [search, setSearch] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const { data } = useGetproductByNameQuery('products?populate=*');
  const theme = useTheme();
  const inputRef = useRef();
  const [buka, setBuka] = useState(false);
  const [clickedProduct, setClickedProduct] = useState(null);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setBuka(false);
  };

  const handleProductClick = (product) => {
    setClickedProduct(product);
    setAnchorEl(null);
    document.getElementById("produk").scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (clickedProduct) {
      const timer = setTimeout(() => {
        setBuka(true);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [clickedProduct]);

  const filteredData = data?.data.filter(item =>
    item.attributes.productTitle.toLowerCase().includes(search.toLowerCase())
  );

  const open = Boolean(anchorEl) && search !== '';

  return (
    <Container sx={{ my: 3 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
          <Search
            sx={{
              display: "flex",
              borderRadius: "22px",
              justifyContent: "space-between",
            }}
          >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Cari Produk"
              inputProps={{ "aria-label": "search" }}
              value={search}
              onChange={handleSearchChange}
              ref={inputRef}
            />
          </Search>
          <Popper open={open} anchorEl={anchorEl} placement="bottom-start" style={{ zIndex: 1, width: '100%', maxWidth: '500px', justifyContent: "space-between" }}>
            <ClickAwayListener onClickAway={handleClose}>
              <Paper sx={{ mt: 1, width: '(100% - 80px)', maxWidth: 'none' }}>
                {filteredData && filteredData.length > 0 ? (
                  <Stack sx={{ marginTop: 1, padding: 2 }}>
                    {filteredData.map((item) => (
                      <Button
                        key={item.id}
                        sx={{
                          textDecoration: "none",
                          color: "black",
                          padding: "5px",
                          backgroundColor: "gray:hover",
                          display: "flex",
                          justifyContent: "space-between",
                          width: "100%"
                        }}
                        onClick={() => handleProductClick(item)}
                      >
                        <Typography variant="h6" component="div" sx={{ fontSize: "13px" }}>
                          {item.attributes.productTitle}
                        </Typography>
                        <SearchIcon />
                      </Button>
                    ))}
                  </Stack>
                ) : (
                  <Typography sx={{ padding: 2 }}>No results found</Typography>
                )}
              </Paper>
            </ClickAwayListener>
          </Popper>
        </Box>

        <Stack direction="row" alignItems="center">
          <Link to="signup">
            <IconButton>
              <AccountCircleOutlinedIcon />
            </IconButton>
          </Link>
        </Stack>
      </Stack>

      <div id="main" style={{ marginTop: '64px' }}></div>

      {clickedProduct && (
        <Dialog
          sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } } }}
          open={buka}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <IconButton
            sx={{
              ":hover": { color: "red", rotate: "180deg", transition: "0.3s" },
              position: "absolute",
              top: 0,
              right: 10,
            }}
            onClick={handleClose}
          >
            <Close />
          </IconButton>
          <ProductDetails clickedProduct={clickedProduct} />
        </Dialog>
      )}
    </Container>
  );
};

export default Header2;
