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
        <title>The Power Belt</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.css" />
        <script async src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js" />
        <script
          id="mcjs"
          dangerouslySetInnerHTML={{
            __html: `!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/deedd1b1b98a7879df886f5b7/3d5bdaf776785a0fd3d060bac.js");`,
          }}
        />
      </Head>
      <Box fontFamily="Poppins" minH="100vh" bg="gray.100">
        <div id="snipcart" data-config-modal-style="side" data-api-key={process.env.NEXT_PUBLIC_ENV_DATA_API_KEY} hidden />
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
