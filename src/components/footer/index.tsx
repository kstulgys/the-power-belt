import React from "react";
import { Box, Flex, Center, Text, Stack, Image, Divider, Input, Button, Checkbox } from "@chakra-ui/react";
// borderTopColor="gray.100" borderBottomColor="gray.100" borderWidth="1px"
function Container({ children }) {
  return (
    <Center flexDir="column" maxW="7xl" width="full">
      {children}
    </Center>
  );
}

export function Footer() {
  return (
    <Center flexDir="column" width="full" bg="gray.200">
      <Container>
        <Stack px={4} height={20} width="full" justifyContent="center">
          <Text m={0}>Follow us on facebook</Text>
        </Stack>
      </Container>
      <Center py={8} borderWidth="1px" borderColor="gray.100" width="full">
        <Container>
          <Stack px={4} direction={["column", "row"]} width="full" spacing={12}>
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
              <Box>
                <Text m={0}>team@thepowerbelt.com</Text>
              </Box>
            </Stack>
            <Stack flex={0.2}>
              <Box>
                <Text mb={1} fontWeight="semibold">
                  Quick links
                </Text>
              </Box>
              <Box>
                <Text mb={0}>Privacy Policy</Text>
              </Box>
              <Box>
                <Text mb={0}>Terms Of Service</Text>
              </Box>
              <Box>
                <Text mb={0}>Refund Policy</Text>
              </Box>
              <Box>
                <Text mb={0}>Shipping Policy</Text>
              </Box>
            </Stack>
            <Stack flex={0.4}>
              <Text m={0} fontWeight="semibold">
                Subscribe to our newsletter{" "}
              </Text>
              <Text m={0} fontSize="sm">
                Receive discount codes and stay on top! We are expanding to provide more high quality services and products
              </Text>
              <Stack as="form" spacing={3}>
                <Input rounded="none" fontSize="md" type="email" placeholder="john@email.com" bg="gray.300" size="lg" />
                <Checkbox size="sm" defaultIsChecked>
                  Keep me up to date on news and offers
                </Checkbox>
                <Button rounded="none" bg="blue.500" color="white" fontSize="md" size="lg">
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
              Copyright © 2021 The Power Belt
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

// export const Footer: React.FC = () => {
//   const iconStyle: CSSProperties = {
//     fontSize: 22,
//     color: "#fff",
//     marginRight: "0.25rem",
//     marginLeft: "0.25rem",
//   };
//   return (
//     <Center bg="main.100" py={10}>
//       <Flex flexDirection="column">
//         <a href="https://github.com/pankod" target="_blank" data-testid="pankod-logo">
//           <Image data-test="icon" src="/icons/pankod-icon.svg" alt="pankod" width="140" height="28" />
//         </a>
//         <Flex mt={5} data-testid="icons-container">
//           <a href="https://github.com/pankod" target="_blank" style={iconStyle}>
//             <Image data-test="icon" src="/icons/github-icon.svg" alt="github" width="28" height="29" />
//           </a>
//           <a href="https://twitter.com/PankodDev" target="_blank" style={iconStyle}>
//             <Image data-test="icon" src="/icons/twitter-icon.svg" alt="twitter" width="28" height="28" />
//           </a>
//           <a href="https://www.youtube.com/channel/UCBGOeQkv1XW3ptryLWlQbAQ" target="_blank" style={iconStyle}>
//             <Image data-test="icon" src="/icons/youtube-icon.svg" alt="youtube" width="28" height="29" />
//           </a>
//           <a href="https://www.linkedin.com/company/pankod-yazilim-ve-danismanlik/" target="_blank" style={iconStyle}>
//             <Image data-test="icon" src="/icons/linkedin-icon.svg" alt="linkedin" width="28" height="32" />
//           </a>
//         </Flex>
//       </Flex>
//     </Center>
//   );
// };
