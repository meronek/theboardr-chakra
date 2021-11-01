/* eslint-disable @next/next/no-img-element */
/* eslint-disable sonarjs/no-nested-template-literals */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Heading, Text, Stack, SimpleGrid, Link } from "@chakra-ui/react";

function escapeHtml(text: any) {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&#39;/g, "'");
}

const EventListing: any = ({ eventDetail }: any) => {
  // console.log("eventDetail is", eventDetail);
  return (
    <Box w="full" p={6} boxShadow="md">
      <Box>
        <Link
          href={`/events/${eventDetail.EventID}/${eventDetail.Title.replace(
            / /g,
            "_"
          )}`}
          title={escapeHtml(eventDetail.Title)}
          style={{ color: "black" }}
        >
          <img
            src={
              eventDetail.HeroImage === 1
                ? `https://theboardr.blob.core.windows.net/eventsicons/${eventDetail.EventID}hero600.jpg`
                : `https://theboardr.blob.core.windows.net/eventsicons/${eventDetail.EventID}.jpg`
            }
            alt="Event"
            title="Event"
          />
        </Link>
      </Box>
      <Stack>
        <Text
          textTransform="uppercase"
          fontWeight={800}
          fontSize="lg"
          letterSpacing={1.1}
        >
          {escapeHtml(eventDetail.StartDateText)} at{" "}
          {escapeHtml(eventDetail.Location)}
        </Text>
        <Heading fontSize="2xl">
          <Link
            href={`/events/${eventDetail.EventID}/${eventDetail.Title.replace(
              / /g,
              "_"
            )}`}
            title={eventDetail.Title}
            style={{ color: "black" }}
          >
            {eventDetail.Title}
          </Link>
        </Heading>
        <Text>{escapeHtml(eventDetail.ShortDescription)}</Text>
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
      <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={5}>
        {upcomingEvents.map((eventDetail: any) => (
          <EventListing eventDetail={eventDetail} key={eventDetail.EventID} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
