import React from "react";
import { Stack, Text, Box, Center } from "@chakra-ui/react";
import { FaqContent } from "@components/faq";
import { Layout } from "@components/layout";

export default function Faq() {
  return (
    <Layout>
      <Stack maxW="3xl" width="full" px={4} pt={20}>
        <Box>
          <Text mb={10} textAlign="center" fontSize="6xl" fontWeight="bold">
            FAQ
          </Text>
        </Box>
        <FaqContent />
      </Stack>
    </Layout>
  );
}
