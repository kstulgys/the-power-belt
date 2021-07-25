import {
  Stack,
  Box,
  Text,
  Input,
  Button,
  Select,
  Image,
  useDisclosure,
  Icon,
  Link,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Center,
} from "@chakra-ui/react";
import React from "react";
import { FiShoppingCart, FiGlobe, FiFacebook, FiMail } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import NextLink from "next/link";
import { Footer } from "@components/footer";

export function Layout({ children }) {
  return (
    <>
      <Box>
        <Stack spacing={0} width="full">
          <TopBar />
          <Navigation />
        </Stack>
        <Center flexDir="column">{children}</Center>
        <TrustBadges />
        <Footer />
      </Box>
    </>
  );
}

function Container({ children, maxW = "7xl" }) {
  return (
    <Stack maxW={maxW} px="4" mx="auto" width="full">
      {children}
    </Stack>
  );
}

function TrustBadges() {
  return (
    <Stack py={[8, 16]} spacing={[4, 32]} isInline alignItems="center" justifyContent={["space-between", "center"]} px={4}>
      <Box>
        <Image src="/trust-badges/Fee_Shipping_Badge.svg" objectFit="cover" height={[16, 32]} />
      </Box>
      <Box>
        <Image src="/trust-badges/Money-back_Guarantee_Badge.svg" objectFit="cover" height={[16, 32]} />
      </Box>
      <Box>
        <Image src="/trust-badges/Secure_Payment_Badge.svg" objectFit="cover" height={[16, 32]} />
      </Box>
      <Box>
        <Image src="/trust-badges/Premium_Quality_Badge.svg" objectFit="cover" height={[16, 32]} />
      </Box>
    </Stack>
  );
}

function TopBar() {
  return (
    <Stack height={10} bg="gray.900" isInline alignItems="center" spacing={0}>
      <Container>
        <Stack isInline alignItems="center" fontSize={["sm"]}>
          <Stack display={["none", "flex"]} flex={1} isInline alignItems="center" color="white">
            <Box>
              <Icon as={FaFacebook} fontSize="lg" strokeWidth="1.5" />
            </Box>
            <Box>
              <Text m={0}>Follow-us!</Text>
            </Box>
          </Stack>
          <Stack flex={1}>
            <Text textAlign="center" m={0} color="white">
              FREE 7-14 days international shipping
            </Text>
          </Stack>
          <Stack display={["none", "flex"]} flex={1} isInline justifyContent="flex-end" color="white" alignItems="center">
            <Text m={0}>Get in touch</Text>
            <Box>
              <Icon as={FiMail} fontSize="md" strokeWidth="1.5" />
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
}

function Navigation() {
  const scRef = React.useRef<HTMLDivElement>(null);
  const selectRef = React.useRef<HTMLSelectElement>(null);
  const [_, rerender] = React.useReducer((state, _) => state + 1, 0);
  // const [currentCurrency, setCurrentCurrency] = React.useState("usd");
  const ref = React.useRef(null);
  const [isSticky, setIsSticky] = React.useState(false);

  const stickyProps = {
    position: "fixed",
    top: 0,
    width: "full",
    bg: "white",
    boxShadow: "base",
  };

  React.useLayoutEffect(() => {
    if (!window) return;
    const handleStickyNav = () => {
      const offset = window.scrollY;
      setIsSticky(offset > 40);
    };
    document.addEventListener("scroll", handleStickyNav);
    return () => {
      document.removeEventListener("scroll", handleStickyNav);
    };
  });

  const headerProps = isSticky ? stickyProps : {};

  return (
    <>
      <Stack ref={ref} transition="all 0.2s ease-in-out" zIndex={10} spacing={0} bg={["white", "transparent"]} boxShadow={["base", "none"]} {...headerProps}>
        <Container maxW="7xl">
          <Stack isInline height={[16, 20]} alignItems="center" spacing={0}>
            <Stack order={[2, 1]} flex={1} isInline justifyContent={["center", "flex-start"]}>
              <NextLink href="/" passHref>
                <Link _hover={{}}>
                  <Stack isInline spacing={[0, 3]} alignItems="center">
                    <Box>
                      <Image src="/logo/logo.svg" width={[12, 12]} />
                    </Box>
                    <Box display={["none", "block"]}>
                      <Text fontSize="3xl" m={0} fontWeight="bold">
                        ThePowerBelt
                      </Text>
                    </Box>
                  </Stack>
                </Link>
              </NextLink>
            </Stack>
            <Stack order={[1]} flex={1} display={["flex", "none"]}>
              <MenuDrawer />
            </Stack>
            <Stack display={["none", "flex"]} order={[0, 2]} flex={1} isInline justifyContent="center" spacing={6}>
              <Box>
                <NextLink href="/" passHref>
                  <Link>Home</Link>
                </NextLink>
              </Box>
              <Box>
                <NextLink href="/about" passHref>
                  <Link>About Us</Link>
                </NextLink>
              </Box>
              <Box>
                <NextLink href="/faq" passHref>
                  <Link>FAQ</Link>
                </NextLink>
              </Box>
              <Box>
                <NextLink href="/contact" passHref>
                  <Link>Contact</Link>
                </NextLink>
              </Box>
            </Stack>
            <Stack order={[3]} spacing={[0, 5]} flex={1} isInline justifyContent="flex-end" alignItems="center">
              <Box order={[2]} pl={[0, 5]}>
                <Button variant="unstyled" className="snipcart-checkout" size="sm">
                  <Icon as={FiShoppingCart} fontSize={["xl", "2xl"]} />
                </Button>
              </Box>
              {/* <Box>
                <Button variant="unstyled" className="snipcart-items-count">
                  <Icon as={FiShoppingCart} fontSize="2xl" />
                </Button>
              </Box> */}

              <Box order={[1]}>
                <Select
                  // pr={0}\
                  mr={["-3"]}
                  ref={selectRef}
                  // value={currentCurrency}
                  id="currencies"
                  // onChange={(e) => setCurrentCurrency(e.target.value)}
                  width={["80px", "85px"]}
                  // size="sm"
                  // borderColor="gray.900"
                  border="none"
                  rounded="md"
                  fontWeight="semibold"
                  // _hover={{
                  //   boxShadow: "#60A5FA 0px 0px 0px 4px",
                  //   cursor: "pointer",
                  // }}
                  // _active={{
                  //   boxShadow: "#60A5FA 0px 0px 0px 4px",
                  // }}
                  // _visited={{
                  //   boxShadow: "#60A5FA 0px 0px 0px 4px",
                  // }}
                >
                  <option value="usd">USD</option>
                  <option value="eur">EUR</option>
                  <option value="aud">AUD</option>
                </Select>
              </Box>
            </Stack>
          </Stack>
        </Container>
      </Stack>
      <Box pt={isSticky ? "4rem" : 0} />
    </>
  );
}

function MenuDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Box>
        <Button variant="unstyled" size="xs" display={["block", "none"]} ref={btnRef} onClick={onOpen}>
          |||
        </Button>
      </Box>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
