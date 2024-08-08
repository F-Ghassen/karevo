import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Text,
  VStack,
} from "@chakra-ui/react";

const ConfidenceForm = () => {
  const [greeningRange, setGreeningRange] = useState([0.5, 0.5]);
  const [malformedRange, setMalformedRange] = useState([0.5, 0.5]);
  const [response, setResponse] = useState("");

  const handleGreeningChange = (val) => setGreeningRange(val);
  const handleMalformedChange = (val) => setMalformedRange(val);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      greening_min: greeningRange[0],
      greening_max: greeningRange[1],
      malformed_min: malformedRange[0],
      malformed_max: malformedRange[1],
    };

    console.log(data);

    try {
      const res = await fetch("http://localhost:8000/api/v1/confidence", {
        // Updated URL
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        const result = await res.json();
        setResponse(
          result.message || "Confidence levels updated successfully!"
        );
      } else {
        setResponse("Error updating confidence levels.");
      }
    } catch (error) {
      console.error("Error:", error);
      setResponse("Error updating confidence levels.");
    }
  };

  return (
    <Box p={5} borderWidth={1} borderRadius="md" boxShadow="md">
      <VStack spacing={5}>
        <Text fontSize="2xl" mb={5}>
          Update Confidence Levels for Potato Defects
        </Text>
        <form onSubmit={handleSubmit}>
          <FormControl mb={5}>
            <FormLabel>Greening Confidence Range:</FormLabel>
            <RangeSlider
              defaultValue={[0.5, 0.5]}
              min={0}
              max={1}
              step={0.01}
              onChangeEnd={handleGreeningChange}
            >
              <RangeSliderTrack>
                <RangeSliderFilledTrack />
              </RangeSliderTrack>
              <RangeSliderThumb index={0} />
              <RangeSliderThumb index={1} />
            </RangeSlider>
            <Text mt={2}>
              Min: {greeningRange[0]}, Max: {greeningRange[1]}
            </Text>
          </FormControl>
          <FormControl mb={5}>
            <FormLabel>Malformed Confidence Range:</FormLabel>
            <RangeSlider
              defaultValue={[0.5, 0.5]}
              min={0}
              max={1}
              step={0.01}
              onChangeEnd={handleMalformedChange}
            >
              <RangeSliderTrack>
                <RangeSliderFilledTrack />
              </RangeSliderTrack>
              <RangeSliderThumb index={0} />
              <RangeSliderThumb index={1} />
            </RangeSlider>
            <Text mt={2}>
              Min: {malformedRange[0]}, Max: {malformedRange[1]}
            </Text>
          </FormControl>
          <Button type="submit" colorScheme="teal">
            Update
          </Button>
        </form>
        {response && <Text mt={5}>{response}</Text>}
      </VStack>
    </Box>
  );
};

export default ConfidenceForm;
