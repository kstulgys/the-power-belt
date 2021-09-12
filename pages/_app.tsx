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
        <title>ThePowerBelt | The #1 lifting belts store for Powerlifters and Weightlifters</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta
          name="description"
          content="This truly is the best powerlifting belt made. This belt is made for the strongest power lifters and it's an example of the fine craftsmanship you will find with ThePowerBelt Products. Made from split cowhide 10/13mm thick leather blends, this belt will last. This belt is easy to get on and off and it's perfect for competition powerlifting and general weightlifting. This belt is made to maximize support. Orthopedically designed this belt has the ability to enhance the overall comfort and stability of the bones and make lifting easy which will eventually help in achieving the best possible results. An ideal choice for olympic lifters, weightlifters, powerlifters, bodybuilders, crossfit trainers and also for functional fitness exercises such as back squats, power cleans, dead lifts, overhead squats, clean and jerks and much more."
        ></meta>
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
