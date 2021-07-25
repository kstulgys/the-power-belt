import React from "react";
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
  Center,
} from "@chakra-ui/react";
import { products } from "src/utils/products";

import { PowerliftingBelt13mm } from "@components/powerlifting-belt-13mm";
import { Layout } from "@components/layout";
declare const window: any;

export default function PowerliftingBelt13mmPage() {
  return (
    <Layout>
      <Container>
        <PowerliftingBelt13mm />
      </Container>
    </Layout>
  );
}

function Container({ children }) {
  return (
    <Center maxW="7xl" width="full" pt={[0, 20]} px={4}>
      {children}
    </Center>
  );
}
