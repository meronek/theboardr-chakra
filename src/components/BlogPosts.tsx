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

const BlogListing: any = ({ blogDetail }: any) => {
  // console.log("eventDetail is", eventDetail);
  return (
    <Box w="full" p={6} boxShadow="md">
      <Box>
        <Link
          href={`/post/${blogDetail.SEOUrl}`}
          title={escapeHtml(blogDetail.Title)}
          style={{ color: "black" }}
        >
          <img
            src={`https://theboardr.blob.core.windows.net/posticons/${blogDetail.PostID}hero600.jpg`}
            title={escapeHtml(blogDetail.Title)}
            alt={escapeHtml(blogDetail.Title)}
          />
        </Link>
      </Box>
      <Stack>
        <Heading fontSize="2xl" my={3}>
          <Link
            href={`/post/${blogDetail.SEOUrl}`}
            title={escapeHtml(blogDetail.Title)}
            style={{ color: "black" }}
          >
            {blogDetail.Title}
          </Link>
        </Heading>
        <Text
          textTransform="uppercase"
          fontWeight={800}
          fontSize="sm"
          letterSpacing={1.1}
        >
          {new Date(blogDetail.DateAndTime).toLocaleDateString()}
        </Text>
        <Text>{escapeHtml(blogDetail.NoHTMLSummary)}</Text>
      </Stack>
    </Box>
  );
};

export default function BlogPosts(props: any) {
  const { blogPosts } = props;

  return (
    <Box mb={10} mt={10}>
      <Heading as="h3" fontSize="3xl">
        Event Recaps and Blog Posts
      </Heading>
      <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={5}>
        {blogPosts.map((blogDetail: any) => (
          <BlogListing blogDetail={blogDetail} key={blogDetail.PostID} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
