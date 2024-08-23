import { Box, VStack } from "@chakra-ui/react";

interface Props {}

const HomePage = ({}: Props) => {
  return (
    <VStack spacing="0">
      <Block color="lightblue" />
      <Block color="lightyellow" />
      <Block color="lightpink" />
    </VStack>
  );
};

const Block = ({ color }: { color: string }) => {
  return <Box backgroundColor={color} height="80vh" width="full" />;
};

export default HomePage;
