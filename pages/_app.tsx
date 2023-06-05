import type { AppContext, AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import Layout from "@/components/layouts/Layout";

interface MyAppProps extends AppProps {
  pageName?: string;
}

function MyApp({ Component, pageProps, pageName }: MyAppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout pageName={pageName}>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }: AppContext) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  const { pageName } = pageProps as { pageName?: string };

  return { pageProps, pageName };
};

export default MyApp;
