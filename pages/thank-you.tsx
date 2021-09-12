import React from "react";
import { Stack, Text, Box, Center } from "@chakra-ui/react";
import { FaqContent } from "@components/faq";
import { Layout } from "@components/layout";
import { useRouter } from "next/dist/client/router";

// http://localhost:3000/?success=true&session_id=cs_test_b1nOIY2Bo9sArUecX1z2ctWxg5ATCR6ORVxIHNgqaO8trDCLEUkbxZD4EO

export default function ThankYouPage() {
  const router = useRouter();

  //   React.useEffect(() => {
  //     console.log(router.query.success);
  //     if (router.query.success !== "true") {
  //       router.push("/");
  //     }
  //   }, [router.query]);

  return (
    <Layout>
      <Stack maxW="3xl" width="full" px={4} py={[10, 20]}>
        <Box>
          <Text as="h1" mb={[5, 10]} textAlign="center" fontSize={["3xl", "6xl"]} fontWeight="bold">
            Thank You!
          </Text>
        </Box>
        <Stack>
          <Text m={0}>We take two things very seriously over here at ThePowerBelt: </Text>
          <Text>Gym supplies (obviously) and: </Text>
          <Text pb={4}>Our customers.</Text>
          <Text pb={4}>
            Our team is carefully reviewing your order, boxing it up, and getting it ready to send your way. You'll hear from us again with order tracking
            number once it's ready to go.
          </Text>
          <Text>We are so glad you chose ThePowerBelt today. Welcome to the family!</Text>
          <Text>With ❤️ ThePowerBelt team </Text>
        </Stack>
      </Stack>
    </Layout>
  );
}
