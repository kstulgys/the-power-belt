import React from "react";
import { Stack, Box, Text, Button, Menu, MenuButton, MenuList, MenuItem, Image } from "@chakra-ui/react";
import { products } from "src/utils/products";
import { Footer } from "@components/footer";

import { ChevronDownIcon } from "@chakra-ui/icons";
import { Subscribe } from "@components/subscribe";
import { Layout } from "@components/layout";
import NextImage from "next/image";
import { motion } from "framer-motion";
import { FaqContent } from "@components/faq";
import { PowerliftingBelt13mm } from "@components/powerlifting-belt-13mm";
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
          <Box pb={[6, 12]}>
            <Text m={0} textAlign="center" fontSize="3xl" fontWeight="bold">
              Belts
            </Text>
          </Box>
        </Stack>
        <ListBelts />
      </Container>
    </Layout>
  );
}

function Heading({ onShopNowClick }) {
  return (
    <Stack minH={["full", "60vh"]} isInline height="full" justifyContent="center" alignItems="center" pb={12}>
      <Box pt={[10, 0]} fontSize={["3xl", "6xl"]} fontWeight="bold">
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
  );
}

function ListBelts() {
  return (
    <Stack>
      <BeltsListHeader />
      <PowerliftingBelt13mm />
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
