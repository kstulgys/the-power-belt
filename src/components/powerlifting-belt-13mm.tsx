import React from "react";
import {
  Stack,
  Box,
  Text,
  Button,
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
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import { products } from "src/utils/products";
import { Footer } from "@components/footer";

import { ChevronDownIcon } from "@chakra-ui/icons";
import { Subscribe } from "@components/subscribe";
import { Layout } from "@components/layout";
import NextImage from "next/image";
import { motion } from "framer-motion";
import { FaqContent } from "@components/faq";
import NextLink from "next/link";
import { useBeltSelection } from "store";
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

const beltSizes = ["S", "M", "L", "XL", "2xl"];
// s 90cm
// m 100cm
// L 110cm
// xl 120cm
// xxl 125cm
// xxxl 130cm

export function PowerliftingBelt13mm() {
  const [sizeIndex, setSizeIndex] = React.useState(2);
  const [colorIndex, setColorIndex] = React.useState(24);
  const [stitchedIndex, setStitchedIndex] = React.useState(22);
  const { snap, setBeltColor, setBeltStitchedColor, setBeltSize } = useBeltSelection();

  const product = products[0];
  const selectionName = `${beltSizes[sizeIndex]}/${beltColors[colorIndex].name}/stitched:${beltColors[stitchedIndex].name}`;

  return (
    <Stack>
      <Stack direction={["column", "row"]} spacing={0} height="full">
        <Stack spacing={0} flex={1} width={["100%", "60%"]} justifyContent="space-between">
          <Stack
            spacing={0}
            key={product.images[0]}
            height={["300px", "500px"]}
            justifyContent="center"
            alignItems="center"
            position={["static", "sticky"]}
            top={0}
            pt={[0, 24]}
          >
            <Image src={product.images[0]} width="full" />
          </Stack>
        </Stack>

        <Stack spacing={8} width={["100%", "40%"]} pl={[0, 12]}>
          <Box textAlign={["center", "left"]}>
            <NextLink href="/product/powerlifting-belt-13mm" passHref>
              <Link m={0} fontSize={["2xl", "3xl"]} fontWeight="bold" _hover={{}}>
                Powerlifting Belt 13mm
              </Link>
            </NextLink>
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
              {beltSizes.map((size, index) => {
                return (
                  <WrapItem key={size}>
                    <Button
                      borderColor="gray.900"
                      borderWidth="2px"
                      bg={snap.beltSize === size ? "gray.900" : "white"}
                      color={snap.beltSize === size ? "white" : "gray.900"}
                      boxSize={12}
                      rounded="full"
                      _hover={{}}
                      onClick={() => setBeltSize(size)}
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
                  <AccordionButton py={3}>
                    <Stack spacing={3} isInline flex="1" textAlign="left" fontSize="md" alignItems="center">
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
                  <AccordionButton py={3}>
                    <Stack spacing={3} isInline flex="1" textAlign="left" fontSize="md" alignItems="center">
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
            <BulkOrder />
          </SelectionSection>
          <Stack spacing={4}>
            <AddToCartButton />
            <SafeCheckoutLogos />
            <Stack display={["flex", "none"]} isInline spacing={0}>
              <ProductDescription />
            </Stack>
            {/* <BuyNowToReceive /> */}
            <FaqContent />
          </Stack>
        </Stack>
      </Stack>
      <Stack display={["none", "flex"]} isInline width={["100%", "60%"]} spacing={0}>
        <ProductDescription />
      </Stack>
    </Stack>
  );
}

function BulkOrder() {
  return (
    <Stack spacing={3}>
      {discounts.map(({ quantity, price, prevPrice, saveText }) => {
        return (
          <Stack key={quantity} isInline alignItems="center">
            <Stack isInline fontSize="md">
              <Box>
                <Text m={0}>Buy {quantity}:</Text>
              </Box>
              <Box>
                <Text m={0} fontWeight="semibold">
                  ${price}
                </Text>
              </Box>
              <Box>
                <Text m={0} fontWeight="semibold" textDecor="line-through" color="gray.500">
                  ${prevPrice}
                </Text>
              </Box>
              <Box>
                <Badge mt="-3px" fontSize="sm" color="white" bg="gray.900" px={2}>
                  {saveText}
                </Badge>
              </Box>
            </Stack>
          </Stack>
        );
      })}
    </Stack>
  );
}

const discounts = [
  { quantity: 1, price: "129.00", prevPrice: "129.00", saveText: null },
  { quantity: 2, price: "232.20", prevPrice: "258.00", saveText: "save 10%" },
  { quantity: 5, price: "477.30", prevPrice: "645.00", saveText: "save 26%" },
];

function ProductDescription() {
  return (
    <Stack spacing={4} pt={[0, 10]}>
      <Box>
        <Text fontWeight="semibold" m={0}>
          You love cycling, but long commutes and rough roads can be a literal pain in the butt.
        </Text>
      </Box>

      <Box>
        <Text m={0}>
          The solution? Our 3D Gel Bike Seat Cushion. Simply stretch it over your bike seat before your next commute or cycling tour. Then enjoy cycling in
          comfort, without the pain of a hard, uncomfortable bike saddle. The 3D Gel Bike Seat Cushion will save your butt.
        </Text>
      </Box>

      <Box>
        <Text m={0}>
          <UnorderedList>
            <ListItem>3D contoured gel seat makes for a comfortable ride </ListItem>
            <ListItem>Stretches over any bike seat </ListItem>
            <ListItem>Use for daily commutes or long cycle tours </ListItem>
            <ListItem>Reflective tab on the back keeps you visible and safe </ListItem>
            <ListItem>Unisex - perfect for male and female cyclists </ListItem>
            <ListItem>Machine washable </ListItem>
          </UnorderedList>
        </Text>
      </Box>
      <Box>
        <Text>Due to popular demand, this product takes between 20 and 30 days to arrive.</Text>
      </Box>
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

const MotionBox = motion<ButtonProps>(Button);
const variants = {
  visible: {
    x: [0, -50, 50, -50, 50, 0],
    transition: { delay: 10, repeatDelay: 10, loop: Infinity, duration: 0.5 },
  },
};

const colors = beltColors.reduce((acc, { name }, index) => {
  if (!acc) return acc.concat(`${name}|`);
  if (beltColors.length - 1 === index) return acc.concat(name);
  return acc.concat(`${name}|`);
}, "");

const sizes = beltSizes.reduce((acc, size, index) => {
  if (!acc) return acc.concat(`${size}|`);
  if (beltSizes.length - 1 === index) return acc.concat(size);
  return acc.concat(`${size}|`);
}, "");

function AddToCartButton() {
  const { snap, setBeltColor, setBeltStitchedColor, setBeltSize } = useBeltSelection();

  return (
    <MotionBox
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      touchAction="manipulation"
      _hover={{
        boxShadow: "outline",
      }}
      variants={variants}
      animate="visible"
      bg="gray.900"
      height={14}
      rounded="none"
      color="white"
      width="full"
      // snipcart stuff
      className="snipcart-add-item"
      data-item-id="1"
      // eslint-disable-next-line prettier/prettier
      data-item-price="{&quot;usd&quot;: 129.00, &quot;cad&quot;: 162.00, &quot;eur&quot;: 109.00, &quot;aud&quot;: 175.00}"
      data-item-url="/product/powerlifting-belt-13mm"
      data-item-description="Lifetime lasting, best quality, 13mm powerlifting belt"
      data-item-image={products[0].images[0]}
      data-item-name="Powerlifting Belt 13mm"
      data-item-custom1-name="Size"
      data-item-custom1-options={sizes}
      data-item-custom1-value={snap.beltSize}
      data-item-custom2-name="Belt color"
      data-item-custom2-options={colors}
      data-item-custom2-value={snap.beltColor}
      data-item-custom3-name="Belt stitched"
      data-item-custom3-options={colors}
      data-item-custom3-value={snap.beltStitchedColor}
    >
      Add to Cart
    </MotionBox>
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
