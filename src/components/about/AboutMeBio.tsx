import { useContext } from "react";
import {
  Flex,
  Box,
  Image,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import profileImage from "../../images/profile.jpeg";
import {AboutMeContext} from "../../context/AboutMeContext";

const AboutMeBio = () => {
  const { aboutMe } = useContext(AboutMeContext);

  const textColor = useColorModeValue("gray.700", "gray.200");

  return (
    <Flex
      direction={{ base: "column", sm: "row" }}
      gap={{ base: 8, sm: 10 }}
      mt={{ base: 10, sm: 20 }}
    >
      {/* IMAGE */}
      <Box w={{ base: "100%", sm: "30%" }} mb={{ base: 6, sm: 0 }}>
        <Image
          src={profileImage}
          alt="Profile"
          rounded="lg"
          w="100%"
          maxW="260px"
          objectFit="cover"
        />
      </Box>

      {/* BIO TEXT */}
      <VStack
        align="flex-start"
        spacing={4}
        w={{ base: "100%", sm: "70%" }}
      >
        {aboutMe.map((bio) => (
          <Text
            key={bio.id}
            fontSize="lg"
            color={textColor}
            lineHeight="1.7"
          >
            {bio.bio}
          </Text>
        ))}
      </VStack>
    </Flex>
  );
};

export default AboutMeBio;
