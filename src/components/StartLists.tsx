/* eslint-disable @next/next/no-img-element */
/* eslint-disable sonarjs/no-nested-template-literals */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Avatar,
  Accordion,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
  AccordionButton,
  Center,
  Box,
  Heading,
  Link,
  SimpleGrid,
} from "@chakra-ui/react";
import underscore from "underscore";

export default function StartListsAccordian(props: any) {
  const { startListsDetails } = props;
  // console.log("startListsDetails is", startListsDetails);

  const getStartListForEvent = (eventId: number) => {
    const skaterListForEvent = underscore.sortBy(
      startListsDetails.Table.filter(
        (skater: any) => skater.EventID === eventId
      ),
      "JamOrder"
    );
    // console.log("now, skaterListForEvent is", skaterListForEvent);

    // now, get a uniqe jam list so we can group by that
    const listOfUniqueJamIDs = Object.keys(
      underscore.groupBy(skaterListForEvent, "JamID")
    );
    // console.log("listOfUniqueJamIDs is", listOfUniqueJamIDs);
    return listOfUniqueJamIDs.map((jam) => (
      <div>
        <Heading as="h3" fontSize="2xl" mb={5} mt={5}>
          JAM {jam}
        </Heading>

        {skaterListForEvent
          .filter((skater: any) => Number(skater.JamID) === Number(jam))
          .map((skater: any) => (
            <Box borderTop="1px solid lightgrey" mt={5} pb={3} pt={3}>
              <SimpleGrid columns={{ sm: 1, md: 2 }} key={skater.SkaterID}>
                <Box textAlign="right">
                  <Center>
                    <Link
                      href={`https://theboardr.com/profile/${
                        skater.SkaterID
                      }/${skater.SkaterName.replace(/ /g, "_").toLowerCase()}`}
                      title={skater.SkaterName}
                      alt={skater.SkaterName}
                      isExternal
                    >
                      <Avatar
                        src={skater.SkaterMugShot.replace(".jpg", "thumb.jpg")}
                        alt={skater.SkaterName}
                        mr={3}
                      />
                    </Link>

                    <img
                      src={`https://theboardr.com/countries/${skater.CountryCode}.png`}
                      title={`${skater.SkaterName} from ${skater.SkaterCountryName}`}
                      alt={`${skater.SkaterName} from ${skater.SkaterCountryName}`}
                      style={{ width: "30px", height: "30px" }}
                    />
                  </Center>
                </Box>
                <Box textAlign="left">
                  <Link
                    href={`https://theboardr.com/profile/${
                      skater.SkaterID
                    }/${skater.SkaterName.replace(/ /g, "_")}`}
                    title={skater.SkaterName}
                    alt={skater.SkaterName}
                    isExternal
                  >
                    <strong>{skater.SkaterNameAndHometown}</strong>
                    <br />
                    {`Age ${skater.SkaterAge}${
                      skater.Insta && skater.Insta.length > 0
                        ? `, @${skater.Insta.toLowerCase()}`
                        : ""
                    }`}
                  </Link>
                </Box>
              </SimpleGrid>
            </Box>
          ))}
      </div>
    ));
  };

  if (startListsDetails.Table.length < 1) {
    return (
      <Box mb={10} mt={10}>
        <Heading as="h3" fontSize="3xl">
          Start Lists
        </Heading>
        <p>
          The day before each event, check back here to see start lists and who
          is in each Jam. Check{" "}
          <Link href="/events">
            the event details for the full schedule and start times
          </Link>
          .
        </p>
      </Box>
    );
  }
  const listOfUniqueEventIDs = Object.keys(
    underscore.groupBy(startListsDetails.Table, "EventID")
  );
  // console.log("listOfUniqueEventIDs is", listOfUniqueEventIDs);
  const startListSummary = underscore
    .sortBy(
      listOfUniqueEventIDs.map((item) => {
        return {
          EventID: Number(item),
          EventDate: startListsDetails.Table.find(
            (subitem: any) => Number(subitem.EventID) === Number(item)
          ).EventDate,
          Description: startListsDetails.Table.find(
            (subitem: any) => Number(subitem.EventID) === Number(item)
          ).Description,
          totalSkaters: startListsDetails.Table.filter(
            (subitem: any) => Number(subitem.EventID) === Number(item)
          ).length,
        };
      }),
      "EventDate"
    )
    .reverse();

  return (
    <Box mb={10} mt={10}>
      <Heading as="h2" fontSize="3xl">
        Start Lists
      </Heading>

      {underscore
        .sortBy(startListSummary, Number(new Date("EventDate")))
        .reverse()
        .map((startList: any) => (
          <Accordion key={startList.EventID} allowToggle>
            <AccordionItem>
              <AccordionButton>
                <Box textAlign="left">
                  <Heading as="h3" fontSize="1xl" mb={5} mt={5}>
                    {startList.Description}, {startList.totalSkaters}
                    {startList.totalSkaters === 1 ? " Rider" : " Riders"}
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4}>
                {getStartListForEvent(startList.EventID)}
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        ))}
    </Box>
  );
}
