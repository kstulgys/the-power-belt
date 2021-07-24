import React, { useReducer } from "react";
import {
  Stack,
  Box,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
  Badge,
  Link,
  Wrap,
  WrapItem,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Radio,
  ButtonProps,
} from "@chakra-ui/react";
import { products } from "src/utils/products";
import { Footer } from "@components/footer";

import { ChevronDownIcon } from "@chakra-ui/icons";
import { Subscribe } from "@components/subscribe";
import { Layout } from "@components/layout";
import NextImage from "next/image";
import { motion } from "framer-motion";
import { FaqContent } from "@components/faq";
declare const window: any;

const beltColors = [
  { color: "white", name: "white" },
  { name: "lightGrey", color: "#BBC2D1" },
  { name: "grey", color: "#7E858E" },
  { name: "sand", color: "#C5C1AA" },
  { name: "buckskin", color: "#9E815F" },
  { name: "rust", color: "#8B4932" },
  { name: "brown", color: "#3A2D2D" },
  { name: "forestGreen", color: "#2A4147" },
  { name: "loden", color: "#657743" },
  { name: "mint", color: "#C0EECD" },
  { name: "lineGreen", color: "#E2ED9F" },
  { name: "yellow", color: "#ECDE7F" },
  { name: "peach", color: "#EDC2A3" },
  { name: "orange", color: "#E8AD6B" },
  { name: "pink", color: "#E9C0CE" },
  { name: "lavender", color: "#B3ACE7" },
  { name: "aqua", color: "#9ADCF6" },
  { name: "turquoise", color: "#5292D7" },
  { name: "royalBlue", color: "#0A32AE" },
  { name: "navyBlue", color: "#111A37" },
  { name: "purple", color: "#4F286F" },
  { name: "maroon", color: "#532732" },
  { name: "red", color: "#CC514B" },
  { name: "fuchsia", color: "#C850AF" },
  { name: "black", color: "#0E161B" },
];

function Container({ children, maxW = "7xl" }) {
  return (
    <Stack maxW={maxW} px="4" mx="auto" width="full">
      {children}
    </Stack>
  );
}

export default function Home() {
  // return (
  //   <Stack minH="100vh" height="full" width="full" spacing={0}>
  //     <Stack minH="50vh" bg="gray.300" px={4} height="full" justifyContent="center" alignItems="center">
  // <Box fontSize="4xl" fontWeight="bold">
  //   <Text m={0}>Empowering </Text>
  //   <Text m={0}>Weightlifters</Text>
  // </Box>
  //     </Stack>
  //     <Stack flex={1}>
  //       <Text textAlign="center" fontSize="3xl" fontWeight="semibold">
  //         Great content is coming soon
  //       </Text>
  //       <Text textAlign="center">
  //         Do not miss the launch, follow us on 👉{" "}
  //         <Link color="blue.600" fontWeight="medium" isExternal href="https://www.facebook.com/artunden">
  //           facebook
  //         </Link>
  //       </Text>
  //       <Stack isInline>
  //         {Object.entries(beltColors).map(([key, value]) => {
  //           return <Box key={key} boxSize={10} bg={value} />;
  //         })}
  //       </Stack>
  //     </Stack>
  //     <Stack>
  //       <Text textAlign="center">
  //         Made with ❤️ by{" "}
  //         <Link fontWeight="semibold" isExternal href="mailto:team@thepowerbelt.com?subject=Hi there 👋">
  //           thepowerbelt
  //         </Link>{" "}
  //         team
  //       </Text>
  //     </Stack>
  //   </Stack>
  // );
  const productsDivRef = React.useRef(null);

  const onShopNowClick = () => {
    productsDivRef?.current?.scrollIntoView({
      inline: "center",
      behavior: "smooth",
    });
  };

  // s 90cm
  // m 100cm
  // L 110cm
  // xl 120cm
  // xxl 125cm
  // xxxl 130cm

  return (
    <Layout>
      <Stack minH="60vh" flex={1} isInline height="full" justifyContent="center" alignItems="center" pb={12}>
        <Box fontSize={["3xl", "6xl"]} fontWeight="bold">
          <Text textAlign="center" m={0} lineHeight="shorter">
            Empowering
          </Text>
          <Text textAlign="center" m={0}>
            Weight lifters
          </Text>
          <Text textAlign="center" m={0} fontSize="lg" fontWeight="lighter">
            Best quality, lifetime lasting belts for weight lifters
          </Text>
          <Stack isInline justifyContent="center" pt={4}>
            <Button
              rounded="none"
              bg="gray.900"
              height={14}
              color="white"
              px={6}
              _hover={{
                bg: "gray.900",
                boxShadow: "outline",
              }}
              onClick={onShopNowClick}
            >
              Shop Now
            </Button>
          </Stack>
        </Box>
      </Stack>
      <Stack ref={productsDivRef}>
        <Box pb={12}>
          <Text m={0} textAlign="center" fontSize="3xl" fontWeight="bold">
            Belts
          </Text>
        </Box>
      </Stack>
      <Container>
        <ListBelts />
      </Container>
      <TrustBadgesv2 />
    </Layout>
  );
}

