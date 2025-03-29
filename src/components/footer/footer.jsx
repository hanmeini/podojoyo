import { Box, Button, Container, Grid, Link, Typography } from '@mui/material';
import './footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
 

const Footer = () => {
  return (
    <Box
    sx={{
     
      bgcolor: "#2B3445",
      py: 1.3,
    }}
  >
    <footer className="footer">
  	 <div className="container">
  	 	<div className="row">
  	 		<div className="footer-col">
  	 			<h4>Podojoyo Laptop</h4>
  	 			<ul>
  	 				<li><a href="#about">about us</a></li>
  	 				<li><a href="https://wa.me/6285950512898/?text=hallo">our services</a></li>
  	 				<li><a href="https://affiliate.tokopedia.com/?_branch_match_id=1321719141161645068&utm_medium=marketing&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL8nPzi9ITclM1MvJzMvWr8jLKwwLrnA1L04CANzFRPQiAAAA">affiliate program</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Dapatkan bantuan</h4>
  	 			<ul>
  	 				<li><a href="#">FAQ</a></li>
  	 				<li><a href="#">shipping</a></li>
  	 				<li><a href="#">returns</a></li>
  	 				<li><a href="#">order status</a></li>
  	 				<li><a href="#">payment options</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>online shop</h4>
  	 			<ul>
  	 				<li><a href="#main">Gaming Series</a></li>
  	 				<li><a href="#main">Laptop</a></li>
  	 				<li><a href="#main">Lenovo</a></li>
  	 				<li><a href="#main">Asus</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Ikuti Kami</h4>
  	 			<div className="social-links">
  	 				<a href="https://www.tiktok.com/@podojoyo_laptop?refer=creator_embed"><i><svg fill="#ffffff" width="23px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"stroke="#ffffff">
            			<g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/><g id="SVGRepo_iconCarrier"><path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/></g></svg></i>
					</a>
  	 				<a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#search/roeypnb26%40gmail.com?compose=new"><i><EmailSharpIcon/></i></a>
  	 				<a href="https://www.instagram.com/podojoyo_laptop/"><i><InstagramIcon/></i></a>
  	 				<a href="https://wa.me/6285950512898/?text=hallo"><i><WhatsAppIcon/></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>

  <Typography
      justifyContent={"center"}
      display={"flex"}
      alignItems={"center"}
      color={"HighlightText"}
      variant="h6"
      sx={{fontSize: 18, fontFamily: "Figtree"}}

    >
      Designed and developed by
      <Button
          sx={{
            mx: 0.5,
            fontSize: "18px",
            textTransform: "capitalize",
            color: "#ff7790",
			fontFamily: "Figtree"
          }}
          variant="text"
          color="primary"
        >
          Podojoyo Laptop
        </Button>
      ©2024
    </Typography>

  </Box>
 

  );
}

export default Footer;