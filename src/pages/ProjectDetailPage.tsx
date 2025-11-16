import { useParams } from "react-router-dom";
import {
  Box,
  Heading,
  Text,
  Image,
  VStack,
  useColorModeValue,
  Spinner,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { projectsDetails } from "../data/projectDetails";
import type { ProjectDetail } from "../types/ProjectDetail";

const ProjectDetailPage = () => {
  const { id } = useParams();
  const project: ProjectDetail | undefined = projectsDetails.find(
    (p) => p.id.toString() === id
  );

  const text = useColorModeValue("gray.800", "gray.100");
  const [readme, setReadme] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!project?.repo) return;

    const fetchReadme = async () => {
      try {
        const url = `https://raw.githubusercontent.com/attanasioluca/${project.repo}/main/README.md`;
        const res = await fetch(url);
        const md = await res.text();
        setReadme(md);
      } catch {
        setReadme("Failed to load README.");
      } finally {
        setLoading(false);
      }
    };

    fetchReadme();
  }, [project]);

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

      <VStack align="flex-start" spacing={6} mt={8} w="100%">
        {loading ? (
          <Spinner size="xl" color={text} />
        ) : (
          <Box
            className="markdown-body"
            width="100%"
            color={text}
            fontSize="md"
            sx={{
              h1: { fontSize: "2xl", marginTop: 4, marginBottom: 2 },
              h2: { fontSize: "xl", marginTop: 4, marginBottom: 2 },
              h3: { fontSize: "lg", marginTop: 4, marginBottom: 2 },
              p: { marginBottom: 3, lineHeight: "1.8" },
              ul: { marginLeft: 6, marginBottom: 3 },
              code: {
                background: useColorModeValue("#f5f5f5", "#222"),
                padding: "2px 6px",
                borderRadius: "6px",
              },
            }}
          >
            <ReactMarkdown>{readme}</ReactMarkdown>
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default ProjectDetailPage;
