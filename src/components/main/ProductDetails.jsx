import React, { useState } from "react";
import { Box, Button, Stack, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';





const ProductDetails = ({ clickedProduct }) => {
  const [alignment, setAlignment] = React.useState('left')
  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment)
    }
  }
  const [selectedImg, setSelectedImg] = useState(0);

  if (!clickedProduct.attributes) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2.5,
        flexDirection: { xs: "column", sm: "row" },
        px: 2,
        py: 2
      }}
    >
      <Box sx={{ display: "flex" }}>
        <img width={300} src={clickedProduct.attributes.productImg.data[selectedImg].attributes.url} alt="" />
      </Box>

      <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
        <Typography variant="h5" sx={{ fontFamily: "Figtree" }}>
          {clickedProduct.attributes.productTitle}
        </Typography>
        <Typography my={0.4} fontFamily={"Figtree"} fontSize={"22px"} color={"crimson"} variant="h6">
          {clickedProduct.attributes.productPrice.toLocaleString("id-ID", {style:"currency", currency:"IDR"})}
        </Typography>
        <Typography variant="body1">
          {clickedProduct.attributes.productDescription}
        </Typography>

        <Stack sx={{ justifyContent: { xs: "center", sm: "left" } }} direction={"row"} gap={1} my={2}>
        <ToggleButtonGroup
                value={alignment}
                exclusive
                onChange={handleAlignment}
                aria-label="text alignment"
              >
            {clickedProduct.attributes.productImg.data.map((item, index) => (
            <ToggleButton key={item.id} value="left" aria-label="left aligned">
            <img
              onClick={() => setSelectedImg(index)}
              style={{ borderRadius: 3 }}
              height={100}
              width="cover"
              src={item.attributes.url}
              alt=""
            />
          </ToggleButton>
          ))}
          </ToggleButtonGroup>
        </Stack>

        <a href="https://wa.me/6285950512898/?text=hallo">
          <Button sx={{ mb: { xs: 1, sm: 0 }, textTransform: "capitalize", color:"green" }}>
            <WhatsAppIcon sx={{ mr: 1 }} fontSize="small" />
            Beli sekarang
          </Button>
        </a>
      </Box>
    </Box>
  );
};

export default ProductDetails;
