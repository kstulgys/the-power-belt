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
        <title>The Power Belt</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        {/* @ts-igone */}
        {/* <script>!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js'); fbq('init', '143103921244055'); fbq('track', 'PageView');</script><noscript> <img height="1" width="1" src="https://www.facebook.com/tr?id=143103921244055&ev=PageView&noscript=1"/></noscript> */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.css" />
        <script async src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js" />
      </Head>
      <Box fontFamily="Poppins" minH="100vh" bg="gray.100">
        <div id="snipcart" data-config-modal-style="side" data-api-key={process.env.NEXT_PUBLIC_ENV_DATA_API_KEY} hidden />
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
