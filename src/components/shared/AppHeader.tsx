import { useState } from "react";
import {
  Box,
  Flex,
  IconButton,
  HStack,
  VStack,
  Button,
  useColorMode,
  useColorModeValue,
  Link as ChakraLink,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { FiMenu, FiX, FiHome, FiSun, FiMoon } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

import HireMeModal from "../HireMeModal.tsx";

const MotionBox = motion.create(Box);

const AppHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

  const bgIcon = useColorModeValue("white", "gray.800");
  const iconColor = useColorModeValue("gray.700", "gray.200");


  return (
    <>
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        w="100%"
        px={4}
        py={4}
        maxW={{ base: "100%", md: "750px", lg: "1000px", xl: "1300px" }}
        mx="auto"
      >
        {/* NAVBAR ROOT */}
        <Flex justify="space-between" align="center">
          {/* LEFT SIDE */}
          <Flex align="center" gap={4}>
            <Box
              as={Link}
              to="/"
              bg={bgIcon}
              p={3}
              rounded="xl"
              shadow="md"
            >
              <FiHome size={20} color={iconColor} />
            </Box>

            {/* Desktop Nav */}
            <HStack
              spacing={6}
              display={{ base: "none", md: "flex" }}
              fontSize="lg"
              fontWeight="medium"
            >
              <ChakraLink as={Link} to="/projects">Projects</ChakraLink>
              <ChakraLink as={Link} to="/about">About Me</ChakraLink>
              <ChakraLink as={Link} to="/contact">Contact</ChakraLink>
            </HStack>
          </Flex>

          {/* RIGHT SIDE */}
          <HStack spacing={4}>
            {/* Desktop Hire Me */}
            <Button
              display={{ base: "none", md: "flex" }}
              bg="brand.500"
              color="white"
              _hover={{ bg: "brand.600" }}
              onClick={() => setShowModal(true)}
            >
              Hire Me
            </Button>

            {/* Theme Switch */}
            <IconButton
              aria-label="Toggle theme"
              icon={colorMode === "dark" ? <FiMoon /> : <FiSun />}
              onClick={toggleColorMode}
              bg={bgIcon}
              shadow="md"
              rounded="xl"
            />

            {/* Mobile Menu Button */}
            <IconButton
              aria-label="Menu"
              icon={isOpen ? <FiX /> : <FiMenu />}
              onClick={() => setIsOpen(!isOpen)}
              display={{ base: "flex", md: "none" }}
              bg={bgIcon}
              shadow="md"
              rounded="xl"
            />
          </HStack>
        </Flex>

        {/* MOBILE MENU — replaced Collapse */}
        <AnimatePresence>
          {isOpen && (
            <MotionBox
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              mt={4}
              p={4}
              rounded="lg"
              shadow="md"
              bg={useColorModeValue("gray.100", "gray.700")}
            >
              <VStack spacing={4}>
                <ChakraLink as={Link} to="/projects" onClick={() => setIsOpen(false)}>
                  Projects
                </ChakraLink>
                <ChakraLink as={Link} to="/about" onClick={() => setIsOpen(false)}>
                  About Me
                </ChakraLink>
                <ChakraLink as={Link} to="/contact" onClick={() => setIsOpen(false)}>
                  Contact
                </ChakraLink>

                {/* Mobile Hire Me */}
                <Button
                  bg="brand.500"
                  color="white"
                  w="full"
                  _hover={{ bg: "brand.600" }}
                  onClick={() => {
                    setShowModal(true);
                    setIsOpen(false);
                  }}
                >
                  Hire Me
                </Button>
              </VStack>
            </MotionBox>
          )}
        </AnimatePresence>
      </MotionBox>

      {/* Hire Me Modal */}
      {showModal && <HireMeModal onClose={() => setShowModal(false)} isOpen={showModal} />}
    </>
  );
};

export default AppHeader;
