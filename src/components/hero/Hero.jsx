import {
    Box,
    Button,
    Container,
    Link,
    Stack,
    Typography,
    useTheme,
  } from "@mui/material";
  import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
  import { Swiper, SwiperSlide } from 'swiper/react';
  import "swiper/css";
  import "swiper/css/pagination";
  import './slider.css';
  import { Autoplay, Pagination } from 'swiper/modules';
import IconSection from "./IconSection";
import { BorderAllRounded, Style } from "@mui/icons-material";


  const mySlider = [ 
    { text: "PODOJOYO", link: "src/images/Podojoyo.jpg" },
    { text: "INTEL", link: "src/images/Intel.jpg"},
    { text: "LENOVO", link: "src/images/Lenovo.jpg" },
    { text: "PODOJOYO", link: "src/images/AMD.jpg" },
    { text: "TUFF", link: "src/images/Tuff.jpg" },
   
    
   
  ];
  const Hero = () => {
    const theme = useTheme();
    return (
      <Container>
      <Box sx={{pt: 2, mt: 2.5, display: "flex", alignItems: "center", gap: 2 }}>
        <Swiper
          loop={true}
          autoplay=
          {{ delay: 3500, disableOnInteraction: false,
           }}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {mySlider.map((item) => {
            return (
              <SwiperSlide key={item.link} className="parent-slider">
                <img src={item.link} alt="" />
                <Box
                  sx={{
                    [theme.breakpoints.up("sm")]: {
                      position: "absolute",
                      left: "10%",
                      textAlign: "left",
                      
                    },

                    [theme.breakpoints.down("sm")]: {
                      pt: 4,
                      pb: 6,
                    },
                  }}
                >
 
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <Box sx={{ display: { xs: "none", md: "block", minWidth: "26.4%"} }}>
          <Box sx={{ position: "relative" }}>
            <img width={"100%"} src="src/images/Side Image.png" alt="" style={{ borderRadius: 10 }}/>

            <Stack
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: 31,
              }}
            >
            
            </Stack>
          </Box>

          <Box sx={{ position: "relative"}}>
          <img width={"100%"} src="src/images/Side Image (1).png" alt="" style={{ borderRadius: 10 }}/>

            <Stack
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: 31,
              }}
            >
              <Link
                sx={{
                  color: "#2B3445",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  transition: "0.2s",

                  "&:hover": {
                    color: "#D23F57",
                  },
                }}
                href="#"
                underline="none"
              >
              </Link>
            </Stack>
          </Box>
        </Box>
      </Box>

      <IconSection />
    </Container>
  );
};

export default Hero;