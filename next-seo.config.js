/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "The Boardr Skateboarding and BMX Events",
  titleTemplate: "%s | The Boardr",
  defaultTitle: "The Boardr Skateboarding and BMX Events",
  description:
    "We host and organize skateboarding and BMX's top events. If you want your event and all the details to be professionally executed by proven experts who live and breate this industry, The Boardr is who you hire.",
  canonical: "https://theboardr.com",
  openGraph: {
    url: "https://theboardr.com",
    title: "The Boardr Skateboarding and BMX Events",
    description:
      "We host and organize skateboarding and BMX's top events. If you want your event and all the details to be professionally executed by proven experts who live and breate this industry, The Boardr is who you hire.",
    images: [
      {
        url: "https://theboardr.blob.core.windows.net/general/theboardrdefaultimage.jpg",
        alt: "theboardr.com og-image",
      },
    ],
    site_name: "The Boardr",
  },
  twitter: {
    handle: "@theboardr",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
