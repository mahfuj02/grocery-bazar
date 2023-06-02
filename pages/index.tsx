
import Sidebar from "@/components/Sidebar";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Grocery Bazar</title>
        <meta name="description" content="An online shop." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid
        templateAreas={{ base: `"main"`, lg: `"aside main"` }}
        templateColumns={{ base: "1fr", lg: "250px 1fr" }}
      >
        <Show breakpoint="(min-width: 993px)">
          <GridItem area="aside" >
            <Sidebar />
          </GridItem>
        </Show>

        <GridItem area="main" bg={"red"}>
          hello from main area
        </GridItem>
      </Grid>
    </>
  );
}
