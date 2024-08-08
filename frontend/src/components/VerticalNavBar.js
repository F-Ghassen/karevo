import React from "react";
import { Box, VStack, Link, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

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
        <Link to="/">
          <img
            src={`${process.env.PUBLIC_URL}/karevo_logo.jpeg`}
            alt="Karevo Logo"
            width="150"
          />
        </Link>
        <Text fontSize="2xl" mb={5}>
          Karevo App
        </Text>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            textDecoration: "none",
            padding: "8px 16px",
            borderRadius: "4px",
            backgroundColor: isActive ? "#3182CE" : "transparent",
            color: isActive ? "white" : "inherit",
          })}
        >
          <Text>Home</Text>
        </NavLink>
        <NavLink
          to="/confidence"
          style={({ isActive }) => ({
            textDecoration: "none",
            padding: "8px 16px",
            borderRadius: "4px",
            backgroundColor: isActive ? "#3182CE" : "transparent",
            color: isActive ? "white" : "inherit",
          })}
        >
          <Text>Confidence Levels</Text>
        </NavLink>
        <NavLink
          to="/video"
          style={({ isActive }) => ({
            textDecoration: "none",
            padding: "8px 16px",
            borderRadius: "4px",
            backgroundColor: isActive ? "#3182CE" : "transparent",
            color: isActive ? "white" : "inherit",
          })}
        >
          <Text> Video Feed</Text>
        </NavLink>
        {/* Add more links as needed */}
      </VStack>
    </Box>
  );
};

export default VerticalNavBar;
