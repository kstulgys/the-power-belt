import React from "react";
import { Stack, Box, Text, Button, Menu, MenuButton, MenuList, MenuItem, Image, Link } from "@chakra-ui/react";
import { products } from "src/utils/products";
import { Footer } from "@components/footer";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Subscribe } from "@components/subscribe";
import { Layout } from "@components/layout";
import NextImage from "next/image";
import { motion } from "framer-motion";
import { FaqContent } from "@components/faq";
import { PowerliftingBelt13mm } from "@components/powerlifting-belt-13mm";
import NextLink from "next/link";
import { useRouter } from "next/dist/client/router";

declare const window: any;

function Container({ children, maxW = "7xl" }) {
  return (
    <Stack maxW={maxW} px="4" mx="auto" width="full">
      {children}
    </Stack>
  );
}

export default function Home() {
  const productsDivRef = React.useRef(null);

  const onShopNowClick = () => {
    productsDivRef?.current?.scrollIntoView({
      inline: "center",
      behavior: "smooth",
    });
  };

  return (
    <Layout>
      <Heading onShopNowClick={onShopNowClick} />
      <Container>
        <Stack ref={productsDivRef}>
          {/* <Box pb={[6, 12]} display={["none", "block"]}>
            <Text m={0} textAlign="center" fontSize="3xl" fontWeight="bold">
              Belts
            </Text>
          </Box> */}
          {/* <Categories /> */}
        </Stack>
        <FeaturedProduct />
      </Container>
    </Layout>
  );
}

function Heading({ onShopNowClick }) {
  return (
    <Stack height={["full", "60vh"]} isInline justifyContent="space-between" alignItems="center" pb={[12]} width="full">
      <Stack alignItems="center" direction={["column", "row"]} spacing={12} maxW="7xl" mx="auto" width="full">
        <Stack maxW={["xl"]} width="full" spacing={0} pt={[10, 0]} fontWeight="bold" zIndex={2} px={4}>
          <Text as="h1" m={0} lineHeight="shorter" fontWeight="bold" fontSize={["4xl", "7xl"]}>
            Empowering Weight lifters
          </Text>
          <Text as="h2" m={0} fontSize="lg" fontWeight="lighter">
            Best quality, lifetime lasting belts for serious weight lifters
          </Text>
          <Stack isInline pt={5}>
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
        </Stack>
        <Box px={4} pl={[0, 20]}>
          <Image src="/images/pwb/landing.png" />
        </Box>
      </Stack>
    </Stack>
  );
}

function FeaturedProduct() {
  return (
    <Stack spacing={[0, 16]}>
      {/* <Box pt={[10, 0]}>
        <Text m={0} fontWeight="bold" fontSize={["3xl"]}>
          Featured Product
        </Text>
      </Box> */}
      <PowerliftingBelt13mm />
    </Stack>
  );
}

function Categories() {
  return (
    <Stack direction={["column", "row"]} spacing={[4, 7]}>
      <Stack
        overflow="hidden"
        boxSize={[20, 40]}
        width={["full", "50%"]}
        bg="white"
        boxShadow="base"
        rounded="md"
        p={4}
        alignItems="center"
        justifyContent="center"
      >
        <Box>
          <NextLink href="/belts" passHref>
            <Link fontSize={["lg", "xl"]} fontWeight="black" m={0}>
              PREMIUM BELTS
            </Link>
          </NextLink>
        </Box>
      </Stack>
      <Stack
        overflow="hidden"
        boxSize={[20, 40]}
        width={["full", "50%"]}
        bg="white"
        boxShadow="base"
        rounded="md"
        p={4}
        alignItems="center"
        justifyContent="center"
      >
        <Box>
          <NextLink href="/accessories" passHref>
            <Link fontSize={["lg", "xl"]} fontWeight="black" m={0}>
              ACCESSORIES
            </Link>
          </NextLink>
        </Box>
      </Stack>
    </Stack>
  );
}

function BeltsListHeader() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const beltsData = [
    { name: "Powerlifting Belt 13mm", images: [] },
    { name: "Deadlift Belt 13mm", images: [] },
    { name: "Deadlift Belt 10mm", images: [] },
  ];

  return (
    <Stack direction={["column", "row"]} spacing={1} borderBottom="1px solid">
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
