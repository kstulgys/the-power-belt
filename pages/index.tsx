import React, { useReducer } from "react";
import {
  Spacer,
  Flex,
  Stack,
  Box,
  Grid,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
  Select,
  Image,
  Badge,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useTheme,
  Icon,
  Link,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { products } from "src/utils/products";
// import { Header, Main, Cards, Footer } from "@components";
import { FiShoppingCart, FiGlobe } from "react-icons/fi";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Subscribe } from "@components/subscribe";

declare const window: any;

function Container({ children, maxW = "7xl" }) {
  return (
    <Stack maxW={maxW} px="4" mx="auto" width="full">
      {children}
    </Stack>
  );
}

// const CircleIcon = (props) => (
//   <Icon viewBox="0 0 200 200" {...props}>
//     <path fill="currentColor" d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0" />
//   </Icon>
// );

const Home: React.FC = () => {
  return (
    <Stack minH="100vh" height="full" width="full" pt={32} pb={2} spacing={0} px={4}>
      <Stack flex={1}>
        <Text textAlign="center" fontSize="3xl" fontWeight="semibold">
          Great content is coming soon
        </Text>
        <Text textAlign="center">
          Do not miss the launch, follow us on 👉{" "}
          <Link color="blue.600" fontWeight="medium" isExternal href="https://www.facebook.com/artunden">
            facebook
          </Link>
        </Text>
      </Stack>
      <Stack>
        <Text textAlign="center">
          Made with ❤️ by{" "}
          <Link fontWeight="semibold" isExternal href="mailto:team@thepowerbelt.com?subject=Hi there 👋">
            thepowerbelt
          </Link>{" "}
          team
        </Text>
      </Stack>
    </Stack>
  );
  const orderSectionRef = React.useRef(null);

  const onClick = () => {
    orderSectionRef?.current?.scrollIntoView({
      inline: "center",
      behavior: "smooth",
    });
  };

  // React.useEffect(() => {
  //     if (typeof window !== "undefined") {
  //         window.onbeforeunload = () => {
  //             console.log("unloading");
  //             // window.alert("unloading");
  //         };
  //     }
  // });
  // s 90cm
  // m 100cm
  // L 110cm
  // xl 120cm
  // xxl 125cm
  // xxxl 130cm

  return (
    <>
      <TopBar />
      <Navigation />
      {/* <Subscribe /> */}
      <Heading onClick={onClick} />
      <PitchSection />
      <TrustBadgesv2 />
      <OrderProduct orderSectionRef={orderSectionRef} />
      {/* <Container>
        <Stack isInline py={20} spacing={20}>
          {products.map((props: any) => {
            return <ProductCard key={props.id} {...props} />;
          })}
        </Stack>
      </Container> */}
      {/* <Footer /> */}
    </>
  );
};

function TopBar() {
  return (
    <Stack height={10} bg="gray.900" isInline alignItems="center" spacing={0}>
      <Container>
        <Stack isInline justifyContent="center">
          <Text m={0} color="white">
            FREE 5-9 days international shipping
          </Text>
        </Stack>
      </Container>
    </Stack>
  );
}

function OrderProduct({ orderSectionRef }) {
  return (
    <Stack height="100vh" py={32} bg="gray.100" ref={orderSectionRef}>
      <Container>
        <Stack isInline>
          {/* <Stack flex={1}>
            <Text>Hello</Text>
          </Stack>
          <Stack flex={1}>
            <Text>Hello</Text>
          </Stack> */}
        </Stack>
      </Container>
    </Stack>
  );
}

