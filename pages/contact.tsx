import React from "react";
import { Button, Textarea, Stack, Text, Box, Center, FormControl, FormLabel, Input, FormErrorMessage, FormHelperText } from "@chakra-ui/react";
import { Footer } from "@components/footer";
import { Layout } from "@components/layout";

export default function ContactPage() {
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <Layout>
      <Stack maxW="3xl" width="full" px={4} py={[10, 20]}>
        <Box>
          <Text as="h1" mb={[5, 10]} textAlign="center" fontSize={["3xl", "6xl"]} fontWeight="bold">
            Contact
          </Text>
        </Box>
        <Stack spacing={[3, 6]}>
          <Stack spacing={[3, 6]} direction={["column", "row"]}>
            <InputField inputRef={inputRef} label="Name" placeholder="John" />
            <InputField label="Email" placeholder="john@email.com" type="email" isRequired />
          </Stack>
          <InputField label="Message" placeholder="Message" fieldType="textarea" />
          <Box pt={[1, 0]}>
            <Button rounded="none" color="white" height={14} width={["full", 32]} _hover={{}} bg="gray.900">
              Send{" "}
              <Box as="span" pl={2}>
                &rarr;
              </Box>
            </Button>
          </Box>
        </Stack>
      </Stack>
    </Layout>
  );
}

function InputField({ inputRef = null, label, placeholder = "", fieldType = "input", type = "text", isRequired = false }) {
  return (
    <FormControl id={label} isRequired={isRequired}>
      <FormLabel>{label}</FormLabel>
      {fieldType === "input" ? (
        <Input
          rounded="none"
          _hover={{
            boxShadow: "outline",
          }}
          type={type}
          ref={inputRef}
          _placeholder={{ color: "gray.400" }}
          bg="gray.200"
          height={14}
          placeholder={placeholder}
          isRequired
        />
      ) : (
        <Textarea
          rounded="none"
          _hover={{
            boxShadow: "outline",
          }}
          type={type}
          ref={inputRef}
          _placeholder={{ color: "gray.400" }}
          bg="gray.200"
          height={32}
          placeholder={placeholder}
          isRequired
        />
      )}
    </FormControl>
  );
}
