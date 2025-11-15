import { Box, VStack, HStack, Text, Icon, Heading, useColorModeValue } from "@chakra-ui/react";
import { FiPhone, FiMapPin, FiMail } from "react-icons/fi";

const contacts = [
  { id: 1, name: "Rome (RM), Italy", icon: FiMapPin },
  { id: 2, name: "attanasioluca02@gmail.com", icon: FiMail },
  { id: 3, name: "+39 3388162716", icon: FiPhone },
];

const ContactDetails = () => {
  const headingColor = useColorModeValue("gray.800", "gray.100");
  const textColor = useColorModeValue("gray.700", "gray.300");
  const iconColor = useColorModeValue("gray.500", "gray.400");

  return (
    <Box w={{ base: "100%", lg: "50%" }}>

      <Box textAlign="left" maxW="xl" px={6}>
        <Heading fontSize="2xl" mt={12} mb={8} color={headingColor}>
          Contact Details
        </Heading>

        <VStack align="flex-start" spacing={5}>
          {contacts.map(({ id, name, icon }) => (
            <HStack key={id} spacing={4}>
              <Icon as={icon} boxSize={6} color={iconColor} />
              <Text fontSize="lg" color={textColor}>
                {name}
              </Text>
            </HStack>
          ))}
        </VStack>
      </Box>
    </Box>
  );
};

export default ContactDetails;
