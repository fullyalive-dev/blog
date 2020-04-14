require(`dotenv`).config({
  path: `.env`
});

module.exports = {
  siteMetadata: {
    siteTitle: `개발하는 기획자의 insight silo`,
    siteTitleAlt: `fullyalive blog`,
    siteHeadline: `Insight Silo - @fullyalive`,
    siteLanguage: `ko`,
    siteDescription: `기획자가 개발과 디자인을 공부하는 이유와 그 과정에서 얻은 인사이트를 공유합니다.`,
    author: `@fullyalive`,
    siteImage: `/banner.jpg`
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        navigation: [
          {
            title: `About`,
            slug: `/fullyalive`
          },
          {
            title: `Blog`,
            slug: `/blog`
          },
          {
            title: `Index`,
            slug: `/blog-index`
          },
        ],
        externalLinks: [
          {
            name: `github`,
            url: `https://github.com/fullyalive`
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID
      }
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `개발하는 기획자의 insight silo`,
        short_name: `fullyalive-blog`,
        description: `기획자가 개발과 디자인을 공부하는 이유와 그 과정에서 얻은 인사이트를 공유합니다.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-icon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`
          },
          {
            src: `/android-icon-512x512.png`,
            sizes: `512x512`,
            type: `image/png`
          }
        ]
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
  ]
};
