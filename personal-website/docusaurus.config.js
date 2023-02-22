// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Daan Damhuis",
  tagline: "Data, Power BI, Python and more...",
  url: "https://www.daandamhuis.nl",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  organizationName: "daandamhuis", // Usually your GitHub org/user name.
  projectName: "daandamhuis.github.io", // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  plugins: [],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [{name: 'keywords', content: 'python programming, data analysis, power bi reports, analysis services modeling, data visualization, documenting power bi reports, pytabular libraries, resume/cv writing, data management, blogging on data-related topics, business intelligence tools, power bi dashboards, advanced analytics, data modeling, data cleaning and transformation, power bi data visualization, power query m language, dax formulas, data-driven decision making, data storytelling techniques'}],
      navbar: {
        title: "Daan Damhuis",
        // logo: {
        //   alt: "Daan Damhuis",
        //   src: "img/logo.png",
        // },
        items: [
          { to: "/blog", label: "Blog", position: "left" },
          {
            type: "doc",
            docId: "getting-started",
            position: "left",
            label: "PyTabular",
          },
          { to: "/who-am-i", label: "About Me", position: "left" },
          {
            href: "https://linkedin.com/in/daandamhuis/",
            label: "LinkedIn",
            position: "right",
          },
          {
            href: "https://github.com/daandamhuis/",
            label: "GitHub",
            position: "right",
          }
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Social",
            items: [
              {
                label: "Twitter",
                href: "https://twitter.com/daandamhuis",
              },
              {
                label: "LinkedIn",
                href: "https://linkedin.com/in/daandamhuis",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/daandamhuis",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Daan Damhuis.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["dax", "powerquery"],
      },
    }),
};

module.exports = config;
