import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Select,
    Button,
    useColorModeValue,
  } from "@chakra-ui/react";
  import React, { useState } from "react";
  
  const selectOptions = [
    "WebDev / Software Engineer",
    "Machine Learning / AI Engineer",
    "Data Scientist",
    "Other",
  ];
  
  type HireMeModalProps = {
    isOpen: boolean;
    onClose: () => void;
  };
  
  const HireMeModal: React.FC<HireMeModalProps> = ({ isOpen, onClose }) => {
    const bg = useColorModeValue("gray.50", "gray.800");
    const border = useColorModeValue("gray.300", "gray.600");
  
    // FORM STATE
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [message, setMessage] = useState("");
  
    const handleSubmit = () => {
      if (!name || !email || !role || !message) {
        alert("Please fill out all fields.");
        return;
      }
  
      // otherwise close modal
      onClose();
    };
  
    return (
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="lg">
        <ModalOverlay />
        <ModalContent bg={bg}>
          <ModalHeader fontSize="xl" fontWeight="bold">
            What role are you looking for?
          </ModalHeader>
          <ModalCloseButton />
  
          <ModalBody>
            <FormControl mb={4}>
              <FormLabel>Name (or company name)</FormLabel>
              <Input
                placeholder="Your name"
                bg={bg}
                borderColor={border}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
  
            <FormControl mb={4}>
              <FormLabel>Email</FormLabel>
              <Input
                placeholder="Your email"
                bg={bg}
                borderColor={border}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
  
            <FormControl mb={4}>
              <FormLabel>Position</FormLabel>
              <Select
                placeholder="Select"
                bg={bg}
                borderColor={border}
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                {selectOptions.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </Select>
            </FormControl>
  
            <FormControl mb={6}>
              <FormLabel>Message</FormLabel>
              <Textarea
                rows={5}
                placeholder="Describe the position"
                bg={bg}
                borderColor={border}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </FormControl>
          </ModalBody>
  
          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              bg="brand.500"
              color="white"
              _hover={{ bg: "brand.600" }}
              onClick={handleSubmit}
            >
              Send Request
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  };
  
  export default HireMeModal;
  