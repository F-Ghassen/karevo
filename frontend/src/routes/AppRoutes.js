import React from "react";

import { Routes, Route } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react"; // Import Chakra UI components

import HomePage from "../pages/HomePage";
import VideoFeed from "../components/VideoFeed";
import ConfidenceForm from "../components/ConfidenceForm";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/confidence" element={<ConfidenceForm />} />
      <Route path="/video" element={<VideoFeed />} />
      <Route
        path="/"
        element={
          <Box p={5}>
            <Text fontSize="2xl">
              Welcome to the Potato Defect Classification App
            </Text>
          </Box>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
