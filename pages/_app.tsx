import React from "react";
import { AppProps } from "next/app";
import { ChakraProvider, Box } from "@chakra-ui/react";
import theme from "@definitions/chakra/theme";
import Head from "next/head";
import "@styles/global.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Heavyla</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.css" />
        <script async src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js" />
      </Head>
      <Box fontFamily="Poppins" minH="100vh">
        <div id="snipcart" data-config-modal-style="side" data-api-key={process.env.NEXT_PUBLIC_ENV_DATA_API_KEY} hidden />
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
