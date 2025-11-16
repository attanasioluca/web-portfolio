import { useParams } from "react-router-dom";
import {
    Box,
    Heading,
    Text,
    Image,
    VStack,
    useColorModeValue,
    Spinner,
    HStack,
    Divider,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { projectsDetails } from "../data/projectDetails";
import type { ProjectDetail } from "../types/ProjectDetail";
import { FiGithub } from "react-icons/fi";
import rehypeRaw from "rehype-raw";

const ProjectDetailPage = () => {
    const { id } = useParams();
    const project: ProjectDetail | undefined = projectsDetails.find(
        (p) => p.id.toString() === id
    );

    const text = useColorModeValue("gray.800", "gray.100");
    const githubButtonBg = useColorModeValue("gray.200", "gray.700");
    const borderCol = useColorModeValue("gray.200", "gray.700");
    const codeBg = useColorModeValue("#f1f1f1", "#2d2d2d");
    const linkColor = useColorModeValue("#2b6cb0", "#90cdf4");
    const [readme, setReadme] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if (!project?.repo) return;

        const fetchReadme = async () => {
            try {
                const url = `https://raw.githubusercontent.com/attanasioluca/${project.repo}/main/README.md`;
                const res = await fetch(url);
                const md = await res.text();
                // Fix relative image paths
                // Fix relative Markdown images AND HTML <img> tags
                // Fix relative Markdown images AND HTML <img> tags
                const rewritten = md
                    // Markdown images: ![](path)
                    .replace(
                        /!\[(.*?)\]\((?!http)(.*?)\)/g,
                        (match, alt, path) => {
                            const absolute = `https://raw.githubusercontent.com/attanasioluca/${project.repo}/main/${path}`;
                            match; // needed to allow building
                            return `![${alt}](${absolute})`;
                        }
                    )
                    // HTML images: <img src="path">
                    .replace(
                        /<img\s+[^>]*src=["'](?!http)(.*?)["'][^>]*>/g,
                        (match, path) => {
                            const absolute = `https://raw.githubusercontent.com/attanasioluca/${project.repo}/main/${path}`;
                            return match.replace(path, absolute);
                        }
                    );

                setReadme(rewritten);
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
        <Box
            maxW={{ base: "100%", md: "750px", lg: "1000px", xl: "1300px" }}
            mx="auto"
            px={{ base: 4, md: 6 }}
            py={6}
        >
            {/* Title */}
            <HStack spacing="8px" justifyContent={"space-between"}>
                <VStack>
                    {/* Title */}
                    <Heading mb={1} color={text}>
                        {project.title}
                    </Heading>
                    {/* Category & Date */}
                    <Text
                        fontSize="lg"
                        color={text}
                        opacity={0.7}
                        alignSelf={"start"}
                    >
                        {project.category} • {project.date}
                    </Text>
                </VStack>
                {/* GitHub Button */}
                <Box mr="4">
                    <a
                        href={`https://github.com/attanasioluca/${project.repo}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Box
                            as="button"
                            px={4}
                            py={2}
                            rounded="md"
                            bg={githubButtonBg}
                            color={text}
                            fontWeight="semibold"
                            shadow="sm"
                            transition="0.2s"
                            _hover={{ transform: "scale(1.03)", shadow: "md" }}
                        >
                            <HStack>
                                <FiGithub />
                                <Text>View on GitHub</Text>
                            </HStack>
                        </Box>
                    </a>
                </Box>
            </HStack>

            {/* Hero Image */}
            <Image
                src={project.img}
                alt={project.title}
                rounded="lg"
                shadow="lg"
                my={6}
                width="100%"
                maxH="100%"
                objectFit="cover"
            />
            <Divider />
            <Heading mt="2">Project Description</Heading>
            {/* README */}
            <VStack align="flex-start" spacing={6} mt={4} w="100%">
                {loading ? (
                    <Spinner size="xl" color={text} />
                ) : (
                    <Box
                        width="100%"
                        maxW="100%"
                        maxH={{ base: "70vh", md: "75vh", lg: "80vh" }}
                        overflowY="auto"
                        px={{ base: 2, md: 4, lg: 8 }}
                        py={3}
                        borderRadius="lg"
                        borderWidth="1px"
                        borderColor={borderCol}
                        boxShadow="sm"
                    >
                        <Box
                            className="markdown-body"
                            color={text}
                            fontSize="lg"
                            sx={{
                                // Headings
                                "h1, h2, h3, h4": {
                                    marginTop: "24px",
                                    marginBottom: "12px",
                                    fontWeight: "bold",
                                },
                                h1: { fontSize: "2xl" },
                                h2: { fontSize: "xl" },
                                h3: { fontSize: "lg" },

                                // Paragraphs
                                p: {
                                    marginBottom: "16px",
                                    lineHeight: "1.8",
                                },

                                // Lists
                                ul: {
                                    marginLeft: "24px",
                                    marginBottom: "16px",
                                    lineHeight: "1.8",
                                },

                                // Inline code
                                code: {
                                    background: codeBg,
                                    padding: "2px 6px",
                                    borderRadius: "6px",
                                    fontSize: "0.9em",
                                },

                                // Code blocks
                                pre: {
                                    padding: "12px",
                                    borderRadius: "8px",
                                    overflow: "auto",
                                    background: codeBg,
                                    marginY: "12px",
                                },

                                // Links
                                a: {
                                    color: linkColor,
                                    textDecoration: "underline",
                                    _hover: { opacity: 0.8 },
                                },

                                // Images inside markdown
                                img: {
                                    maxWidth: "100%",
                                    borderRadius: "12px",
                                    marginTop: "16px",
                                    marginBottom: "16px",
                                    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                                },
                            }}
                        >
                            <ReactMarkdown
                                rehypePlugins={[rehypeRaw]}
                                components={{
                                    // UNIVERSAL IMAGE HANDLER (markdown + HTML)
                                    img: ({ src, alt }) => (
                                        <Image
                                            src={src ?? ""}
                                            alt={alt ?? ""}
                                            rounded="lg"
                                            shadow="md"
                                            my={4}
                                            width="100%"
                                            maxH="650px"
                                            objectFit="contain"
                                        />
                                    ),

                                    // SPECIAL HANDLING FOR <p float="left"> (two GIF layout)
                                    p: ({ node, children }) => {
                                        const props: any =
                                            node?.properties || {};

                                        // Handle <p float="left"> for side-by-side GIFs
                                        if (props.float === "left") {
                                            return (
                                                <Box
                                                    display="flex"
                                                    gap="2%"
                                                    justifyContent="space-between"
                                                    flexWrap="wrap"
                                                    my={4}
                                                >
                                                    {/* Each child is an <img> */}
                                                    {(Array.isArray(children)
                                                        ? children
                                                        : [children]
                                                    ).map(
                                                        (
                                                            child: any,
                                                            i: number
                                                        ) => (
                                                            <Box
                                                                key={i}
                                                                width={{
                                                                    base: "100%",
                                                                    md: "49%",
                                                                }}
                                                            >
                                                                {child}
                                                            </Box>
                                                        )
                                                    )}
                                                </Box>
                                            );
                                        }

                                        // Handle <p align="center"> captions
                                        if (props.align === "center") {
                                            return (
                                                <Box
                                                    textAlign="center"
                                                    my={2}
                                                    fontSize="md"
                                                >
                                                    {children}
                                                </Box>
                                            );
                                        }

                                        // Default paragraph
                                        return <Box as="p">{children}</Box>;
                                    },
                                }}
                            >
                                {readme}
                            </ReactMarkdown>
                        </Box>
                    </Box>
                )}
            </VStack>
        </Box>
    );
};

export default ProjectDetailPage;
