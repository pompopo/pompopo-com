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

  // SEO最適化: サイトのメタデータを設定してSEO対策を強化
  headTags: [
    {
      tagName: "meta",
      attributes: {
        name: "keywords",
        content: "pompopo, blog, 技術, プログラミング",
      },
    },
  ],

  // パフォーマンス最適化: ビルド時間を短縮し、開発体験を向上
  // 注意: @docusaurus/faster パッケージのインストールが必要
  // インストール方法: yarn add @docusaurus/faster
  // future: {
  //   experimental_faster: {
  //     swcJsLoader: true, // Babelの代わりにSWCを使用して高速化
  //     swcJsMinimizer: true, // TerserではなくSWCでminifyして高速化
  //     swcHtmlMinimizer: true, // HTML minificationを高速化
  //     lightningCssMinimizer: true, // CSSをLightning CSSで高速minify
  //     rspackBundler: true, // WebpackではなくRspackを使用して高速化
  //     mdxCrossCompilerCache: true, // MDXコンパイルをキャッシュ
  //   },
  // },

  // リンク切れを検出してビルドエラーにすることで、品質を保証
  onBrokenLinks: "throw",
  // Docusaurus v4での非推奨警告を解消するため、markdown.hooksに移行
  // onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "jp",
    locales: ["jp"],
  },
  markdown: {
    mermaid: true,
    // Docusaurus v4対応: onBrokenMarkdownLinksをmarkdown.hooksに移行
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
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
          // ベストプラクティスを促す警告設定
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          // truncateマーカー無しでも自動で適切な長さでプレビューを作成
          onUntruncatedBlogPosts: "ignore",
          blogSidebarCount: 'ALL',
          // ブログの1ページあたりの記事数を設定して、読み込み速度とUXを最適化
          postsPerPage: 10,
          // ブログ記事のURL構造をカスタマイズ
          routeBasePath: "blog",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        gtag: {
          trackingID: "G-K1SMB2YEF1",
        },
        // サイトマップ設定: SEO対策として検索エンジンにページ構造を伝える
        sitemap: {
          lastmod: 'date', // 最終更新日をgit履歴から取得
          changefreq: 'weekly', // 更新頻度のヒント
          priority: 0.5, // デフォルト優先度
          ignorePatterns: ['/tags/**'], // タグページは除外
          filename: 'sitemap.xml',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // ソーシャルメディアでシェアされた際のOGP画像
    image: "img/pompopo.png",

    // サイト全体のメタデータ設定でSEO強化
    metadata: [
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@pompopo" },
      { name: "og:type", content: "website" },
      { name: "og:site_name", content: "pompopo.com" },
    ],

    // カラーモード設定: ユーザーの選択を保持し、快適な閲覧体験を提供
    colorMode: {
      defaultMode: "light", // デフォルトはライトモード
      disableSwitch: false, // カラーモード切り替えボタンを表示
      respectPrefersColorScheme: true, // OSの設定を尊重
    },

    // アナウンスメントバー: 重要なお知らせを目立つ位置に表示可能
    // announcementBar: {
    //   id: "announcement-1",
    //   content:
    //     '⭐️ 新しい記事が公開されました！ <a target="_blank" rel="noopener noreferrer" href="/blog">チェックしてください</a> ⭐️',
    //   backgroundColor: "#fafbfc",
    //   textColor: "#091E42",
    //   isCloseable: true, // ユーザーが閉じることができる
    // },

    // Algolia DocSearch: サイト内検索機能（要Algolia申請）
    // 申請URL: https://docsearch.algolia.com/apply/
    // algolia: {
    //   appId: "YOUR_APP_ID",
    //   apiKey: "YOUR_SEARCH_API_KEY",
    //   indexName: "YOUR_INDEX_NAME",
    //   contextualSearch: true,
    //   searchParameters: {},
    //   searchPagePath: "search",
    // },

    blog: {
      sidebar: {
        groupByYear: false,
      },
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 5,
    },

    // ドキュメントサイドバー設定: 使いやすさを向上
    docs: {
      sidebar: {
        hideable: true, // サイドバーを隠せるようにして画面を広く使える
        autoCollapseCategories: true, // 自動でカテゴリを折りたたんで見やすく
      },
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
      // コードブロックでサポートする追加の言語を指定
      // デフォルトでサポートされていない言語を追加することで、
      // より多くのプログラミング言語のシンタックスハイライトが可能
      additionalLanguages: [
        "bash",
        "json",
        "yaml",
        "markdown",
        "diff",
        "docker",
        "nginx",
        "sql",
        "powershell",
      ],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
