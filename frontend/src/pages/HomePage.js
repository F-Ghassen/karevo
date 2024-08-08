import React from "react";
import { Flex, Box, Heading } from "@chakra-ui/react";
import VideoFeed from "../components/VideoFeed";
import ConfidenceForm from "../components/ConfidenceForm";

const HomePage = () => {
  return (
    <Flex direction="column" p={5}>
      <Heading as="h1" mb={8} textAlign="center">
        Potato Defect Classification
      </Heading>

      <Flex direction={{ base: "column", md: "row" }} justify="space-between">
        {/* Confidence Form on the left */}
        <Box flex="1" mb={{ base: 8, md: 0 }} mr={{ md: 5 }}>
          <ConfidenceForm />
        </Box>

        {/* Video Feed on the right */}
        <Box flex="2">
          <VideoFeed />
        </Box>
      </Flex>
    </Flex>
  );
};

export default HomePage;