function Heading({ onClick }) {
  return (
    <Stack height={["full", "calc(60vh - 5rem)"]} color="gray.900" flex={0.6} spacing={0} width="full">
      <Stack height="full" isInline alignItems="flex-end">
        <Container maxW="8xl">
          <Stack pt={[4, 0]} direction={["column", "row"]} width="full" alignItems="center" justifyContent="center">
            <Stack flex={0.5} order={[2, 1]} width="full">
              <Text pb={16} fontSize={["3xl", "7xl"]} fontWeight="bold" lineHeight="none" m={0}>
                <Box color="blue.400">#1 Pro Grade </Box>Weight Lifting Belt
              </Text>
              <Stack>
                <Stack isInline justifyContent="space-between" alignItems="center" width={["full", "60%"]} spacing={4}>
                  <Box>
                    <Text color="gray.400" fontSize="3xl" fontWeight="semibold" textDecor="line-through" m={0}>
                      $299
                    </Text>
                  </Box>
                  <Box>
                    <Text color="blue.400" fontSize="5xl" fontWeight="semibold" m={0}>
                      $139
                    </Text>
                  </Box>
                  <Box>
                    <Badge
                      variant="unslyled"
                      fontSize="xl"
                      bg="gray.100"
                      color="gray.900"
                      borderColor="gray.900"
                      borderWidth="1px"
                      rounded="md"
                      px={2}
                      py={1}
                      // p={0}
                    >
                      save 30%
                      {/* save 30% 🙀 */}
                    </Badge>
                  </Box>
                </Stack>
                <Box width={["full", "60%"]}>
                  <Button
                    onClick={onClick}
                    width="full"
                    fontSize="2xl"
                    fontWeight="semibold"
                    color="white"
                    bg="gray.900"
                    height={16}
                    _hover={{
                      bg: "gray.900",
                      boxShadow: "#60A5FA 0px 0px 0px 4px",
                    }}
                  >
                    ORDER NOW
                  </Button>
                </Box>
              </Stack>
            </Stack>
            <Stack order={[1, 2]} isInline flex={0.5} alignItems="center" justifyContent="flex-end">
              <Box>
                <Image width="xl" src="/images/belts/sbd-aqua.png" objectFit="cover" />
              </Box>
            </Stack>
          </Stack>
        </Container>
      </Stack>
    </Stack>
  );
}
{
  /* <img alt="Trust Badges" src="https://trustlock.co/wp-content/uploads/2019/01/credit-card-logos-free-png-image-trans.png" width="294" height="60" /> */
}

function TrustBadgesv2() {
  return (
    <Container maxW="8xl">
      <Stack spacing={[4, 32]} isInline alignItems="center" justifyContent="center">
        <Box>
          <Image src="/trust-badges/Fee_Shipping_Badge.svg" objectFit="cover" height={[16, 40]} />
        </Box>
        <Box>
          <Image src="/trust-badges/Money-back_Guarantee_Badge.svg" objectFit="cover" height={[16, 40]} />
        </Box>
        <Box>
          <Image src="/trust-badges/Secure_Payment_Badge.svg" objectFit="cover" height={[16, 40]} />
        </Box>
        <Box>
          <Image src="/trust-badges/Premium_Quality_Badge.svg" objectFit="cover" height={[16, 40]} />
        </Box>
      </Stack>
    </Container>
  );
}

function TrustBadges() {
  return (
    <Container maxW="8xl">
      <Stack spacing={32} isInline alignItems="center">
        <Box>
          {/* <Image src="/trust-badges/Fee_Shipping_Badge.svg" objectFit="cover" height={20} /> */}
          <Image
            name="trustseal"
            alt="Trust Badges"
            src="https://trustlock.co/wp-content/uploads/2019/01/free-shipping-icon-graphic-2.png"
            objectFit="cover"
            // height={9}
          />
        </Box>
        <Box>
          <Image
            name="trustseal"
            alt="Trust Badges"
            src="https://trustlock.co/wp-content/uploads/2019/01/30-day-money-back-guarantee-badge-4.png"
            objectFit="cover"
            // height={9}
          />
          {/* <Image src="/trust-badges/Money-back_Guarantee_Badge.svg"/> */}
        </Box>
        <Box>
          <Image
            name="trustseal"
            alt="Trust Badges"
            src="https://trustlock.co/wp-content/uploads/2019/01/ssl-secure-trust-badge-free.png"
            objectFit="cover"
            // height={9}
          />
          {/* <Image src="/trust-badges/Secure_Payment_Badge.svg" objectFit="cover" height={20} /> */}
        </Box>
        <Box>
          <Image
            name="trustseal"
            alt="Trust Badges"
            src="https://trustlock.co/wp-content/uploads/2019/01/satisisfaction-guaranteed-badge-icon.png"
            objectFit="cover"
            // height={9}
          />
          {/* <Image src="/trust-badges/Premium_Quality_Badge.svg" objectFit="cover" height={20} /> */}
        </Box>
      </Stack>
    </Container>
  );
}

