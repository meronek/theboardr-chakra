import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

const Home = () => {
  return (
    <Flex
      w="full"
      h="100vh"
      backgroundImage="url(https://theboardr.blob.core.windows.net/photos/10816.jpg)"
      backgroundSize="cover"
      backgroundPosition="center center"
    >
      <VStack
        w="full"
        justify="center"
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient="linear(to-r, blackAlpha.600, transparent)"
      >
        <Stack maxW="2xl" align="flex-start" spacing={6}>
          <Text
            color="white"
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
            ml={useBreakpointValue({ base: 5, md: 0 })}
          >
            The Boardr: Skateboarding and BMX Events
          </Text>
          <Stack direction="row">
            <Button
              bg="whiteAlpha.300"
              rounded="full"
              color="white"
              _hover={{ bg: "whiteAlpha.500" }}
              ml={useBreakpointValue({ base: 5, md: 0 })}
            >
              About Us...
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
};

export default Home;
