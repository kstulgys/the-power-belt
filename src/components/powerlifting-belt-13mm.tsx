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
  SimpleGrid,
  Input,
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
import { beltColors, beltSizes, beltTypes, ICartItem, useBeltSelection, useCart } from "store";
import { FaCircle } from "react-icons/fa";

declare const window: any;

// s 90cm
// m 100cm
// L 110cm
// xl 120cm
// xxl 125cm
// xxxl 130cm

export function PowerliftingBelt13mm() {
  const { snap, setBeltSize, setBeltType } = useBeltSelection();

  const product = products.find(({ id }) => id === snap.beltType.id);
  const selectionName = `size: ${snap.beltSize} / color: ${snap.beltColor.name} / stitching:${snap.beltStitchedColor.name}${
    snap.writing ? ` / text: ${snap.writing}` : ""
  }`;

  const leftInStock = (() => {
    const id = snap.beltType.id;
    if (id === "B-102") {
      return 31;
    }
    if (id === "B-101") {
      return 27;
    }
    if (id === "B-103") {
      return 13;
    }
  })();

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
            <Image src={product.images[0]} width="full" height="full" objectFit="contain" />
          </Stack>
        </Stack>

        <Stack spacing={8} width={["100%", "40%"]} pl={[0, 12]}>
          <Box textAlign={["center", "left"]}>
            <NextLink href="/product/powerlifting-belt-13mm" passHref>
              <Link m={0} fontSize={["2xl", "3xl"]} fontWeight="bold" _hover={{}}>
                {snap.beltType.value}
              </Link>
            </NextLink>
          </Box>

          <SelectionSection title="Options">
            <Accordion allowToggle>
              <AccordionItem borderColor="gray.900">
                <h2>
                  <AccordionButton py={3}>
                    <Stack spacing={3} isInline flex="1" textAlign="left" fontSize="md" alignItems="center">
                      <Text m={0}>Belt type: {snap.beltType.value}</Text>
                    </Stack>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <SimpleGrid columns={3} spacing={6} alignItems="center">
                    {beltTypes.map(({ value, imagePath, id }) => {
                      // const belt
                      // const imgUrl = (()=> {
                      //   if(snap.beltType.id === "B-102"){
                      //     return '/public/images/pwb/b-102.png'
                      //   }else {
                      //     return '/public/images/pwb/b-101-b-103.png'
                      //   }
                      // })()

                      return (
                        <Box rounded="sm" key={value} boxShadow={snap.beltType.value === value ? "outline" : "none"}>
                          <Stack
                            // boxSize={28}
                            // fontWeight="normal"
                            // width="full"
                            // borderColor="gray.900"
                            // borderWidth="1px"
                            // bg={snap.beltType.value === value ? "gray.900" : "white"}
                            // color={snap.beltType.value === value ? "white" : "gray.900"}
                            // rounded="sm"
                            // _hover={{}}
                            onClick={() => setBeltType({ value, id, imagePath })}
                          >
                            <Box flex={1}>
                              <Image src={imagePath} />
                            </Box>
                            <Box>
                              <Text m={0} fontSize="xs" textAlign="center">
                                {value}
                              </Text>
                            </Box>
                          </Stack>
                        </Box>
                      );
                    })}
                  </SimpleGrid>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem borderColor="gray.900">
                <h2>
                  <AccordionButton py={3}>
                    <Stack spacing={3} isInline flex="1" textAlign="left" fontSize="md" alignItems="center">
                      <Text m={0}>Size: {snap.beltSize}</Text>
                      {/* <Box boxSize={6} rounded="full" bg={snap.beltColor.color} borderWidth="1px" borderColor="gray.900" /> */}
                    </Stack>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text fontSize="sm">[lable-length]</Text>
                  <Stack>
                    <SimpleGrid columns={2} spacing={4}>
                      {beltSizes.map(({ lable, value }, index) => {
                        return (
                          <Box key={value}>
                            <Button
                              fontWeight="normal"
                              width="full"
                              borderColor="gray.900"
                              borderWidth="1px"
                              bg={snap.beltSize === value ? "gray.900" : "white"}
                              color={snap.beltSize === value ? "white" : "gray.900"}
                              rounded="sm"
                              _hover={{}}
                              onClick={() => setBeltSize(value)}
                            >
                              {lable}
                            </Button>
                          </Box>
                        );
                      })}
                    </SimpleGrid>
                  </Stack>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem borderColor="gray.900">
                <h2>
                  <AccordionButton py={3}>
                    <Stack spacing={3} isInline flex="1" textAlign="left" fontSize="md" alignItems="center">
                      <Text m={0}>Belt color:</Text>
                      <Box boxSize={6} rounded="full" bg={snap.beltColor.color} borderWidth="1px" borderColor="gray.900" />
                    </Stack>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Wrap>
                    {beltColors.map((props) => {
                      return <Dot type="color" key={props.color} {...props} />;
                    })}
                  </Wrap>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem borderColor="gray.900">
                <h2>
                  <AccordionButton py={3}>
                    <Stack spacing={3} isInline flex="1" textAlign="left" fontSize="md" alignItems="center">
                      <Text m={0}>Stitching color:</Text>
                      <Box boxSize={6} rounded="full" bg={snap.beltStitchedColor.color} borderWidth="1px" borderColor="gray.900" />
                    </Stack>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Wrap>
                    {beltColors.map((props) => {
                      return <Dot type="stitching" key={props.color} {...props} />;
                    })}
                  </Wrap>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem borderColor="gray.900">
                <h2>
                  <AccordionButton py={3}>
                    <Stack spacing={3} isInline flex="1" textAlign="left" fontSize="md" alignItems="center">
                      <Text m={0}>
                        Text inside the belt:{" "}
                        {snap.writing ? (
                          <Box as="span" fontWeight="bold">
                            YES
                          </Box>
                        ) : (
                          <Box as="span" fontWeight="bold">
                            NO
                          </Box>
                        )}
                      </Text>
                    </Stack>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <InputBeltInside />
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
                      {leftInStock}
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
            <AddToCartButton product={product} descriptor={selectionName} />
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

function InputBeltInside() {
  const { setWriting, snap } = useBeltSelection();
  const ref = React.useRef(null);

  React.useEffect(() => {
    ref?.current?.focus();
  }, []);

  return (
    <>
      <Box pb={3}>
        <Button size="xs" bg="gray.200" onClick={() => setWriting({ target: { value: "" } })}>
          Remove text
        </Button>
      </Box>
      <Input ref={ref} rounded="sm" borderColor="gray.400" value={snap.writing} onChange={setWriting} />
    </>
  );
}

function Dot({ name, color, type }) {
  const { snap, setBeltColor, setBeltStitchedColor } = useBeltSelection();
  const isSelected = (() => {
    if (type === "color") return snap.beltColor.name === name;
    return snap.beltStitchedColor.name === name;
  })();

  const onClick = (() => {
    if (type === "color") return setBeltColor;
    return setBeltStitchedColor;
  })();

  return (
    <WrapItem
      key={color}
      boxShadow={isSelected ? "outline" : "none"}
      rounded="full"
      _hover={{
        boxShadow: "outline",
      }}
    >
      {/* @ts-ignore */}
      <Button boxSize={8} size="sm" rounded="full" bg={color} tabIndex={0} onClick={() => onClick({ name, color })} _hover={{}} />
    </WrapItem>
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
                  {"$" + prevPrice}
                </Text>
              </Box>
              <Box>
                <Badge mt="-3px" fontSize={["xs", "sm"]} color="white" bg="gray.900" px={2}>
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
  { quantity: 1, price: "150.00", prevPrice: "210.00", saveText: "-40% regular price" },
  { quantity: 2, price: "240.00", prevPrice: "300", saveText: "save 20%" },
  { quantity: 5, price: "600", prevPrice: "750", saveText: "5th for free" },
];

function ProductDescription() {
  const { snap } = useBeltSelection();
  const isLongDelivery = snap.beltType.id !== "B-102";

  return (
    <Stack spacing={4}>
      <Box>
        <Text fontWeight="semibold" m={0}>
          You love weight lifting, but you have stopped progressing or your belt is just not good enough? If you are looking for the best belt to use for the
          rest of your life, your search is over!
        </Text>
      </Box>

      <Box>
        <Text m={0}>
          This truly is the best powerlifting belt made. This belt is made for the strongest power lifters and it's an example of the fine craftsmanship you
          will find with ThePowerBelt Products. Made from split cowhide 10/13mm thick leather blends, this belt will last. This belt is easy to get on and off
          and it's perfect for competition powerlifting and general weightlifting. This belt is made to maximize support. Orthopedically designed this belt has
          the ability to enhance the overall comfort and stability of the bones and make lifting easy which will eventually help in achieving the best possible
          results. An ideal choice for olympic lifters, weightlifters, powerlifters, bodybuilders, crossfit trainers and also for functional fitness exercises
          such as back squats, power cleans, dead lifts, overhead squats, clean and jerks and much more.
        </Text>
      </Box>

      <Box>
        <Text m={0}>
          <UnorderedList>
            <ListItem>Competition grade build 10/13mm thick genuine cowhide split leather</ListItem>
            <ListItem>{`Offers superior support & stabilizes back & core during lifting`}</ListItem>
            <ListItem>Belt easily contours to the waist. Fully adjustable with multiple holes</ListItem>
            {/* <ListItem>Adjustable single prong 2mm thick-walled roller nickel steel buckle</ListItem> */}
            <ListItem>Features double stitched seams prevents from wearing and tearing</ListItem>
            <ListItem>Ideal for weightlifting, bodybuilding, powerlifting, crossfit, deadlift, squat, bench & other high-intensity training</ListItem>
          </UnorderedList>
        </Text>
      </Box>
      <Box bg="red.100" p={4}>
        {isLongDelivery ? (
          <Text m={0}>Due to popular demand, this product takes between 2 and 4 weeks to arrive</Text>
        ) : (
          <Text m={0}>Due to popular demand, this product takes between 7 and 14 days to arrive</Text>
        )}
      </Box>
    </Stack>
  );
}

{
  /* <ListItem>Competition grade build 13-mm thick genuine cowhide split leather</ListItem>
<ListItem>{`4″ Width offers superior support & stabilizes back & core during lifting`}</ListItem>
<ListItem>Belt easily contours to the waist. Fully adjustable with multiple holes</ListItem>
<ListItem>Adjustable single prong 2mm thick-walled roller nickel steel buckle</ListItem>
<ListItem>Features double stitched seams prevents from wearing and tearing</ListItem>
<ListItem>Ideal for weightlifting, bodybuilding, powerlifting, crossfit, deadlift, squat, bench & other high-intensity training</ListItem>
<ListItem>Features double stitched seams prevents from wearing and tearing</ListItem> */
}

{
  /* <Text m={0}>
This truly is the best powerlifting belt made. This belt is made for the strongest power lifters and it's an example of the fine craftsmanship you
will find with ThePowerBelt Products. Made from split cowhide 10/13mm thick leather blends, this belt will last. This single prong rolling buckle belt
measures in at 3/8″ or more precisely, 10 mm thick. This belt is easier to get on and off than a double prong belt but it is still perfect for
competition powerlifting and general weightlifting. This belt is not “padded” and is rigid in order to maximize support. Orthopedic ally designed this
belt has the ability to enhance the overall comfort and stability of the bones and make lifting easy which will eventually help in achieving the best
possible results. An ideal choice for olympic lifters, weightlifters, powerlifters, bodybuilders, crossfit trainers and also for functional fitness
exercises such as back squats, power cleans, dead lifts, overhead squats, clean and jerks and much more.
</Text> */
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

// const colors = beltColors.reduce((acc, { name }, index) => {
//   if (!acc) return acc.concat(`${name}|`);
//   if (beltColors.length - 1 === index) return acc.concat(name);
//   return acc.concat(`${name}|`);
// }, "");

// const sizes = beltSizes.reduce((acc, size, index) => {
//   if (!acc) return acc.concat(`${size}|`);
//   if (beltSizes.length - 1 === index) return acc.concat(size);
//   return acc.concat(`${size}|`);
// }, "");

function AddToCartButton({ product, descriptor }) {
  const { snap } = useBeltSelection();
  const snapshot = useCart();

  const item: ICartItem = {
    ...product,
    descriptor,
    variant: {
      name: product.name,
      size: snap.beltSize,
      color: snap.beltColor.name,
      stitchedColor: snap.beltStitchedColor.name,
      text: snap.writing || "none",
    },
    meta: {
      name: product.name,
      size: snap.beltSize,
      color: snap.beltColor,
      stitchedColor: snap.beltStitchedColor,
      text: snap.writing || "none",
    },
  };

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
      onClick={() => {
        snapshot.addItem(item);
      }}
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
