// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

const matchCM = new RegExp(/^```(?:\w+) @ *\n([\s\S]*?)``` *$/gm);

const replacer = (string, match) => {
  const wrapped = '<CodeMirror>{`' + match.trim().replaceAll('`', '\\`') + '`}</CodeMirror>'
  return wrapped 
}

const workaround = (string) => string.replaceAll(matchCM, replacer)

const math = require('remark-math');
const katex = require('rehype-katex');

const scripts = [
  /*"/wljs-interpreter/src/interpreter.js",
  "/wljs-interpreter/src/core.js",
  "/wljs-cells/src/module.js",
  "/wljs-editor/dist/kernel.js",
  "/wljs-editor/src/boxes.js",
  "/wljs-editor/src/objects.js",
  "/wljs-sharedlib-d3/dist/kernel.js",
  "/wljs-graphics-d3/dist/kernel.js",
  "/wljs-graphics3d-threejs/dist/kernel.js"*/
  
  "https://cdn.jsdelivr.net/gh/JerryI/wljs-interpreter@dev/src/interpreter.js",
  "https://cdn.jsdelivr.net/gh/JerryI/wljs-interpreter@dev/src/core.js",
  "https://cdn.jsdelivr.net/gh/JerryI/wljs-cells@dev/src/module.js",
  "https://cdn.jsdelivr.net/gh/JerryI/wljs-editor@dev/dist/kernel.js",
  "https://cdn.jsdelivr.net/gh/JerryI/wljs-editor@dev/src/boxes.js",  
  "https://cdn.jsdelivr.net/gh/JerryI/wljs-editor@dev/src/metamarkers.js",
  "https://cdn.jsdelivr.net/gh/JerryI/wljs-editor@dev/src/objects.js",
  "https://cdn.jsdelivr.net/gh/JerryI/wljs-js-support@dev/src/kernel.js",
  "https://cdn.jsdelivr.net/gh/JerryI/wljs-magic-support@dev/src/kernel.js",
  "https://cdn.jsdelivr.net/gh/JerryI/wljs-mermaid-support@dev/dist/kernel.js",
  "https://cdn.jsdelivr.net/gh/JerryI/wljs-sound@master/dist/kernel.js",   
  "https://cdn.jsdelivr.net/gh/JerryI/wljs-inputs@dev/dist/kernel.js",
  "https://cdn.jsdelivr.net/gh/JerryI/wljs-html-support@dev/src/kernel.js",
  "https://cdn.jsdelivr.net/gh/JerryI/wljs-wlx-support@dev/src/kernel.js",  
  "https://cdn.jsdelivr.net/gh/JerryI/wljs-sharedlib-d3@master/dist/kernel.js",
  "https://cdn.jsdelivr.net/gh/JerryI/wljs-manipulate@master/kernel.js",
  "https://cdn.jsdelivr.net/gh/JerryI/wljs-graphics-d3@dev/dist/kernel.js",
  "https://cdn.jsdelivr.net/gh/JerryI/wljs-plotly@dev/dist/kernel.js",  
  "https://cdn.jsdelivr.net/gh/JerryI/Mathematica-ThreeJS-graphics-engine@dev/dist/kernel.js",

].map((link) => {
  return {tagName: 'script', attributes: {
    type: 'module',
    src: link
  }}
});


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'WLJS Notebook',
  tagline: 'Documentation',
  favicon: 'img/favicon.ico',

  staticDirectories: ['static'],
  
  /*
  url: 'http://127.0.0.1:20540',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
*/
  url: 'https://jerryi.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/wljs-docs/',
  

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'JerryI & KirillBelovTest', // Usually your GitHub org/user name.
  projectName: 'wljs-notebook', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  markdown: {
    mermaid: true,
    preprocessor: ({filePath, fileContent}) => {
      return workaround(fileContent);
    }
  },
  themes: ['@docusaurus/theme-mermaid'],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X',
      crossorigin: 'anonymous',
    },
  ],



  headTags: scripts,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          remarkPlugins: [math],
          routeBasePath: '/',
          rehypePlugins: [katex],

        exclude: ['/docs/Excalidraw', 'Excalidraw', '/docs/imgs', '/docs/blog'],
          
        showLastUpdateTime: true,
        },
        pages: {
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          path: 'blog',
          remarkPlugins: [math],
          rehypePlugins: [katex],
          editLocalizedFiles: false,
          blogTitle: 'WLJS Notebook Blog',
          blogDescription: 'A various examples from different areas of physics and programming showcasing the features of Wolfram Language',
          blogSidebarCount: 50,
          blogSidebarTitle: 'All our posts',
          routeBasePath: 'blog',
          include: ['**/*.{md,mdx}'],
          postsPerPage: 15,
          showReadingTime: true,         
          blogListComponent: '@theme/BlogListPage',
          blogPostComponent: '@theme/BlogPostPage',
          blogTagsListComponent: '@theme/BlogTagsListPage',
          blogTagsPostsComponent: '@theme/BlogTagsPostsPage',
          beforeDefaultRemarkPlugins: [],
          beforeDefaultRehypePlugins: [],
        },     
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {name: 'msvalidate.01', content: '558ACAAD3C892A685EC4981186E3711D'},
        {name: 'google-site-verification', content: "v5kHeI8IZCb5bfzZug5GQ7uRZOeo2VIdj8tcUXpaLTk"}
      ],

      
      remarkPlugins: [math],
      rehypePlugins: [katex],
      // Replace with your project's social card
      navbar: {
        title: 'WLJS',
        logo: {
          alt: 'WLJS Notebook',
          src: 'img/logo3.svg',
          srcDark: "img/logo2.svg"
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {to: 'blog', label: 'Blog', position: 'left'}, // or position: 'right'
          {to: 'wljs-demo', label: 'Demonstration Project', style: {"border": 0, "border-radius": "6px"} , position: 'left'},
          {to: "https://github.com/JerryI/wolfram-js-frontend/discussions", label: "Discuss", style: {"border": 0, "border-radius": "6px"} , position: 'right'},
          
          {
            href: 'https://github.com/JerryI/wolfram-js-frontend',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/+PBotB9UJw-hiZDEy',
              },
            ],
          },
        ],
        copyright: `WLJS Notebook Project is open-source and licensed under GPL3`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['wolfram']

      },
      markdown: {
        mermaid: true,
      },
      themes: ['@docusaurus/theme-mermaid'],

      
    }),
    plugins: [[ require.resolve('docusaurus-lunr-search'), {
      disableVersioning: true
    }],
    function myCustomPlugin(context, options) {
      return {
        name: 'custom-webpack-plugin',
        configureWebpack(config, isServer, utils, content) {
          return {
            module: {
              rules: [
                {
                  test: /\.pdf$/,
                  use: ["file-loader"],
                },
                {
                  test: /\.txt$/,
                  use: ["file-loader"],
                },                
                {
                  test: /\.wln$/,
                  use: ["file-loader"],
                }
              ],
            },
          };
        },
      };
    }]
};

export default config;
