import { Flex, Container } from "@chakra-ui/react";
import { motion } from "framer-motion";
import ContactForm from "../components/contact/ContactForm";
import ContactDetails from "../components/contact/ContactDetails";

const MotionFlex = motion.create(Flex);

const Contact = () => {
  return (
    <Container maxW="container.lg" py={{ base: 6, lg: 10 }} mt={{ lg: 10 }}>
      <MotionFlex
        direction={{ base: "column-reverse", lg: "row" }}
        gap={{ base: 10, lg: 16 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
      >
        <ContactForm />
        <ContactDetails />
      </MotionFlex>
    </Container>
  );
};

export default Contact;
