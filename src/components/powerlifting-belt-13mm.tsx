/* eslint-disable @typescript-eslint/ban-ts-comment */
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
  Icon,
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
import { beltColors, beltSizes, useBeltSelection } from "store";
import { FaCircle } from "react-icons/fa";

declare const window: any;

// s 90cm
// m 100cm
// L 110cm
// xl 120cm
// xxl 125cm
// xxxl 130cm

export function PowerliftingBelt13mm() {
  const { snap, setBeltColor, setBeltStitchedColor, setBeltSize } = useBeltSelection();

  const product = products[0];
  const selectionName = `${snap.beltSize}/${snap.beltColor.name}/stitched:${snap.beltStitchedColor.name}`;

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
          {/* <SelectionSection title="Selected">
            <Stack height={14} borderColor="gray.900" borderWidth="2px" alignItems="center" justifyContent="center">
              <Text textAlign="center" m={0} fontSize="lg" textTransform="uppercase">
                {selectionName}
              </Text>
            </Stack>
          </SelectionSection> */}
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
                      <Box boxSize={6} rounded="full" bg={snap.beltColor.color} borderWidth="1px" borderColor="gray.900" />
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
                          boxShadow={snap.beltColor.name === name ? "outline" : "none"}
                          rounded="full"
                          _hover={{
                            boxShadow: "outline",
                          }}
                        >
                          {/* @ts-ignore */}
                          <Button boxSize={10} rounded="full" bg={color} tabIndex={0} onClick={() => setBeltColor({ name, color })} _hover={{}} />
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
                      <Box boxSize={6} rounded="full" bg={snap.beltStitchedColor.color} borderWidth="1px" borderColor="gray.900" />
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
                          boxShadow={snap.beltStitchedColor.name === name ? "outline" : "none"}
                          rounded="full"
                          _hover={{
                            boxShadow: "outline",
                          }}
                        >
                          {/* @ts-ignore */}
                          <Button boxSize={10} rounded="full" bg={color} tabIndex={0} onClick={() => setBeltStitchedColor({ name, color })} _hover={{}} />
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
            {/* <BuyNowToReceive /> */}
          </Stack>
        </Stack>
      </Stack>
      <Stack direction={["column", "row"]} spacing={[4, 0]} pt={2}>
        <Stack display={["flex"]} isInline width={["100%", "60%"]} spacing={0}>
          <ProductDescription />
        </Stack>
        <Stack display={["flex"]} isInline width={["100%", "40%"]} spacing={0} pl={[0, 12]}>
          <FaqContent />
        </Stack>
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
    <Stack spacing={4}>
      <Box>
        <Text fontWeight="semibold" m={0}>
          You love weight lifting, but you have stopped progressing or your belt is just not good enough? Not a problem! If you are looking for a the best belt
          to use for the rest of your life, your search is over!
        </Text>
      </Box>

      <Box>
        <Text m={0}>
          This truly is the best powerlifting belt made. This belt is made for the strongest power lifters in the world! Single Prong Leather Weightlifting Belt
          is example of the fine craftsmanship you will find with ThePowerBelt Products. Made from split cowhide 13mm thick leather blends, this belt will last.
          This single prong rolling buckle belt measures in at 3/8″ or more precisely, 10 mm thick. This belt is easier to get on and off than a double prong
          belt but it is still perfect for competition powerlifting and general weightlifting. This belt is not “padded” and is rigid in order to maximize
          support. Orthopedic ally designed this belt has the ability to enhance the overall comfort and stability of the bones and make lifting easy which will
          eventually help in achieving the best possible results. An ideal choice for olympic lifters, weightlifters, powerlifters, bodybuilders, crossfit
          trainers and also for functional fitness exercises such as back squats, power cleans, dead lifts, overhead squats, clean and jerks and much more.
        </Text>
      </Box>

      <Box>
        <Text m={0}>
          <UnorderedList>
            <ListItem>Competition grade build 13-mm thick genuine cowhide split leather</ListItem>
            <ListItem>{`4″ Width offers superior support & stabilizes back & core during lifting`}</ListItem>
            <ListItem>Belt easily contours to the waist. Fully adjustable with multiple holes</ListItem>
            <ListItem>Adjustable single prong 2mm thick-walled roller nickel steel buckle</ListItem>
            <ListItem>Features double stitched seams prevents from wearing and tearing</ListItem>
            <ListItem>Ideal for weightlifting, bodybuilding, powerlifting, crossfit, deadlift, squat, bench & other high-intensity training</ListItem>
            <ListItem>Features double stitched seams prevents from wearing and tearing</ListItem>
          </UnorderedList>
        </Text>
      </Box>
      <Box bg="red.100" p={4}>
        <Text m={0}>Due to popular demand, this product takes between 7 and 14 days to arrive</Text>
      </Box>
    </Stack>
  );
}

// 13mm POWER LIFTING BELT

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
      height={[16]}
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
      data-item-custom2-value={snap.beltColor.name}
      data-item-custom3-name="Belt stitched color"
      data-item-custom3-options={colors}
      data-item-custom3-value={snap.beltStitchedColor.name}
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
