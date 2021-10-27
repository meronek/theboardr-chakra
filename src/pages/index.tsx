/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Box,
} from "@chakra-ui/react";
import { GetStaticProps } from "next";

import clientPromise from "../../lib/mongodb";

const Home = (data: any) => {
  // console.log("data is", data);
  const {
    data: { randomHeroImage },
  } = data;
  return (
    <>
      <Flex
        w="full"
        h="100vh"
        backgroundImage={`url(${randomHeroImage})`}
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
      <Flex>
        <Box>
          <Text
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
            ml={useBreakpointValue({ base: 2, md: 0 })}
          >
            what the fuck
          </Text>
          <Text ml={useBreakpointValue({ base: 2, md: 0 })}>
            a paragraph o shit
          </Text>
        </Box>
      </Flex>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  // adding a list of front page hero images to randomly pick from to cycle through
  const client = await clientPromise;
  // const isConnected = await client.isConnected();
  // console.log("isConnected is", isConnected);

  let isConnected;
  try {
    await clientPromise;
    isConnected = true;
  } catch (e) {
    // console.log("Error connecting to MongoDB:", e);
    isConnected = false;
  }
  // console.log("isConnected is", isConnected);

  if (!isConnected) await client.connect();
  const mongoResponse = await client
    .db("theboardr")
    .collection("heroimagepool")
    .find()
    .toArray();
  // console.log(
  //   "mongoResponse is",
  //   mongoResponse,
  //   "use that object to return a random image"
  // );
  const randomHeroImage =
    mongoResponse[Math.floor(Math.random() * mongoResponse.length)];
  // console.log("randomHeroImage is", randomHeroImage);

  // console.log("participationDetailsList", participationDetailsList);
  return {
    props: {
      data: { randomHeroImage: randomHeroImage.url },
    },
    revalidate: 60,
  };
};
