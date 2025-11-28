import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "pompopo.com",
  // tagline: "Dinosaurs are cool",
  favicon: "img/favicon.png",

  // Set the production url of your site here
  url: "https://pompopo.com",
  // GitHub
  organizationName: "pompopo",
  projectName: "pompopo-com",

  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "jp",
    locales: ["jp"],
  },
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/pompopo/pompopo-com/edit/main",
        },
        blog: {
          blogTitle: "pompopo.寝言",
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/pompopo/pompopo-com/edit/main",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        gtag: {
          trackingID: "G-K1SMB2YEF1",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/pompopo.png",

    blog: {
      sidebar: {
        groupByYear: false,
      },
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 5,
    },
    navbar: {
      title: "pompopo.com",
      logo: {
        alt: "pompopo.com",
        src: "img/pompopo.png",
      },
      items: [
        // {
        //   type: "docSidebar",
        //   sidebarId: "tutorialSidebar",
        //   position: "left",
        //   label: "Tutorial",
        // },
        { to: "/blog", label: "Blog", position: "left" },
        // {
        //   href: "https://github.com/pompopo/pompopo-com",
        //   label: "GitHub",
        //   position: "right",
        // },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Links",
          items: [
            {
              label: "mixi2",
              to: "https://mixi.social/@pompopo",
            },
            {
              label: "GitHub",
              to: "https://github.com/pompopo",
            }, {
              label: "𝕏",
              to: "https://x.com/pompopo",
            },

          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} @pompopo`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
