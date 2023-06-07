import type { AppContext, AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import theme from "../theme";
import Layout from "@/components/layouts/Layout";

const queryClient = new QueryClient();

interface MyAppProps extends AppProps {
  pageName?: string;
}

function MyApp({ Component, pageProps, pageName }: MyAppProps) {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Layout pageName={pageName}>
          <Component {...pageProps} />
        </Layout>
        <ReactQueryDevtools /> {/* Optional: Adds React Query Devtools */}
      </QueryClientProvider>
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
