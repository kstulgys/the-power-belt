import React from "react";
import { Button, Link, Textarea, Stack, Text, Box, Center, FormControl, FormLabel, Input, FormErrorMessage, FormHelperText } from "@chakra-ui/react";
import { Footer } from "@components/footer";
import { Layout } from "@components/layout";

export default function ContactPage() {
  const inputRef = React.useRef(null);
  const [body, setBody] = React.useState("");

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
          {/* <Stack spacing={[3, 6]} direction={["column", "row"]}>
            <InputField inputRef={inputRef} label="Name" placeholder="John" />
            <InputField label="Email" placeholder="john@email.com" type="email" isRequired />
          </Stack> */}
          <InputField inputRef={inputRef} onChange={(e) => setBody(e.target.value)} label="Message" placeholder="Message" fieldType="textarea" />
          <Box pt={[4, 1]}>
            <Link
              isExternal
              href={`mailto:team@thepowerbelt.com?subject=Hi there &body=${body}`}
              rounded="none"
              color="white"
              // height={14}
              px={5}
              py={3}
              width={["full", 32]}
              _hover={{}}
              bg="gray.900"
            >
              Send{" "}
              <Box as="span" pl={2}>
                &rarr;
              </Box>
            </Link>
          </Box>
        </Stack>
      </Stack>
    </Layout>
  );
}

function InputField({ inputRef = null, label, placeholder = "", fieldType = "input", type = "text", isRequired = false, ...rest }) {
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
          {...rest}
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
          {...rest}
        />
      )}
    </FormControl>
  );
}
