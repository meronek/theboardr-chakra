/* eslint-disable @next/next/no-img-element */
/* eslint-disable sonarjs/no-nested-template-literals */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Heading, Text, Stack, SimpleGrid } from "@chakra-ui/react";

const EventListing: any = ({ eventDetail }: any) => {
  // console.log("eventDetail is", eventDetail);
  return (
    <Box w="full" p={6}>
      <Box>
        <img
          src={
            eventDetail.HeroImage === 1
              ? `https://theboardr.blob.core.windows.net/eventsicons/${eventDetail.EventID}hero600.jpg`
              : `https://theboardr.blob.core.windows.net/eventsicons/${eventDetail.EventID}.jpg`
          }
          alt="Event"
          title="Event"
        />
      </Box>
      <Stack>
        <Text
          textTransform="uppercase"
          fontWeight={800}
          fontSize="lg"
          letterSpacing={1.1}
        >
          {eventDetail.StartDateText} at {eventDetail.Location}
        </Text>
        <Heading fontSize="2xl">{eventDetail.Title}</Heading>
        <Text>{eventDetail.ShortDescription}</Text>
      </Stack>
    </Box>
  );
};

export default function UpcomingEvents(props: any) {
  const { upcomingEvents } = props;
  // console.log("upcomingEvents is", upcomingEvents);

  return (
    <Box mb={10} mt={10}>
      <Heading as="h3" fontSize="3xl">
        Upcoming Events
      </Heading>
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }}>
        {upcomingEvents.map((eventDetail: any) => (
          <EventListing eventDetail={eventDetail} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
