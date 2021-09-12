import React from "react";
import { AppProps } from "next/app";
import { ChakraProvider, Box } from "@chakra-ui/react";
import theme from "@definitions/chakra/theme";
import Head from "next/head";
import "@styles/global.css";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>ThePowerBelt Shop</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta name="description" content="Best quality, lifetime lasting belts for weight lifters"></meta>
        <meta property="og:url" content="https://thepowerbelt.com" />
        <meta property="og:type" content="website" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <NextNProgress />
      <Box fontFamily="Poppins" minH="100vh" bg="gray.100">
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
