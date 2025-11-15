import { type Project } from "../../types/Project";
import {
  Box,
  Image,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface Props {
  project: Project;
}

const ProjectSingle = ({ project }: Props) => {
  const cardBg = useColorModeValue("gray.100", "gray.700");
  const text = useColorModeValue("gray.800", "gray.100");

  return (
    <Link to={`/projects/${project.id}`}>
      <Box
        bg={cardBg}
        rounded="xl"
        shadow="md"
        overflow="hidden"
        cursor="pointer"
        transition="0.2s"
        _hover={{ shadow: "xl", transform: "scale(1.01)" }}
      >
        <Image src={project.img} alt={project.title} />

        <VStack p={4} align="flex-start" spacing={2}>
          <Text fontSize="xl" fontWeight="semibold" color={text}>
            {project.title}
          </Text>

          <Text fontSize="md" color={text}>
            {project.category}
          </Text>
        </VStack>
      </Box>
    </Link>
  );
};

export default ProjectSingle;
