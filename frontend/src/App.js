import "./App.css";

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Flex, Box } from "@chakra-ui/react"; // Import Flex and Text

import VerticalNavBar from "./components/VerticalNavBar";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <Router>
      <Flex>
        <VerticalNavBar />
        <Box flex="1" p={5}>
          <AppRoutes />
        </Box>
      </Flex>
    </Router>
  );
}

export default App;
