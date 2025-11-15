import { useContext } from "react";
import { Box, Heading, Grid, useColorModeValue } from "@chakra-ui/react";
import { ProjectsContext } from "../../context/ProjectsContext.tsx";
import ProjectSingle from "./ProjectSingle.tsx";

const ProjectsGrid = () => {
  const { projects } = useContext(ProjectsContext);

  const text = useColorModeValue("gray.800", "gray.100");

  return (
    <Box py={{ base: 5, sm: 10 }} mt={{ base: 5, sm: 10 }}>
      <Box textAlign="center">
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} color={text}>
          Projects Portfolio
        </Heading>
      </Box>

      <Grid
        templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
        gap={{ base: 6, sm: 10 }}
        mt={10}
      >
        {projects.map((project) => (
          <ProjectSingle key={project.id} project={project} />
        ))}
      </Grid>
    </Box>
  );
};

export default ProjectsGrid;
