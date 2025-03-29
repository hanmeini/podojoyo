import {
  Box,
  Button,
  Container,
  Dialog,
  IconButton,
  Rating,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { Close, ShoppingBagOutlined } from "@mui/icons-material";
import ProductDetails from "./ProductDetails";
import { useGetproductByNameQuery } from "../../Redux/product";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import Pagination from '@mui/material/Pagination';
import CircularProgress from '@mui/material/CircularProgress';



const Main = () => {
  const handleAlignment = (event, newValue) => {
    if (newValue !==null) {
      setmyDate(newValue);
    }
  };

  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };


  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const allProductsAPI = "products?populate=*";
  const notebookCategoryAPI = "products?populate=*&filters[category][$eq]=Notebook";
  const macbookCategoryAPI = "products?populate=*&filters[category][$eq]=Macbook";
  const seriesgamingCategoryAPI = "products?populate=*&filters[category][$eq]=Series Gaming";

  const [myDate, setmyDate] = useState(allProductsAPI);
  const { data, error, isLoading } = useGetproductByNameQuery(myDate);
  const [clickedProduct, setclickedProduct] = useState({});

  if (data) {
    console.log(data.data);
  }

  if (isLoading) {
    return(
      <Box sx={{ py:11, textAlign:"center" }}>
        <CircularProgress />
      </Box>
    )
  };

  if (error) {
    return (
      <Container sx={{ 
        py:11,
        textAlign:"center"
       }}>
        <Typography variant="h6" >{error.// @ts-ignore
          error}</Typography>
        <Typography variant="h6" >Coba Lagi</Typography>
      </Container>
    );
  }

  if (data) {
    return (
      <div id="produk">
      <Container sx={{ py: 9 }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
          gap={3}
        >
          <Box>
            <Typography variant="h6">Recommended</Typography>
            <Typography fontWeight={300} variant="body1">
             Lihat semua produk keluaran kami.
            </Typography>
          </Box>

          <ToggleButtonGroup
            color="error"
            value={myDate}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            sx={{
              ".Mui-selected": {
                border: "1px solid rgba(233, 69, 96, 0.5) !important",
                backgroundColor: "initial",
              },
            
            }}
          >
            <ToggleButton
              sx={{ color: theme.palette.text.primary,  }}
              className="myButton"
              value={allProductsAPI}
              aria-label="left aligned"
            >
              Semua Produk
            </ToggleButton>

            <ToggleButton
              sx={{ mx: "16px!important", color: theme.palette.text.primary }}
              className="myButton"
              value={notebookCategoryAPI}
              aria-label="centered"
            >
              NoteBook
            </ToggleButton>

            <ToggleButton
              sx={{ mx: "16px", color: theme.palette.text.primary }}
              className="myButton"
              value={macbookCategoryAPI}
              aria-label="right aligned"
            >
              Macbook
            </ToggleButton>

            <ToggleButton
              sx={{mx: "16px", color: theme.palette.text.primary }}
              className="myButton"
              value={seriesgamingCategoryAPI}
              aria-label="right aligned"
            >
              Series Gaming
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>

        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
        >
          {data.data.map((item) => {
            return (
              <Card
                key={item}
                sx={{

                  borderRadius: "20px",
                  maxWidth: 350,
                  mt: 6,
                  ":hover .MuiCardMedia-root ": {
                    
                    scale: "1.1",
                    transition: "0.35s",
                  },
                }}
              >
                <CardMedia
                  sx={{ height: 240, borderRadius: "20px" }}
                  // @ts-ignore
                  image={`${item.attributes.productImg.data[0].attributes.url}`}
                />
                

                <CardContent>
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                   {/* Judullllllll */}
                    <Typography gutterBottom variant="h6" component="div" sx={{ fontFamily: "Figtree" }}>
                      {item.attributes.productTitle}
                    </Typography>
                  {/* Hargaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa */}
                    <Typography variant="subtitle1" component="p" sx={{ fontFamily: "Figtree" }}>
                      {item.attributes.productPrice.toLocaleString("id-ID", {style:"currency", currency:"IDR"})}
                    </Typography>
                  </Stack>
                  {/* Deskripsi Produk */}
                  <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "Figtree" }}>
                  {item.attributes.productDescription}
                  </Typography>
                </CardContent>

                <CardActions sx={{ justifyContent: "space-between" }}>
                  <Button
                    onClick={() => {
                      handleClickOpen()
                      setclickedProduct(item)
                    }}
                    sx={{ textTransform: "capitalize" }}>
                    <ShoppingBagOutlined
                      fontSize="small"
                      sx={{ mr: 0.5, mb:0.6 }}
                    />Beli Sekarang
                  </Button>               
                  <Rating
                    precision={0.1}
                    name="read-only"
                    value={item.attributes.productRating}
                    readOnly
                  />
                </CardActions>
              </Card>
            );
          })}
        </Stack>

        <Stack spacing={2} sx={{ alignItems: "center", mt: 4 }}>
      <Typography></Typography>
    </Stack>

        <Dialog
          sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } } }}
          open={open}
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
      </Container>
      </div>
    );
  }
};

export default Main;