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
} from "@chakra-ui/react";
import { products } from "src/utils/products";
// import { Header, Main, Cards, Footer } from "@components";
import { FiShoppingCart } from "react-icons/fi";
declare const window: any;

function Container({ children, maxW = "7xl" }) {
  return (
    <Stack maxW={maxW} px="4" mx="auto" width="full">
      {children}
    </Stack>
  );
}

const CircleIcon = (props) => (
  <Icon viewBox="0 0 200 200" {...props}>
    <path fill="currentColor" d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0" />
  </Icon>
);

const Home: React.FC = () => {
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
      {/* <Navigation /> */}
      {/* <Stack bg="gray.900">
        <Container>
          <Stack isInline height="5rem">
            <Box flex={1}></Box>
            <Box flex={1}></Box>
            <Stack flex={1}>
              <Button color="white" variant="unstyled">
                C
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Stack> */}
      <Heading onClick={onClick} />
      <TrustBadges />
      <SectionBlock />
      <OrderProduct orderSectionRef={orderSectionRef} />
      <Container>
        <Stack isInline py={20} spacing={20}>
          {products.map((props: any) => {
            return <ProductCard key={props.id} {...props} />;
          })}
        </Stack>
      </Container>
      <GetFreeContent />
    </>
  );
};

function OrderProduct({ orderSectionRef }) {
  return (
    <Stack height="100vh" bg="gray.100" ref={orderSectionRef}>
      <Container>
        <Stack isInline>
          <Stack flex={1}>
            <Text>Hello</Text>
          </Stack>
          <Stack flex={1}>
            <Text>Hello</Text>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
}

function Heading({ onClick }) {
  return (
    <Stack height="60vh" bg="gray.900" color="white" isInline flex={0.6} alignItems="center">
      <Container maxW="8xl">
        <Stack isInline>
          <Stack flex={0.4}>
            <Text pb={16} fontSize="7xl" fontWeight="bold" lineHeight="none" m={0}>
              <Box color="red.500">#1 Pro Grade </Box>Weight Lifting Belt
            </Text>
            <Stack>
              <Stack isInline justifyContent="space-between" alignItems="center" width="60%">
                <Box>
                  <Text color="white" fontSize="3xl" fontWeight="semibold" textDecor="line-through" m={0}>
                    $299
                  </Text>
                </Box>
                <Box>
                  <Text color="red.500" fontSize="5xl" fontWeight="semibold" m={0}>
                    $139
                  </Text>
                </Box>
                <Box>
                  <Badge fontSize="xl" bg="white">
                    save 30%
                  </Badge>
                </Box>
              </Stack>
              <Box width="60%">
                <Button onClick={onClick} width="full" fontSize="2xl" fontWeight="semibold" color="white" bg="red.500" height={16} _hover={{ bg: "red.400" }}>
                  ORDER NOW
                </Button>
              </Box>
            </Stack>
          </Stack>
          <Stack isInline flex={0.6} alignItems="center" justifyContent="center">
            <Box>
              <Image width="xl" src="/images/main.png" objectFit="cover" />
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
}
{
  /* <img alt="Trust Badges" src="https://trustlock.co/wp-content/uploads/2019/01/credit-card-logos-free-png-image-trans.png" width="294" height="60" /> */
}

function TrustBadges() {
  return (
    <Stack mt={-8} height="7.5vh" isInline justifyContent="center" alignItems="center">
      <Stack spacing={5} isInline alignItems="center" bg="white" height="full" rounded="md" boxShadow="xl" px={5}>
        <Box>
          {/* <Image src="/trust-badges/Fee_Shipping_Badge.svg" objectFit="cover" height={20} /> */}
          <Image
            name="trustseal"
            alt="Trust Badges"
            src="https://trustlock.co/wp-content/uploads/2019/01/free-shipping-icon-graphic-2.png"
            objectFit="cover"
            height={9}
          />
        </Box>
        <Box>
          <Image
            name="trustseal"
            alt="Trust Badges"
            src="https://trustlock.co/wp-content/uploads/2019/01/30-day-money-back-guarantee-badge-4.png"
            objectFit="cover"
            height={9}
          />
          {/* <Image src="/trust-badges/Money-back_Guarantee_Badge.svg"/> */}
        </Box>
        <Box>
          <Image
            name="trustseal"
            alt="Trust Badges"
            src="https://trustlock.co/wp-content/uploads/2019/01/ssl-secure-trust-badge-free.png"
            objectFit="cover"
            height={9}
          />
          {/* <Image src="/trust-badges/Secure_Payment_Badge.svg" objectFit="cover" height={20} /> */}
        </Box>
        <Box>
          <Image
            name="trustseal"
            alt="Trust Badges"
            src="https://trustlock.co/wp-content/uploads/2019/01/satisisfaction-guaranteed-badge-icon.png"
            objectFit="cover"
            height={9}
          />
          {/* <Image src="/trust-badges/Premium_Quality_Badge.svg" objectFit="cover" height={20} /> */}
        </Box>
      </Stack>
    </Stack>
  );
}

function SaleBaner() {
  return (
    <Stack alignItems="center" bg="yellow.400">
      <TransitionExample />
      <Container>
        <Stack fontWeight="semibold" fontSize="lg" py={4} isInline justifyContent="center" alignItems="center">
          <Box>
            <Text m={0}>
              🎁 Summer sale up to{" "}
              <Box as="span" color="red.600">
                67%
              </Box>{" "}
              |
            </Text>
          </Box>
          <Box>
            <Text m={0}>Free Shipping 🚀 </Text>
          </Box>
        </Stack>
      </Container>
    </Stack>
  );
}

function SectionBlock() {
  return (
    <Stack isInline bg="white" mt={-8} mb="-0.75rem" height="40vh">
      <Container>
        <Stack isInline height="full" alignItems="center">
          <Stack isInline>
            <Text lineHeight="taller" as="span" textAlign="center" m={0} fontSize="3xl" fontWeight="bold">
              We are working with{" "}
              <Box as="span" bg="red.500" color="white" px={2}>
                #1 sports equptment manufacturer
              </Box>{" "}
              in the world to provide you the best quality products and customer satisfaction
            </Text>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
}

function Navigation() {
  const scRef = React.useRef<HTMLDivElement>(null);
  const selectRef = React.useRef<HTMLSelectElement>(null);
  const [_, rerender] = React.useReducer((state, _) => state + 1, 0);
  // const [currentCurrency, setCurrentCurrency] = React.useState("usd");
  // const theme = useTheme();
  React.useEffect(() => {
    document.addEventListener("snipcart.ready", () => {
      selectRef.current.addEventListener("change", () => {
        window.Snipcart.api.session.setCurrency(selectRef.current.value);
      });

      window.Snipcart.store.subscribe(update);

      function update() {
        const state = window.Snipcart.store.getState();
        console.log({ state });
        const currency = state.cart.currency;
        selectRef.current.value = currency;
      }
    });

    // return () => {
    //   document.removeEventListener("snipcart.ready", update);
    // };
  });

  return (
    <Stack bg="white">
      <Container>
        <Stack isInline height="16" alignItems="center">
          <Stack flex={1}>
            <Text>Left</Text>
          </Stack>
          <Stack flex={1}>
            <Text>center</Text>
          </Stack>
          <Stack flex={1} isInline justifyContent="flex-end" alignItems="center">
            <Box>
              <Button variant="unstyled" className="snipcart-checkout">
                <Icon as={FiShoppingCart} fontSize="2xl" />
              </Button>
            </Box>
            {/* <Box>
              <Button variant="unstyled" className="snipcart-total-price">
                <Icon as={FiShoppingCart} fontSize="2xl" />
              </Button>
            </Box> */}
            <Select
              ref={selectRef}
              // value={currentCurrency}
              id="currencies"
              // onChange={(e) => setCurrentCurrency(e.target.value)}
              width={24}
              borderColor="gray.900"
              fontWeight="semibold"
              _hover={{}}
            >
              <option value="usd">usd</option>
              <option value="eur">eur</option>
              <option value="aud">aud</option>
            </Select>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
}

function ProductCard({ name, imageMain, priceOriginal, discountPercent, price, description, id, sizes }) {
  const [activeSizeIndex, setActiveIndex] = React.useState(2);
  const [activeColorIndex, setActiveColorIndex] = React.useState(1);

  const btnRef = React.useRef<HTMLButtonElement>(null);

  const sizesString = sizes.reduce((acc, next, index) => {
    if (index === sizes.length - 1) return acc + next;
    return acc + next + "|";
  }, "");

  // Update cart with size before open
  React.useEffect(() => {
    if (!btnRef.current) return;
    btnRef.current.setAttribute("data-item-custom1-value", sizes[activeSizeIndex]);
  }, [activeSizeIndex]);

  // Update cart with color before open
  // React.useEffect(() => {
  //   if (!btnRef.current) return;
  //   btnRef.current.setAttribute("data-item-custom2-value", sizes[activeColorIndex]);
  // }, [activeColorIndex]);

  return (
    <Stack width="full" spacing={0} alignItems="center">
      <Box height={28}>
        <Text textAlign="center" m={0} fontSize="2xl" fontWeight="semibold">
          {name}
        </Text>
      </Box>
      <Box>
        <Image height="400px" src={imageMain} rounded="lg" objectFit="cover" />
      </Box>
      <Stack isInline py={6}>
        {sizes.map((size, index) => {
          return (
            <Box>
              <Button
                onClick={() => setActiveIndex(index)}
                rounded="full"
                boxSize={12}
                border={activeSizeIndex === index ? "2px solid" : "none"}
                borderColor={activeSizeIndex === index ? "gray.900" : "none"}
              >
                {size}
              </Button>
            </Box>
          );
        })}
      </Stack>
      <Stack isInline alignItems="center" justifyContent="center" fontSize="xl" pb={6} spacing={4}>
        <Box>
          <Text m={0} fontWeight="semibold" color="red.600">
            ${price}
          </Text>
        </Box>
        <Box>
          <Text m={0} textDecor="line-through" fontWeight="semibold">
            ${priceOriginal}
          </Text>
        </Box>
        <Box>
          <Badge bg="yellow.400" fontSize="xl">
            save {discountPercent}%
          </Badge>
        </Box>
      </Stack>

      <Box width="full">
        {/* <Text>Coming soon...</Text> */}
        <Button
          ref={btnRef}
          id={id}
          className="snipcart-add-item"
          data-item-id={id}
          // data-item-price={price}
          // data-item-price="{&quot;usd&quot;: 20, &quot;cad&quot;: 25}"
          // data-item-price='{"usd": 20, "cad": 25}'
          data-item-price={`{"usd": ${price}, "eur": ${Math.round(+price * 1.2)}, "aud": ${Math.round(+price * 0.5)}}`}
          // data-item-price="{&quot;usd&quot;: 20, &quot;cad&quot;: 25}">
          // data-item-price={`{&quot;usd&quot;: ${+price}, &quot;eur&quot;: ${+price}, &quot;aud&quot;: ${+price}}`}
          data-item-url="/"
          data-item-description={description}
          data-item-image={imageMain}
          data-item-name={name}
          data-item-custom1-name="Size"
          data-item-custom1-options={sizesString}
          // data-item-custom2-name="Color"
          // data-item-custom2-options="Black|Brown|Gold"
          data-item-has-taxes-included={true}
          width="full"
          height={16}
          bg="gray.900"
          color="white"
          fontSize="xl"
          _hover={{
            bg: "gray.800",
          }}
        >
          Add to cart
        </Button>
      </Box>
    </Stack>
  );
}

// const button = document.querySelector('#starry-night')
// const quantity = document.querySelector('#quantity')
// quantity.addEventListener('change', () => {
//   // Sets the default quantity when adding the item
//   button.setAttribute('data-item-quantity', quantity.value)
// })
// const select = document.querySelector('#frame_color')
// select.addEventListener('change', () => {
//   // Sets the default frame color when adding the item
//   button.setAttribute("data-item-custom1-value", select.value)
// })

function Header() {
  const [data, setData] = React.useState({
    email: "",
    gender: "",
    age: "",
    exercise: "",
    Units: "",
    OneRepMax: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending");

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        // setSubmitted(true)
        // setName('')
        // setEmail('')
        // setBody('')
      }
    });
  };

  const weightOptionsLbs = React.useMemo(() => {
    const array = Array(8).fill(null);
  }, []);

  const onDataChange = ({ target }) => {
    const { name, value } = target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  console.log({ data });
  return (
    <Box bg="gray.900" color="white" py={40}>
      <Container>
        <Stack isInline height="full">
          <Stack width="60%" height="full">
            <Box>
              <Text m={0} fontSize="6xl" fontWeight="bold" lineHeight="none">
                Find out how strong you are
              </Text>
            </Box>
            <Stack isInline spacing={4}>
              <Box>
                <Badge>Beginner</Badge>
              </Box>
              <Box>
                <Badge>Novice</Badge>
              </Box>
              <Box>
                <Badge>Intermediate</Badge>
              </Box>
              <Box>
                <Badge>Advanced</Badge>
              </Box>
              <Box>
                <Badge>Elite</Badge>
              </Box>
            </Stack>
            <Stack isInline spacing={6} py={8} width="full">
              <Selection
                name="Gender"
                onChange={onDataChange}
                options={[
                  { name: "Male", value: "Male" },
                  { name: "Female", value: "Female" },
                ]}
              />
              <Selection
                name="Age"
                onChange={onDataChange}
                options={[
                  { name: "10-20", value: "10-20" },
                  { name: "20-30", value: "20-30" },
                ]}
              />
              {/* <Selection
                                name="Exercise"
                                onChange={onDataChange}
                                options={[
                                    { name: "Deadlift", value: "Deadlift" },
                                    { name: "Squat", value: "Squat" },
                                ]}
                            /> */}
              <Selection
                name="Units"
                onChange={onDataChange}
                options={[
                  { name: "kg", value: "kg" },
                  { name: "lbs", value: "lbs" },
                ]}
              />
              <Selection
                name="One rep max"
                onChange={onDataChange}
                options={[
                  { name: "kg", value: "kg" },
                  { name: "lbs", value: "lbs" },
                ]}
              />
            </Stack>
            <Box>
              <InputGroup size="md">
                <Input
                  color="gray.900"
                  fontSize="xl"
                  placeholder="example@email.com"
                  bg="white"
                  height={20}
                  _focus={{
                    boxShadow: "rgba(245, 158, 11) 0px 0px 0px 5px",
                  }}
                />
                <InputRightElement width={40} p={1} height="full">
                  <Button
                    height="full"
                    width="full"
                    fontSize="lg"
                    bg="gray.900"
                    _hover={{
                      bg: "gray.800",
                    }}
                  >
                    Send
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Box>
          </Stack>
          <Stack width="50%">{/* <Image src="/images/landing.png" /> */}</Stack>
        </Stack>
      </Container>
    </Box>
  );
}

function GetFreeContent() {
  return (
    <Box bg="gray.900" color="white" py={40}>
      <Container>
        <Stack isInline height="full">
          <Stack width="50%" height="full">
            {/* <Text>Book Image</Text> */}
          </Stack>
          <Stack width="50%">{/* <Image src="/images/landing.png" /> */}</Stack>
        </Stack>
      </Container>
    </Box>
  );
}

function Selection({ name, onChange, options }) {
  return (
    <Stack width="full">
      <Box>
        <Text fontWeight="semibold" m={0}>
          {name}
        </Text>
      </Box>
      <Select
        name={name}
        onChange={onChange}
        _focus={{
          borderColor: "yellow.400",
          borderWidth: "2px",
        }}
        size="lg"
        placeholder="Select"
        width="full"
      >
        <option value="option1">Male</option>
        <option value="option2">Female</option>
      </Select>
    </Stack>
  );
}

function ListProducts() {
  const [listProducts, setProducts] = React.useState([]);
  const scRef = React.useRef(null);

  React.useEffect(() => {
    scRef.current = document.getElementById("snipcart");
    async function fetchProducts() {
      const data = await fetch("https://6096766e116f3f00174b323e.mockapi.io/api/v1/product").then((res) => res.json());
      return data;
    }
    fetchProducts().then(setProducts);
  }, []);
  console.log(scRef);

  return (
    <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={10} py={20}>
      {listProducts?.map(({ id, price, url, description, image, name }) => {
        return (
          <div>
            <div>
              <img src={image} height="100" />
            </div>
            <div>
              <p>{name}</p>
              <p>{price}</p>
            </div>
            <button
              className="snipcart-add-item"
              data-item-id={id}
              data-item-price={price}
              data-item-url="/"
              data-item-description={description}
              data-item-image={image}
              data-item-name={name}
            >
              Add to cart
            </button>
          </div>
        );
      })}
    </Grid>
  );
}

function TransitionExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [sizeSelected, setSizeSelected] = React.useState("");

  React.useEffect(() => {
    setTimeout(onOpen, 3000);
  }, []);

  return (
    <>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}
      <Modal
        size="3xl"
        // isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="scale"
      >
        <ModalOverlay />
        <ModalContent>
          {/* <ModalHeader textAlign="center">Se</ModalHeader> */}
          <ModalCloseButton />
          <ModalBody p={20}>
            <Text m={0} lineHeight="none" textAlign="center" fontSize="6xl" fontWeight="semibold">
              Select your belt size
            </Text>
            <Stack isInline justifyContent="center" pt={12}>
              <Stack isInline spacing={5}>
                {["S", "M", "L", "XL", "2XL", "3XL"].map((size) => {
                  return (
                    <Box>
                      <Button
                        rounded="full"
                        fontSize="2xl"
                        color={sizeSelected === size ? "white" : "gray.900"}
                        variant="ghost"
                        boxSize={16}
                        size="lg"
                        border="3px solid"
                        borderColor="gray.900"
                        bg={sizeSelected === size ? "gray.900" : "white"}
                        onClick={() => setSizeSelected(size)}
                        boxShadow={sizeSelected === size ? "rgba(245, 158, 11) 0px 0px 0px 5px" : "none"}
                        _focus={{
                          boxShadow: "rgba(245, 158, 11) 0px 0px 0px 5px",
                        }}
                        _hover={{
                          bg: "gray.900",
                          color: "white",
                          boxShadow: "rgba(245, 158, 11) 0px 0px 0px 5px",
                        }}
                      >
                        {size}
                      </Button>
                    </Box>
                  );
                })}
              </Stack>
            </Stack>
            <Box pt={12}>
              <Box>
                <Text fontSize="xl" mb={1}>
                  Get{" "}
                  <Box as="span" fontWeight="bold" color="red.500">
                    COUPONE CODE
                  </Box>{" "}
                  up to{" "}
                  <Box as="span" color="red.500" fontWeight="bold">
                    15%
                  </Box>{" "}
                  for your first purchase!
                </Text>
              </Box>
              <InputGroup>
                <Input
                  border="3px solid"
                  borderColor="gray.900"
                  color="gray.900"
                  fontSize="2xl"
                  placeholder="example@email.com"
                  bg="white"
                  height={20}
                  _hover={{
                    boxShadow: "rgba(245, 158, 11) 0px 0px 0px 5px",
                  }}
                  _focus={{
                    boxShadow: "rgba(245, 158, 11) 0px 0px 0px 5px",
                  }}
                />
                <InputRightElement width={40} p={2} height="full">
                  <Button
                    color="white"
                    height="full"
                    width="full"
                    fontSize="lg"
                    bg="gray.900"
                    _hover={{
                      bg: "gray.800",
                    }}
                  >
                    Send
                  </Button>
                </InputRightElement>
              </InputGroup>
              {/* <Image
                                height={64}
                                objectFit="cover"
                                src="/images/sbd-modal.png"
                            /> */}
            </Box>
          </ModalBody>
          {/* <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant="ghost">Secondary Action</Button>
                    </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
}

export default Home;
