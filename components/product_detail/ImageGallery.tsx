import { Box, Image } from "@chakra-ui/react";
import { useState } from "react";
import ReactImageMagnify from 'react-image-magnify';
// import  from 'react-image-magnify'

interface Props {
  image?: string;
  title?: string;
}

const ImageGallery = ({ image, title }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });


  const handleImageHover = (event: { clientX: any; clientY: any; }) => {
    setIsHovered(!isHovered);
    setCursorPosition({ x: event.clientX, y: event.clientY });

  };

  return (
    <Box
    position="relative"
    overflow="hidden"
    onMouseMove={handleImageHover}
    onMouseLeave={() => setIsHovered(false)}
    >
       <ReactImageMagnify
        {...{
          smallImage: {
            alt: "Product Image",
            isFluidWidth: true,
            src: image,
          },
          largeImage: {
            src: image,
            width: 1500,
            height: 800,
          },
          enlargedImagePosition: "beside",
          // hoverDelayInMs: 0,
          // hoverOffDelayInMs: 0,
          // isHintEnabled: true,
        }}
      />
      {/* <Image
        src={image}
        alt={title}
      
      /> */}
    </Box>
  );
};

export default ImageGallery;
