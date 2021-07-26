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
import { FiMail, FiMenu } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Footer } from "@components/footer";
import NextLink from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
declare const window: any;

export function Layout({ children, title = "", description = "" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>
      <Box>
        <Stack spacing={0} width="full">
          <TopBar />
          <Navigation />
        </Stack>
        <Center flexDir="column">{children}</Center>
        <Container maxW="3xl">
          <TrustBadges />
        </Container>
        <Footer />
      </Box>
    </>
  );
}

function Container({ children, maxW = "7xl" }) {
  return (
    <Stack maxW={maxW} px={4} mx="auto" width="full">
      {children}
    </Stack>
  );
}

function TrustBadges() {
  return (
    <Stack py={[6, 12]} isInline alignItems="center" justifyContent={["space-between"]} px={4}>
      <Box>
        <Image src="/trust-badges/Fee_Shipping_Badge.svg" objectFit="cover" height={[16, 28]} />
      </Box>
      <Box>
        <Image src="/trust-badges/Money-back_Guarantee_Badge.svg" objectFit="cover" height={[16, 28]} />
      </Box>
      <Box>
        <Image src="/trust-badges/Secure_Payment_Badge.svg" objectFit="cover" height={[16, 28]} />
      </Box>
      <Box>
        <Image src="/trust-badges/Premium_Quality_Badge.svg" objectFit="cover" height={[16, 28]} />
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
                  <Link _hover={{}}>Home</Link>
                </NextLink>
              </Box>
              <Box>
                <NextLink href="/about" passHref>
                  <Link _hover={{}}>About Us</Link>
                </NextLink>
              </Box>
              <Box>
                <NextLink href="/faq" passHref>
                  <Link _hover={{}}>FAQ</Link>
                </NextLink>
              </Box>
              <Box>
                <NextLink href="/contact" passHref>
                  <Link _hover={{}}>Contact</Link>
                </NextLink>
              </Box>
            </Stack>
            <Stack order={[3]} spacing={[0, 5]} flex={1} isInline justifyContent="flex-end" alignItems="center">
              <Box order={[2]}>
                <Button variant="unstyled" className="snipcart-checkout" size="sm">
                  <Icon as={HiOutlineShoppingBag} fontSize={["2xl"]} />
                </Button>
              </Box>

              <Box order={[1]}>
                <CurrencySelector />
              </Box>
            </Stack>
          </Stack>
        </Container>
      </Stack>
      <Box pt={isSticky ? ["4rem", "5rem"] : 0} />
    </>
  );
}

function CurrencySelector() {
  const [currentCurrency, setCurrentCurrency] = React.useState(null);
  const [snipcartIsLoaded, setIsLoaded] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const setCurrency = () => {
      if (window?.Snipcart) {
        const state = window.Snipcart.store.getState();
        const currency = state.cart.currency;
        setCurrentCurrency(currency);
      }
    };
    setCurrency();
    const handle = () => {
      console.log("snipcart.ready");
      setCurrency();
      setIsLoaded(true);
    };
    document.addEventListener("snipcart.ready", handle);
    return () => {
      document.removeEventListener("snipcart.ready", handle);
    };
  }, [router.route]);

  const changeCurrency = (currency) => {
    window.Snipcart.api.session.setCurrency(currency);
    setCurrentCurrency(currency);
  };

  if (!currentCurrency) return null;

  return (
    <Select
      value={currentCurrency}
      onChange={(e) => changeCurrency(e.target.value)}
      id="currencies"
      width={["85px"]}
      border="none"
      rounded="md"
      fontWeight="semibold"
    >
      <option value="usd">USD</option>
      <option value="cad">CAD</option>
      <option value="aud">AUD</option>
      <option value="eur">EUR</option>
    </Select>
  );
}

function MenuDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Box>
        <Button variant="unstyled" display={["block", "none"]} ref={btnRef} onClick={onOpen}>
          <Icon as={FiMenu} fontSize="2xl" />
        </Button>
      </Box>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent bg="gray.100">
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody fontSize="lg">
            <Stack spacing={4}>
              <Box>
                <NextLink href="/" passHref>
                  <Link _hover={{}}>Home</Link>
                </NextLink>
              </Box>
              <Box>
                <NextLink href="/about" passHref>
                  <Link _hover={{}}>About Us</Link>
                </NextLink>
              </Box>
              <Box>
                <NextLink href="/faq" passHref>
                  <Link _hover={{}}>FAQ</Link>
                </NextLink>
              </Box>
              <Box>
                <NextLink href="/contact" passHref>
                  <Link _hover={{}}>Contact</Link>
                </NextLink>
              </Box>
            </Stack>
            <Stack pt={6}>
              <Link isExternal href="mailto:team@thepowerbelt.com">
                <Icon as={FiMail} mr={2} />
                team@thepowerbelt.com
              </Link>
            </Stack>
          </DrawerBody>

          <DrawerFooter bg="gray.200" h={16}>
            <Stack isInline width="full" spacing={4}>
              <Link isExternal href='href="mailto:team@thepowerbelt.com"'>
                <Icon as={FiMail} fontSize="2xl" />
              </Link>
              <Link isExternal href="https://www.facebook.com/artunden">
                <Icon as={FaFacebook} fontSize="2xl" />
              </Link>
            </Stack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