const beltsData = [
  { name: "Powerlifting Belt 13mm", images: [] },
  { name: "Deadlift Belt 13mm", images: [] },
  { name: "Deadlift Belt 10mm", images: [] },
];

function ListBelts() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [sizeIndex, setSizeIndex] = React.useState(2);
  const [colorIndex, setColorIndex] = React.useState(24);
  const [stitchedIndex, setStitchedIndex] = React.useState(22);

  const sizes = ["S", "M", "L", "XL", "2xl", "3xl"];
  const product = products[0];
  const selectionName = `${sizes[sizeIndex]}/${beltColors[colorIndex].name}/stitched:${beltColors[stitchedIndex].name}`;

  return (
    <Stack display={["none", "flex"]}>
      <Stack isInline spacing={1} borderBottom="1px solid">
        {beltsData.map(({ name }, index) => {
          const isActive = index === activeIndex;
          return (
            <Button
              rounded="none"
              key={index}
              // onClick={() => setActiveIndex(index)}
              width="full"
              // borderColor="gray.900"
              // borderWidth="2px"
              // variant="outline"
              color={isActive ? "gray.100" : "gray.900"}
              bg={isActive ? "gray.900" : "gray.100"}
              height={14}
              px={6}
              _hover={{
                bg: "gray.900",
                boxShadow: "outline",
                color: "white",
              }}
              _active={{
                bg: "gray.900",
                boxShadow: "outline",
                color: "white",
              }}
            >
              <Stack spacing={0}>
                <Text m={0}>{name}</Text>
                {index !== 0 && (
                  <Text m={0} fontWeight="light" fontSize="sm">
                    (coming soon)
                  </Text>
                )}
              </Stack>
            </Button>
          );
        })}
      </Stack>
      <Stack isInline>
        <Stack width="60%" pt={20}>
          <Stack key={product.images[0]} height="500px" justifyContent="center">
            <Image src={product.images[0]} width="full" />
          </Stack>
        </Stack>
        <Stack spacing={8} width="40%" p={10} pr={0}>
          <Box>
            <Text m={0} fontSize="3xl" fontWeight="bold">
              Powerlifting Belt 13mm
            </Text>
          </Box>
          <SelectionSection title="Selected">
            <Stack height={14} borderColor="gray.900" borderWidth="2px" alignItems="center" justifyContent="center">
              <Text textAlign="center" m={0} fontSize="lg" textTransform="uppercase">
                {selectionName}
              </Text>
            </Stack>
          </SelectionSection>
          <SelectionSection
            title={
              <Stack isInline alignItems="center">
                <Box height={6} pt="3px">
                  <Text m={0}>Size</Text>
                </Box>
                <Box>
                  <Button m={0} textDecor="underline" rounded="none" borderColor="gray.900" height={6} fontSize="sm" variant="unstyled" fontWeight="normal">
                    {/* <Box px={1}>
                    <Icon as={MdStraighten} fontSize="2xl" strokeWidth="0" /> Size chart
                  </Box> */}
                    [chart]
                  </Button>
                </Box>
              </Stack>
            }
          >
            <Wrap>
              {sizes.map((size, index) => {
                return (
                  <WrapItem key={size}>
                    <Button
                      borderColor="gray.900"
                      borderWidth="2px"
                      bg={sizeIndex === index ? "gray.900" : "white"}
                      color={sizeIndex === index ? "white" : "gray.900"}
                      boxSize={12}
                      rounded="full"
                      _hover={{}}
                      onClick={() => setSizeIndex(index)}
                    >
                      {size}
                    </Button>
                  </WrapItem>
                );
              })}
            </Wrap>
          </SelectionSection>
          <SelectionSection title="Colors">
            <Accordion allowToggle>
              <AccordionItem borderColor="gray.900">
                <h2>
                  <AccordionButton>
                    <Stack isInline flex="1" textAlign="left" fontSize="md" alignItems="center">
                      <Text m={0}>Belt</Text>
                      <Box boxSize={6} rounded="full" bg={beltColors[colorIndex].color} borderWidth="1px" borderColor="gray.900" />
                    </Stack>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Wrap>
                    {beltColors.map(({ name, color }, index) => {
                      return (
                        <WrapItem
                          key={color}
                          boxShadow={colorIndex === index ? "outline" : "none"}
                          rounded="full"
                          _hover={{
                            boxShadow: "outline",
                          }}
                          borderColor="gray.200"
                          borderWidth="1px"
                          // p={0.25}
                        >
                          <Button variant="unstyled" boxSize={8} rounded="full" _hover={{}} _active={{}} p={0.5} onClick={() => setColorIndex(index)}>
                            <Box bg={color} width="full" height="full" rounded="full" />
                          </Button>
                        </WrapItem>
                      );
                    })}
                  </Wrap>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem borderColor="gray.900">
                <h2>
                  <AccordionButton>
                    <Stack isInline flex="1" textAlign="left" fontSize="md" alignItems="center">
                      <Text m={0}>Stitched</Text>
                      <Box boxSize={6} rounded="full" bg={beltColors[stitchedIndex].color} borderWidth="1px" borderColor="gray.900" />
                    </Stack>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Wrap>
                    {beltColors.map(({ name, color }, index) => {
                      return (
                        <WrapItem key={color}>
                          <Button
                            variant="outline"
                            borderColor={color}
                            borderWidth="3px"
                            boxSize={10}
                            rounded="full"
                            _hover={{}}
                            _active={{}}
                            p={stitchedIndex === index ? 1 : 0}
                            onClick={() => setStitchedIndex(index)}
                          >
                            <Box bg={color} height="full" width="full" rounded="full" />
                          </Button>
                        </WrapItem>
                      );
                    })}
                  </Wrap>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </SelectionSection>
          <SelectionSection
            title={
              <Stack isInline alignItems="center" justifyContent="space-between">
                <Box>
                  <Text m={0}>Quantity</Text>
                </Box>
                <Box>
                  <Text m={0}>
                    Only{" "}
                    <Box as="span" fontWeight="semibold">
                      37
                    </Box>{" "}
                    left in stock
                  </Text>
                </Box>
              </Stack>
            }
          >
            <Stack>
              <Stack isInline alignItems="center">
                <Radio size="lg" name="1" colorScheme="blue" defaultChecked>
                  <Stack isInline fontSize="md">
                    <Text m={0}>Buy 1:</Text>
                    <Text m={0} fontWeight="semibold">
                      $139.00
                    </Text>
                  </Stack>
                </Radio>
              </Stack>
              <Stack isInline alignItems="center">
                <Radio size="lg" name="2" colorScheme="blue">
                  <Stack isInline fontSize="md">
                    <Box>
                      <Text m={0}>Buy 2:</Text>
                    </Box>
                    <Box>
                      <Text m={0} fontWeight="semibold">
                        $200.00
                      </Text>
                    </Box>
                    <Box>
                      <Text m={0} fontWeight="semibold" textDecor="line-through" color="gray.500">
                        $139.00
                      </Text>
                    </Box>
                    <Box>
                      <Badge mt="-3px" fontSize="sm" color="white" bg="gray.900">
                        save 10%
                      </Badge>
                    </Box>
                  </Stack>
                </Radio>
              </Stack>
              <Stack isInline alignItems="center">
                <Radio size="lg" name="2" colorScheme="blue">
                  <Stack isInline fontSize="md">
                    <Box>
                      <Text m={0}>Buy 5:</Text>
                    </Box>
                    <Box>
                      <Text m={0} fontWeight="semibold">
                        $200.00
                      </Text>
                    </Box>
                    <Box>
                      <Text m={0} fontWeight="semibold" textDecor="line-through" color="gray.500">
                        $139.00
                      </Text>
                    </Box>
                    <Box>
                      <Badge mt="-3px" fontSize="sm" color="white" bg="gray.900">
                        save 15%
                      </Badge>
                    </Box>
                  </Stack>
                </Radio>
              </Stack>
            </Stack>
          </SelectionSection>
          <Stack spacing={4}>
            <AddToCartButton />
            <SafeCheckoutLogos />
            {/* <BuyNowToReceive /> */}
            <FaqContent />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

function BuyNowToReceive() {
  return (
    <Stack alignItems="center" bg="gray.200" p={3}>
      <Text m={0} fontSize="sm">
        Buy now to receive the belt in{" "}
        <Box as="span" fontWeight="semibold">
          7 - 14
        </Box>{" "}
        days
      </Text>
    </Stack>
  );
}

function SafeCheckoutLogos() {
  return (
    <Stack alignItems="center" bg="gray.200" p={3}>
      <Image width={64} objectFit="cover" src="https://trustlock.co/wp-content/uploads/2019/01/old-credit-card-logo-icons-free-download.png" />
      <Text fontSize="sm">Guaranteed safe & secure checkout</Text>
    </Stack>
  );
}

export const MotionBox = motion<ButtonProps>(Button);

function AddToCartButton() {
  const variants = {
    visible: {
      x: [0, -50, 50, -50, 50, 0],
      transition: { delay: 0, repeatDelay: 10, loop: Infinity, duration: 0.5 },
    },
  };

  return (
    <MotionBox
      variants={variants}
      animate="visible"
      bg="gray.900"
      height={14}
      rounded="none"
      color="white"
      width="full"
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      touchAction="manipulation"
      _hover={{
        boxShadow: "outline",
      }}
    >
      Add to Cart
    </MotionBox>
  );
}

function SelectionSection({ title, children }) {
  return (
    <Stack>
      {typeof title === "function" ? (
        title()
      ) : (
        <Box>
          <Text m={0} fontSize="sm">
            {title}
          </Text>
        </Box>
      )}
      {children}
    </Stack>
  );
}

function TrustBadgesv2() {
  return (
    <Container maxW="8xl">
      <Stack py={16} spacing={[4, 32]} isInline alignItems="center" justifyContent="center">
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
    </Container>
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
