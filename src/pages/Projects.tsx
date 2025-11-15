import { Container } from "@chakra-ui/react";
import ProjectsGrid from "../components/projects/ProjectsGrid";
import { ProjectsProvider } from "../context/ProjectsContext";

const Projects = () => {
  return (
    <ProjectsProvider>
      <Container maxW="container.lg" py={{ base: 6, md: 10 }}>
        <ProjectsGrid />
      </Container>
    </ProjectsProvider>
  );
};

export default Projects;
