import React from "react";
import { Stack, Text, Box, Center } from "@chakra-ui/react";
import { Layout } from "@components/layout";

export default function AboutPage() {
  return (
    <Layout>
      <Stack maxW="3xl" width="full" px={4} py={[10, 20]}>
        <Box>
          <Text as="h1" mb={[5, 10]} textAlign="center" fontSize={["3xl", "6xl"]} fontWeight="bold">
            About us
          </Text>
        </Box>
        <Stack fontSize="lg">
          <Paragraph>
            <Text>
              Hello and welcome to{" "}
              <Box as="span" fontWeight="semibold">
                The Power Belt
              </Box>{" "}
              , the place to find the best weight lifting belt for weight lifters. We thoroughly check the quality of our goods, working only with reliable
              suppliers so that you only receive the best quality product
            </Text>
          </Paragraph>
          <Paragraph>
            <Text>
              We at{" "}
              <Box as="span" fontWeight="semibold">
                The Power Belt
              </Box>{" "}
              believe in high quality and exceptional customer service. But most importantly, we believe shopping is a right, not a luxury, so we strive to
              deliver the best products at the most affordable prices, and ship them to you regardless of where you are located
            </Text>
          </Paragraph>
        </Stack>
      </Stack>
    </Layout>
  );
}

function Paragraph({ children }) {
  return <Box>{children}</Box>;
}
