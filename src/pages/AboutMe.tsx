import { Container } from "@chakra-ui/react";
import { AboutMeProvider } from "../context/AboutMeContext.tsx";
import AboutMeBio from "../components/about/AboutMeBio.tsx";
import { motion } from "framer-motion";

const MotionContainer = motion(Container);

const About = () => {
  return (
    <AboutMeProvider>
      <MotionContainer
        maxW="container.lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        py={{ base: 6, md: 10 }}
      >
        <AboutMeBio />
      </MotionContainer>

      {/* Empty second container removed because it did nothing */}
    </AboutMeProvider>
  );
};

export default About;
