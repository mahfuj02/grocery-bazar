import Sidebar from "@/components/Sidebar";
import Carousel from "@/components/home/HomeSlider";
import ProductCard from "@/components/products/ProductCard";
import ProductList from "@/components/products/ProductList";
import { Box, Grid, GridItem, Heading, Show } from "@chakra-ui/react";
import { Inter } from "next/font/google";
import Head from "next/head";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <Head>
        <title>Grocery Bazar</title>
        <meta name="description" content="An online shop." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Grid
          templateAreas={{
            base: `"carousel" "main"`,
            lg: `"aside carousel" "aside main"`,
          }}
          templateColumns={{ base: "100%", lg: "1fr  75%" }}
        >
          <Show breakpoint="(min-width: 993px)">
            <Box overflowY="auto" height="100vh" position="sticky" top={0}>
              <GridItem area="aside">
                <Sidebar />
              </GridItem>
            </Box>
          </Show>
          <Box bg={"mainPageBG"} overflowY="scroll" height="100vh">
            <GridItem area="carousel" marginTop={5} alignItems="center ">
              <Carousel />
            </GridItem>
            <GridItem area="main" margin={5}>
              <Heading as="h6" fontSize="24px" fontWeight="700" my="10px">
                Popular Product
              </Heading>
              <ProductList />
            </GridItem>
          </Box>
        </Grid>
      </main>
    </>
  );
}
