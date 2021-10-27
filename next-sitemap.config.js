/** @type {import('next-sitemap').IConfig} */
console.log("website here is", process.env.WEBSITE);
const NextSitemapConfig = {
  siteUrl: process.env.WEBSITE,
  generateRobotsTxt: true,
};

module.exports = NextSitemapConfig;
