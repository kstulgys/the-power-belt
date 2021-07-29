import React from "react";
import { Stack, Text, Box, Center } from "@chakra-ui/react";
import { FaqContent } from "@components/faq";
import { Layout } from "@components/layout";

export default function Faq() {
  return (
    <Layout>
      <Stack maxW="3xl" width="full" px={4} py={[10, 20]}>
        <Box>
          <Text as="h1" mb={[5, 10]} textAlign="center" fontSize={["3xl", "6xl"]} fontWeight="bold">
            FAQ
          </Text>
        </Box>
        <FaqContent />
      </Stack>
    </Layout>
  );
}
