import "./App.css";

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Flex, Box, Text } from "@chakra-ui/react"; // Import Flex and Text

import VideoFeed from "./components/VideoFeed";
import ConfidenceForm from "./components/ConfidenceForm";
import VerticalNavBar from "./components/VerticalNavBar";

function App() {
  return (
    <Router>
      <Flex>
        <VerticalNavBar />
        <Box flex="1" p={5}>
          <Routes>
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
        </Box>
      </Flex>
    </Router>
  );
}

export default App;
