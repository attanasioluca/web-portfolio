import { useParams } from "react-router-dom";
import { Box, Heading, Text, Image, VStack, useColorModeValue } from "@chakra-ui/react";
import { projectsDetails } from "../data/projectDetails";
import type { ProjectDetail } from "../types/ProjectDetail.ts";

const ProjectDetailPage = () => {
  const { id } = useParams();
  const project: ProjectDetail | undefined = projectsDetails.find(
    (p) => p.id.toString() === id
  );

  const text = useColorModeValue("gray.800", "gray.100");

  if (!project) {
    return (
      <Box p={10}>
        <Heading color={text}>Project not found.</Heading>
      </Box>
    );
  }

  return (
    <Box maxW="900px" mx="auto" p={6}>
      {/* Title */}
      <Heading mb={4} color={text}>
        {project.title}
      </Heading>

      {/* Category & Date */}
      <Text fontSize="lg" color={text} opacity={0.7}>
        {project.category} • {project.date}
      </Text>

      {/* Hero Image */}
      <Image
        src={project.img}
        alt={project.title}
        rounded="lg"
        shadow="lg"
        mt={6}
      />

      {/* Body */}
      <VStack align="flex-start" spacing={6} mt={8}>
        {project.sections.map((section) => (
          <Box key={section.title}>
            <Heading fontSize="2xl" mb={2} color={text}>
              {section.title}
            </Heading>
            <Text fontSize="md" lineHeight="1.8" color={text}>
              {section.body}
            </Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default ProjectDetailPage;
