import React from "react";
import { Box } from "@chakra-ui/react";

const VideoFeed = () => {
  return (
    <Box
      p={5}
      borderWidth={1}
      borderRadius="md"
      boxShadow="md"
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <video width="100%" height="auto" controls>
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </Box>
  );
};

export default VideoFeed;
