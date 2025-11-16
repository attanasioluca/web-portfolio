import { Container, Flex, Button as ChakraButton } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import AppBanner from "../components/shared/AppBanner";
import ProjectsGrid from "../components/projects/ProjectsGrid.tsx";
import { ProjectsProvider } from "../context/ProjectsContext.tsx";

const Home = () => {
  return (
    <Container maxW={{ base: "100%", md: "750px", lg: "1000px", xl: "1300px" }} py={{ base: 6, md: 10 }}>
      {/* Banner */}
      <AppBanner />

      {/* Projects Section */}
      <ProjectsProvider>
        <ProjectsGrid />
      </ProjectsProvider>

      {/* More Projects Button */}
      <Flex justify="center" mt={{ base: 8, sm: 10 }}>
        <ChakraButton
          as={Link}
          to="/projects"
          size="lg"
          px={8}
          py={6}
          bg="purple.500"
          color="white"
          rounded="lg"
          fontSize={{ base: "lg", sm: "xl" }}
          shadow="md"
          _hover={{ bg: "purple.600", shadow: "lg" }}
          transition="0.2s ease"
        >
          More Projects
        </ChakraButton>
      </Flex>
    </Container>
  );
};

export default Home;
