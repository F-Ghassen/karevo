import React from "react";
import { Box, VStack, Link, Text, Image } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const VerticalNavBar = () => {
  return (
    <Box
      w="200px"
      p={5}
      borderRightWidth={1}
      borderColor="gray.200"
      height="100vh"
      bg="gray.50"
    >
      <VStack spacing={4} align="stretch">
        <Image
          src="/karevo_logo.jpeg"
          alt="Karevo Logo"
          boxSize="150px"
          objectFit="contain"
          mb={5}
        />

        <Text fontSize="2xl" mb={5}>
          Menu
        </Text>
        <Link as={RouterLink} to="/" fontSize="lg">
          Home
        </Link>
        <Link as={RouterLink} to="/confidence" fontSize="lg">
          Confidence Levels
        </Link>
        <Link as={RouterLink} to="/video" fontSize="lg">
          Video Feed
        </Link>
        {/* Add more links as needed */}
      </VStack>
    </Box>
  );
};

export default VerticalNavBar;
