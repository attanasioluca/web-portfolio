import {
    Box,
    Flex,
    Heading,
    Text,
    Button,
    HStack,
    VStack,
    useColorModeValue,
  } from "@chakra-ui/react";
  
  import { FiArrowDownCircle } from "react-icons/fi";
  import { motion } from "framer-motion";
  import useThemeSwitcher from "../../hooks/useThemeSwitcher";
  
  import developerLight from "../../images/developer.svg";
  import developerDark from "../../images/developer-dark.svg";
  
  const MotionBox = motion(Box);
  
  const AppBanner = () => {
    const [activeTheme] = useThemeSwitcher();
  
    const cardBg = useColorModeValue("white", "gray.800");
    const cardBorder = useColorModeValue("gray.200", "gray.600");
    const textColor = useColorModeValue("gray.700", "gray.200");
    const subTextColor = useColorModeValue("gray.600", "gray.300");
  
    return (
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        gap={{ base: 12, md: 8 }}
        mt={{ base: 16, md: 20 }}
        px={{ base: 2, md: 0 }}
      >
        {/* LEFT SIDE */}
        <VStack
          align="flex-start"
          spacing={6}
          w={{ base: "100%", md: "40%" }}
        >
          {/* Title */}
          <MotionBox
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Heading
              fontSize={{ base: "2xl", lg: "3xl", xl: "4xl" }}
              color={textColor}
              lineHeight="1.2"
            >
              Hi, I'm Luca
            </Heading>
          </MotionBox>
  
          {/* Subtitle */}
          <MotionBox
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Text
              fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
              color={subTextColor}
              maxW="90%"
            >
              A Computer Engineer with a passion for Full-Stack Software
              Development
            </Text>
          </MotionBox>
  
          {/* CV CARD */}
          <MotionBox
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            bg={cardBg}
            border="1px solid"
            borderColor={cardBorder}
            rounded="lg"
            shadow="card"
            p={4}
            w="fit-content"
          >
            <Text
              fontWeight="semibold"
              fontSize="lg"
              color={textColor}
              mb={2}
            >
              Download my CV
            </Text>
  
            <HStack spacing={3}>
              <Button
                as="a"
                href="/files/CV-IT.pdf"
                download="ATTANASIO_LUCA_CV_IT.pdf"
                leftIcon={<FiArrowDownCircle />}
                size="sm"
                bg="brand.500"
                color="white"
                rounded="md"
                shadow="soft"
                _hover={{ bg: "brand.600", shadow: "md" }}
              >
                Italian
              </Button>
  
              <Button
                as="a"
                href="/files/CV-EN.pdf"
                download="ATTANASIO_LUCA_CV_EN.pdf"
                leftIcon={<FiArrowDownCircle />}
                size="sm"
                bg="brand.500"
                color="white"
                rounded="md"
                shadow="soft"
                _hover={{ bg: "brand.600", shadow: "md" }}
              >
                English
              </Button>
            </HStack>
          </MotionBox>
        </VStack>
  
        {/* RIGHT IMAGE */}
        <MotionBox
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          w={{ base: "100%", md: "50%" }}
          textAlign="center"
        >
          <img
            src={activeTheme === "dark" ? developerLight : developerDark}
            alt="Developer"
            style={{
              maxWidth: "100%",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </MotionBox>
      </Flex>
    );
  };
  
  export default AppBanner;
  