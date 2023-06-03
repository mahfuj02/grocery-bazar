
import { Box, Image } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import slider1 from "../../public/banner-combo-offer_iYWmxRX.webp";
import slider2 from "../../public/banner-powder_9KpPlSK.webp";
import slider3 from "../../public/banner-wholesale_1_Jc3OQqw.webp";



const banners = [
    { src: slider1.src, alt: "Banner 1" },
    { src: slider2.src, alt: "Banner 2" },
    { src: slider3.src, alt: "Banner 3" },
  ];


  const Carousel = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
    };
  
    return (
      <Box width='94%' alignItems='center' marginX='auto'>
        <Slider {...settings}>
          {banners.map((image, index) => (
            <Box key={index}>
              <Image  borderRadius={20} src={image.src} alt={image.alt} />
            </Box>
          ))}
        </Slider>
      </Box>
    );
  };
  
  export default Carousel;
