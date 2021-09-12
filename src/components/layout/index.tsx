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
  Badge,
} from "@chakra-ui/react";
import React from "react";
import { FiMail, FiMenu } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Footer } from "@components/footer";
import NextLink from "next/link";
import Head from "next/head";
import { useRouter } from "next/dist/client/router";
import { useCart } from "store";
import { DeleteIcon, CloseIcon } from "@chakra-ui/icons";

declare const window: any;

export function Layout({
  children,
  title = `ThePowerBelt | The #1 lifting belts store for Powerlifters and Weightlifters`,
  description = `This truly is the best powerlifting belt made. This belt is made for the strongest power lifters and it's an example of the fine craftsmanship you will find with ThePowerBelt Products. Made from split cowhide 10/13mm thick leather blends, this belt will last. This belt is easy to get on and off and it's perfect for competition powerlifting and general weightlifting. This belt is made to maximize support. Orthopedically designed this belt has the ability to enhance the overall comfort and stability of the bones and make lifting easy which will eventually help in achieving the best possible results. An ideal choice for olympic lifters, weightlifters, powerlifters, bodybuilders, crossfit trainers and also for functional fitness exercises such as back squats, power cleans, dead lifts, overhead squats, clean and jerks and much more.`,
}) {
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
    <Stack py={[8, 16]} isInline alignItems="center" justifyContent={["space-between"]}>
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
    <Stack height={10} bg="gray.900" isInline alignItems="center" spacing={0} zIndex={2}>
      <Container>
        <Stack isInline alignItems="center" fontSize={["sm"]}>
          {/* <Stack display={["none", "flex"]} flex={1} isInline alignItems="center" color="white">
            <Box>
              <Icon as={FaFacebook} fontSize="lg" strokeWidth="1.5" />
            </Box>
            <Box>
              <Text m={0}>Follow-us!</Text>
            </Box>
          </Stack> */}
          <Stack flex={1}>
            <Text textAlign="center" m={0} color="white">
              FREE shipping worldwide 📦
            </Text>
          </Stack>
          {/* <Stack display={["none", "flex"]} flex={1} isInline justifyContent="flex-end" color="white" alignItems="center">
            <Text m={0}>Get in touch</Text>
            <Box>
              <Icon as={FiMail} fontSize="md" strokeWidth="1.5" />
            </Box>
          </Stack> */}
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
    zIndex: 3,
  };

  React.useEffect(() => {
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
      <Stack ref={ref} transition="all 0.2s ease-in-out" zIndex={10} spacing={0} bg={["white"]} boxShadow={["base", "none"]} {...headerProps}>
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
                        The Power Belt
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
                <CartDrawer />
              </Box>
              <Box order={[1]}>{/* <CurrencySelector /> */}</Box>
            </Stack>
          </Stack>
        </Container>
      </Stack>
      <Box pt={isSticky ? ["4rem", "5rem"] : 0} />
    </>
  );
}

function formatValue(price) {
  const values = price.toString().split("");
  const v = values.reduce((acc, next, idx) => {
    if (idx === values.length - 2) {
      return acc.concat("." + next);
    }
    return acc.concat(next);
  }, "");
  return v;
}

function CartDrawer() {
  const btnRef = React.useRef();
  const snap = useCart();

  return (
    <>
      <Button ref={btnRef} onClick={snap.onOpen} variant="unstyled" size="sm">
        <Icon as={HiOutlineShoppingBag} fontSize={["2xl"]} />
      </Button>

      <Drawer size="sm" isOpen={snap.isOpen} placement="right" onClose={snap.onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Cart</DrawerHeader>

          <DrawerBody p={0} pl={4} pr={4}>
            <Box display={snap.cartCount !== 0 ? "none" : "block"}>
              <Text mt={20} textAlign="center" fontSize="sm">
                Your cart is empty 😕
              </Text>
            </Box>
            {snap.items.map(({ images, id, quantity, name, price, variantId, descriptor, updatedPrice }) => {
              const value = snap.is20discount ? updatedPrice : price;
              return (
                <Stack isInline key={variantId} width="full" spacing={4} py={8}>
                  <Stack minW={32} maxW={32}>
                    <Image src={images[0]} width="full" my="auto" />
                  </Stack>
                  <Stack width="full" spacing={0}>
                    <Stack isInline justifyContent="space-between">
                      <Box>
                        <Text fontWeight="semibold" fontSize={["sm", "md"]} m={0} isTruncated maxW={[40, 56]}>
                          {name}
                        </Text>
                      </Box>
                      <Box>
                        <Button variant="unstyled" size="xs" onClick={() => snap.removeItem(variantId)} _hover={{ bg: "gray.100" }}>
                          <CloseIcon fontSize={10} />
                        </Button>
                      </Box>
                    </Stack>
                    <Stack isInline>
                      <Text m={0} fontSize="xs">
                        {descriptor}
                      </Text>
                    </Stack>

                    <Stack pt={3} isInline alignItems="center" justifyContent="space-between">
                      <Stack isInline alignItems="center">
                        <Button size="sm" onClick={() => snap.decrementItem(variantId)}>
                          -
                        </Button>
                        <Text textAlign="center" minW={4} m={0} fontSize="sm" fontWeight="medium">
                          {quantity}
                        </Text>
                        <Button size="sm" onClick={() => snap.incrementItem(variantId)}>
                          +
                        </Button>
                      </Stack>
                      <Box>
                        <Text m={0} fontSize="sm" fontWeight="semibold">
                          ${formatValue(value)}{" "}
                          {snap.is20discount && (
                            <Badge ml={2} colorScheme="red">
                              -20%
                            </Badge>
                          )}
                        </Text>
                      </Box>
                    </Stack>
                  </Stack>
                </Stack>
              );
            })}
          </DrawerBody>
          <DrawerFooter p={4} flexDirection="column">
            <Box width="full">
              <Button
                isDisabled={!snap.cartCount}
                fontWeight="medium"
                bg="gray.900"
                rounded="sm"
                height={16}
                width="full"
                color="white"
                onClick={snap.handleCheckout}
                _hover={{}}
              >
                Checkout {snap.cartCount !== 0 && `- $${formatValue(snap.totalPrice)}`}
              </Button>
            </Box>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

// function fetchCurrency() {
//   try {
//     const defaultCurrency = window.localStorage.getItem("currency");
//     if (defaultCurrency) {
//       return defaultCurrency;
//     } else {
//       window.localStorage.setItem("currency", "usd");
//       return "usd";
//     }
//   } catch ({ error }) {
//     console.log({ error });
//     return "usd";
//   }
// }

// function postCurrency(currency) {
//   try {
//     window.localStorage.setItem("currency", currency);
//     return currency;
//   } catch ({ message }) {
//     console.log({ message });
//     return "usd";
//   }
// }

// function CurrencySelector() {
//   const snap = useCart();

//   return (
//     <Select value={snap.currency} onChange={(e) => snap.updateCurrency(e.target.value)} width={["85px"]} border="none" rounded="md" fontWeight="semibold">
//       <option value="usd">USD</option>
//       <option value="cad">CAD</option>
//       <option value="aud">AUD</option>
//       <option value="eur">EUR</option>
//     </Select>
//   );
// }

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
