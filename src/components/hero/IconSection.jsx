import {
    Box,
    Container,
    Divider,
    Stack,
    Typography,
    useMediaQuery,
    useTheme,
  } from "@mui/material";
  import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
  import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";
  import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";
  import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
  import PercentIcon from '@mui/icons-material/Percent';
  import LocalShippingIcon from '@mui/icons-material/LocalShipping';
  import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';

  const IconSection = () => {
    const theme = useTheme()
    return (
      <Container sx={{mt: 3 }}>
        <Stack
      divider={
        useMediaQuery("(min-width:600px)") ? (
          <Divider orientation="vertical" flexItem />
        ) : null
      }
      
        
        sx={{ flexWrap: "wrap", ".MuiTypography-root": {
          fontFamily: "Figtree", fontWeight: "600"
        } }}
        direction={"row"}
        alignItems={"center"}
        
        textAlign={"left"}
       
      >
          <MyBox
          
            icon={<PercentIcon fontSize="large" />}
            title={"Banyak Promo"}
            subTitle={""}
          />
          <MyBox
            icon={<VerifiedUserOutlinedIcon fontSize="large" />}
            title={"Garansi Toko"}
            subTitle={""}
           
          />
          <MyBox
            icon={<LocalShippingIcon fontSize="large" />}
            title ={"Free Shipping" } 
            subTitle={""}
          />
          <MyBox
            icon={<HeadsetMicIcon fontSize="large" />}
            title={"Dukungan Pelanggan"}
            subTitle={""}
          />
        </Stack>
      </Container>
    );
  };
  
  export default IconSection;
  
  // eslint-disable-next-line react/prop-types
  const MyBox = ({ icon, title, subTitle }) => {
    const theme = useTheme();
    return (
      <Box
       
        sx={{
          width: 250,
          display: "flex",
          flexGrow: 1,
          alignItems: "center",
          gap: 3,
  
          py: 1.6,
          justifyContent: useMediaQuery("(min-width:600px)") ? "center" : "left",
        }}
      >
        {icon}
  
        <Box>
          <Typography variant="body1">{title}</Typography>
          <Typography
            sx={{ fontWeight: 300, color: theme.palette.text.secondary }}
            variant="body1"
          >
            {subTitle}
          </Typography>
        </Box>
      </Box>
    );
  };