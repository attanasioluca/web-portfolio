import {
    Box,
    Button,
    Input,
    Textarea,
    FormControl,
    FormLabel,
    useColorModeValue,
  } from "@chakra-ui/react";
  
  const ContactForm = () => {
    const bg = useColorModeValue("gray.50", "gray.800");
    const border = useColorModeValue("gray.300", "gray.600");
    const text = useColorModeValue("gray.800", "gray.100");
  
    return (
      <Box w="100%">
        <Box bg={bg} p={{ base: 6, md: 10 }} rounded="xl" shadow="xl">
          <Box fontSize="2xl" fontWeight="semibold" color={text} mb={8}>
            Contact Form
          </Box>
  
          <form onSubmit={(e) => e.preventDefault()}>
            {/* FULL NAME */}
            <FormControl mb={4}>
              <FormLabel>Full Name</FormLabel>
              <Input
                placeholder="Your Name"
                bg={bg}
                borderColor={border}
                color={text}
              />
            </FormControl>
  
            {/* EMAIL */}
            <FormControl mb={4}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Your email"
                bg={bg}
                borderColor={border}
                color={text}
              />
            </FormControl>
  
            {/* SUBJECT */}
            <FormControl mb={4}>
              <FormLabel>Subject</FormLabel>
              <Input
                placeholder="Subject"
                bg={bg}
                borderColor={border}
                color={text}
              />
            </FormControl>
  
            {/* MESSAGE */}
            <FormControl mb={6}>
              <FormLabel>Message</FormLabel>
              <Textarea
                rows={6}
                placeholder="Your message"
                bg={bg}
                borderColor={border}
                color={text}
              />
            </FormControl>
  
            <Button
              type="submit"
              bg="brand.500"
              color="white"
              w="40"
              py={2}
              _hover={{ bg: "brand.600" }}
              rounded="lg"
            >
              Send Message
            </Button>
          </form>
        </Box>
      </Box>
    );
  };
  
  export default ContactForm;
  