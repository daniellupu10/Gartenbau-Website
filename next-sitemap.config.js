/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://www.ap-gartenbau.de',
    generateRobotsTxt: true,
    generateIndexSitemap: false,
}
