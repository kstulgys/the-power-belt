import React from "react";
import { AppProps } from "next/app";
import { ChakraProvider, Box } from "@chakra-ui/react";
import theme from "@definitions/chakra/theme";
import Head from "next/head";
// import Script from "next/script";
import "@styles/global.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>The Power Belt Shop</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta name="description" content="Best quality, lifetime lasting belts for weight lifters"></meta>
        <meta property="og:url" content="https://thepowerbelt.com" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.css" />
        <script async src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js" />
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
            document.addEventListener('snipcart.ready', function() {
              updateSelectedCurrency()

              const select = document.getElementById('currencies');
                select.addEventListener('change', () => {
                Snipcart.api.session.setCurrency(select.value);
                Snipcart.store.getState();
              });

              Snipcart.store.subscribe(updateSelectedCurrency);

              function updateSelectedCurrency() {
                const state = Snipcart.store.getState();
                const currency = state.cart.currency;
                document.getElementById('currencies').value = currency;
              }
            });`,
          }}
        /> */}
      </Head>
      <Box fontFamily="Poppins" minH="100vh" bg="gray.100">
        <div id="snipcart" data-config-modal-style="side" data-api-key={process.env.NEXT_PUBLIC_ENV_DATA_API_KEY} hidden data-currency="usd" />
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