function PitchSection() {
  return (
    <Container maxW="8xl">
      <Stack height={["full", "40vh"]} isInline py={[10, 24]}>
        <Stack isInline>
          <Stack isInline flex={1}>
            <Text lineHeight="taller" as="span" m={0} fontSize={["md", "2xl"]} fontWeight={["normal"]}>
              We are group of passionate weight lifters, powerlifters and software engineers and we are on the mission to provide you the best software and
              equiptment to achieve your health and strenght goals. We are working with #1 sports equptment manufacturers to provide you the best quality
              products and customer satisfaction
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </Container>
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
  };

  React.useLayoutEffect(() => {
    if (!window) return;
    function handleStickyNav() {
      const offset = window.scrollY;
      setIsSticky(offset > 40);
    }

    document.addEventListener("scroll", handleStickyNav);
    return () => {
      document.removeEventListener("scroll", handleStickyNav);
    };
  });

  const headerProps = isSticky ? stickyProps : {};

  return (
    <>
      <Stack ref={ref} transition="all 0.2s ease-in-out" zIndex={10} spacing={0} {...headerProps}>
        <Container maxW="8xl">
          <Stack isInline height={[16, 20]} alignItems="center" spacing={0}>
            <Stack order={[2, 1]} flex={1} isInline justifyContent={["center", "flex-start"]}>
              {/* <Text m={0} fontWeight="bold" fontSize={["lg", "2xl"]}>
                #TPB
              </Text> */}
            </Stack>
            <Stack order={[1]} flex={1} display={["flex", "none"]}>
              <MenuDrawer />
            </Stack>
            <Stack display={["none", "flex"]} order={[0, 2]} flex={1} isInline justifyContent="center" spacing={6}>
              <Box>
                <Link>FAQ</Link>
              </Box>
              <Box>
                <Link>Order Tracking</Link>
              </Box>
              <Box>
                <Link>Contact</Link>
              </Box>
            </Stack>
            <Stack order={[3]} spacing={5} flex={1} isInline justifyContent="flex-end" alignItems="center">
              <Box order={[2]} pl={[3, 5]}>
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
                  // px={0}
                  ref={selectRef}
                  // value={currentCurrency}
                  id="currencies"
                  // onChange={(e) => setCurrentCurrency(e.target.value)}
                  width={["75px", 24]}
                  size="sm"
                  borderColor="gray.900"
                  rounded="md"
                  fontWeight="semibold"
                  _hover={{
                    boxShadow: "#60A5FA 0px 0px 0px 4px",
                    cursor: "pointer",
                  }}
                  _active={{
                    boxShadow: "#60A5FA 0px 0px 0px 4px",
                  }}
                  _visited={{
                    boxShadow: "#60A5FA 0px 0px 0px 4px",
                  }}
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

function SelectCurrencyMobile() {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Actions
      </MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Attend a Workshop</MenuItem>
      </MenuList>
    </Menu>
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

// const [data, setData] = React.useState({
//   email: "",
//   gender: "",
//   age: "",
//   exercise: "",
//   Units: "",
//   OneRepMax: "",
// });

// const handleSubmit = (e) => {
//   e.preventDefault();
//   console.log("Sending");

//   fetch("/api/contact", {
//     method: "POST",
//     headers: {
//       Accept: "application/json, text/plain, */*",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   }).then((res) => {
//     console.log("Response received");
//     if (res.status === 200) {
//       console.log("Response succeeded!");
//       // setSubmitted(true)
//       // setName('')
//       // setEmail('')
//       // setBody('')
//     }
//   });
// };

function Footer() {
  return (
    <Container>
      <Stack py={40}>
        <Text>Footer</Text>
      </Stack>
      <Stack isInline justifyContent="center">
        <Text fontSize="sm">
          Created with 💙 by{" "}
          <Link href="https://linkedin.com" isExternal>
            kastproductions
          </Link>
        </Text>
      </Stack>
    </Container>
  );
}

export default Home;
