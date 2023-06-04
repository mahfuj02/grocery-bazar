import { Image } from "@chakra-ui/react";

interface Props {
  image?: string;
  title?: string;
}

const ImageGallery = ({ image, title }: Props) => {
  return <Image src={image} alt={title} />;
};

export default ImageGallery;
