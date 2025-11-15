import {
    Box,
    Flex,
    VStack,
    HStack,
    Text,
    IconButton,
    useColorModeValue,
    Link as ChakraLink,
  } from "@chakra-ui/react";
  
  import {
    FiGithub,
    FiLinkedin,
    FiGlobe,
    FiInfo,
  } from "react-icons/fi";
  
  const socialLinks = [
    {
      id: 1,
      icon: FiGlobe,
      url: "https://www.attanasioluca.it/",
    },
    {
      id: 2,
      icon: FiGithub,
      url: "https://github.com/attanasioluca",
    },
    {
      id: 3,
      icon: FiInfo,
      url: "https://profile.indeed.com/?hl=it_IT&co=IT",
    },
    {
      id: 4,
      icon: FiLinkedin,
      url: "https://www.linkedin.com/in/luca-attanasio-a6264328a/",
    },
  ];
  
  const AppFooter = () => {
    const borderColor = useColorModeValue("gray.200", "gray.600");
    const iconBg = useColorModeValue("gray.100", "gray.700");
    const iconHoverBg = useColorModeValue("gray.200", "gray.600");
    const iconColor = useColorModeValue("gray.600", "gray.300");
    const iconHoverColor = useColorModeValue("brand.500", "brand.300");
  
    return (
      <Box w="100%" mt={24} pt={16} pb={8} borderTop="1px solid" borderColor={borderColor}>
        <Flex justify="center">
          <VStack spacing={8} textAlign="center">
            
            {/* Title */}
            <Text
              fontSize={{ base: "2xl", sm: "3xl" }}
              fontWeight="semibold"
              color={useColorModeValue("gray.800", "gray.100")}
            >
              Get to know me:
            </Text>
  
            {/* Social Icons */}
            <HStack spacing={{ base: 4, sm: 6, md: 8 }}>
              {socialLinks.map((link) => (
                <ChakraLink
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  _hover={{ textDecoration: "none" }}
                >
                  <IconButton
                    aria-label="social link"
                    icon={<link.icon size={26} />}
                    bg={iconBg}
                    color={iconColor}
                    rounded="xl"
                    shadow="soft"
                    p={3}
                    transition="all 0.2s ease"
                    _hover={{
                      bg: iconHoverBg,
                      color: iconHoverColor,
                      shadow: "md",
                    }}
                  />
                </ChakraLink>
              ))}
            </HStack>
  
          </VStack>
        </Flex>
      </Box>
    );
  };
  
  export default AppFooter;
  