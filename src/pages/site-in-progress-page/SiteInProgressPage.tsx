import { Box, Center, Img, Text, VStack } from "@chakra-ui/react";
import tonyImg from "../../assets/tony.jpg";

const SiteInProgressPage = () => {
  return (
    <Box height="100vh">
      <Center height="80%">
        <VStack spacing="10">
          <Text fontSize="3xl">Site in progress. Come back soon!</Text>
          <Img src={tonyImg} alt="Tony" height="2xs" />
        </VStack>
      </Center>
    </Box>
  );
};

export default SiteInProgressPage;
