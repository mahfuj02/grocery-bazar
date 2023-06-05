import { Box, Grid, Show, GridItem, Heading } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import Sidebar from "../Sidebar";
import Carousel from "../home/HomeSlider";
import ProductList from "../products/ProductList";

interface Props {
  children?: ReactNode;
}

const BaseLayout = ({ children }: Props) => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
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
        <GridItem area="main" margin={{ base: 0 }}>
          {children}
        </GridItem>
      </Box>
    </Grid>
  );
};

export default BaseLayout;
