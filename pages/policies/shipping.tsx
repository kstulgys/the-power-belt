import React from "react";
import { Text, Stack, Box } from "@chakra-ui/react";
import { Layout } from "@components/layout";

export default function ShippingPolicy() {
  return (
    <Layout>
      <Stack mx="auto" maxW="3xl" width="full" px={4} pt={10}>
        <Box>
          <Text as="h1" mb={[5, 10]} textAlign="center" fontSize={["3xl", "6xl"]} fontWeight="bold">
            Shipping Policy
          </Text>
        </Box>
        <Box>
          <Text>
            We work with suppliers around the world to source high quality products. Our suppliers typically ship items one to five days of receiving an order.
            From that point, it takes 7 - 14 days for items to arrive. As soon as your product ships, you'll receive a tracking number that will let you keep
            tabs of where your order is at all times
          </Text>
        </Box>
      </Stack>
    </Layout>
  );
}
