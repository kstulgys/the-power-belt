import React from "react";
import { Box, Link, Center, Text, Stack, Image, Icon, Input, Button, Checkbox } from "@chakra-ui/react";
import { FaFacebook } from "react-icons/fa";
import NextLink from "next/link";
import axios from "axios";

function Container({ children }) {
  return (
    <Center flexDir="column" maxW="7xl" width="full">
      {children}
    </Center>
  );
}

export function Footer() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [isChecked, setIsChecked] = React.useState(true);

  return (
    <Center flexDir="column" width="full" bg="gray.200">
      <Container>
        <Stack px={4} height={[20]} width="full" direction={["column", "row"]} justifyContent={["center", "space-between"]} alignItems="center">
          {/* <Box>
            <Text m={0} textAlign={["center", "left"]} fontWeight="semibold">
              Follow-us on social media
            </Text>
          </Box> */}
          <Box>
            <Link isExternal href="https://www.facebook.com/artunden">
              <Icon as={FaFacebook} fontSize="2xl" />
            </Link>
          </Box>
        </Stack>
      </Container>
      <Center py={8} borderWidth="1px" borderColor="gray.100" width="full">
        <Container>
          <Stack px={4} direction={["column", "row"]} width="full" spacing={[6, 12]}>
            <Stack width="full" spacing={4} flex={0.4}>
              <Stack isInline alignItems="center" spacing={3}>
                <Box>
                  <Image src="/logo/logo.svg" width={12} />
                </Box>
                <Box>
                  <Text fontSize="2xl" m={0} fontWeight="bold">
                    The Power Belt
                  </Text>
                </Box>
              </Stack>
              <Stack spacing={0}>
                <Box>
                  <Text m={0}>Empowering Weight lifters by providing best quality, lifetime lasting weight lifting belts</Text>
                </Box>
              </Stack>
              {/* <Box>
                <Link isExternal href="https://www.facebook.com/artunden">
                  team@thepowerbelt.com
                </Link>
              </Box> */}
            </Stack>
            <Stack flex={0.2}>
              <Box>
                <Text mb={1} fontWeight="semibold">
                  Quick links
                </Text>
              </Box>
              <Stack spacing={1}>
                {/* <Box>
                  <NextLink href="/policies/privacy">
                    <Link _hover={{}}>Privacy Policy</Link>
                  </NextLink>
                </Box> */}
                <Box>
                  <NextLink href="/faq">
                    <Link _hover={{}}>FAQ</Link>
                  </NextLink>
                </Box>
                <Box>
                  <NextLink href="/policies/terms-of-service">
                    <Link _hover={{}}>Terms Of Service</Link>
                  </NextLink>
                </Box>
                {/* <Box>
                  <NextLink href="/policies/refund">
                    <Link _hover={{}}>Refund Policy</Link>
                  </NextLink>
                </Box> */}
                <Box>
                  <NextLink href="/policies/shipping">
                    <Link _hover={{}}>Shipping Policy</Link>
                  </NextLink>
                </Box>
              </Stack>
            </Stack>

            <Stack flex={0.4}>
              <Text m={0} fontWeight="semibold">
                Subscribe to our newsletter{" "}
              </Text>
              <Text m={0} fontSize="sm">
                Receive discount codes and stay on top! We are expanding to provide more high quality services and products
              </Text>
              <Stack
                as="form"
                spacing={3}
                onSubmit={(e) => {
                  e.preventDefault();
                  setIsLoading(true);
                  try {
                    axios.post("/api/sheets", { email, isChecked });
                  } catch (err) {
                    console.log(err);
                  } finally {
                    setEmail("");
                    setIsLoading(false);
                  }
                }}
              >
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  rounded="none"
                  fontSize="md"
                  type="email"
                  placeholder="john@email.com"
                  bg="gray.300"
                  size="lg"
                  _placeholder={{ color: "gray.500" }}
                  _hover={{
                    boxShadow: "outline",
                  }}
                />
                <Checkbox borderWidth="1" borderColor="gray.400" size="sm" isChecked={isChecked} onChange={() => setIsChecked((prev) => !prev)}>
                  Keep me up to date on news and offers
                </Checkbox>
                <Button
                  rounded="none"
                  bg="blue.500"
                  color="white"
                  fontSize="md"
                  size="lg"
                  _hover={{
                    boxShadow: "outline",
                  }}
                  isLoading={isLoading}
                  type="submit"
                >
                  Subscribe
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Center>

      <Container>
        <Stack px={4} width="full" height={20} direction={["column", "row"]} justifyContent={["center", "space-between"]} alignItems="center">
          <Box>
            <Text m={0} fontSize="xs">
              Copyright © 2021 ThePowerBelt
            </Text>
          </Box>
          <Box>
            <Box>
              <Image width={64} objectFit="cover" src="https://trustlock.co/wp-content/uploads/2019/01/old-credit-card-logo-icons-free-download.png" />
            </Box>
          </Box>
        </Stack>
      </Container>
    </Center>
  );
}
