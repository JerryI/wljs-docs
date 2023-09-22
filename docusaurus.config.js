// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/vsLight');
const darkCodeTheme = require('prism-react-renderer/themes/github');

const path = require('path');
const fs = require('fs');
//joining path of directory 
const directoryPath = path.join(__dirname, '');
//passsing directoryPath and callback function


const list = [
  "https://cdn.jsdelivr.net/gh/JerryI/wljs-interpreter@master/src/interpreter.js",
  "https://cdn.jsdelivr.net/gh/JerryI/wljs-interpreter@master/src/core.js",
  "https://cdn.jsdelivr.net/gh/JerryI/wljs-interpreter@master/src/metamarkers.js",
  "https://cdn.jsdelivr.net/gh/JerryI/wljs-cells@master/dist/kernel.js",
  "https://cdn.jsdelivr.net/gh/JerryI/wljs-editor@master/dist/kernel.js",
  "https://cdn.jsdelivr.net/gh/JerryI/wljs-editor@master/src/boxes.js",
  "https://cdn.jsdelivr.net/gh/JerryI/wljs-markdown-support@master/dist/kernel.js",
  "https://cdn.jsdelivr.net/gh/JerryI/wljs-js-support@master/dist/kernel.js",
  "https://cdn.jsdelivr.net/gh/JerryI/wljs-html-support@master/dist/kernel.js",
  "https://cdn.jsdelivr.net/gh/JerryI/wljs-inputs@master/dist/kernel.js",
  "https://cdn.jsdelivr.net/gh/JerryI/wljs-graphics-d3@master/dist/kernel.js",
  "https://cdn.jsdelivr.net/gh/JerryI/wljs-plotly@master/dist/kernel.js",
  "https://cdn.jsdelivr.net/gh/JerryI/wljs-hydrator@master/src/kernel.js",
  "https://cdn.jsdelivr.net/gh/JerryI/Mathematica-ThreeJS-graphics-engine@master/dist/kernel.js"
].map((link) => {
  return {src: link, type: 'module', async: false}
});



const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'log',
  title: 'WLJS',
  tagline: 'Open-source Wolfram Frontend & Interpreter & Fullstack Framework written in Javascript',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://jerryi.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/wljs-docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'JerryI', // Usually your GitHub org/user name.
  projectName: 'wljs-docs', // Usually your repo name.
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X',
      crossorigin: 'anonymous',
    },
  ],

  scripts: list,

  clientModules: [
    require.resolve('./src/components/wljs-notebook-react/static.js')
  ],

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
         // editUrl:
         //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        remarkPlugins: [math],
        rehypePlugins: [katex],

        showLastUpdateTime: true,

        },

        blog: {
          blogSidebarCount: 'ALL',
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        
      }),
    ],
    
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      remarkPlugins: [math],
      rehypePlugins: [katex],
      // Replace with your project's social card
      image: 'img/logo2.svg',
      navbar: {
        title: 'WLJS',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'interpreterSidebar',
            position: 'left', 
            label: 'Interpreter',
          },
          /*{
            type: 'docSidebar',
            sidebarId: 'graphicsSidebar',
            position: 'left',
            label: 'Graphics',
          },  */    
          {
            type: 'docSidebar',
            sidebarId: 'frontendSidebar',
            position: 'left',
            label: 'Frontend',            
          }, 
          {to: '/wlx', label: 'WLX', position: 'left'},             
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: "https://github.com/JerryI/wolfram-js-frontend", label: "Github", style: {"border": 0, "border-radius": "6px"} , position: 'right'},
          {to: "https://github.com/sponsors/JerryI?o=esb", label: "Sponsor", style: {"border": 0, "border-radius": "6px"} , position: 'right'},

        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Credits',
            items: [
              {
                label: 'Freeware Wolfram Engine',
                href: 'https://www.wolfram.com/engine/',
              },
              {
                label: 'Wolfram Web Server',
                href: 'https://github.com/KirillBelovTest/WolframWebServer',
              },
              {
                label: 'Code Mirror 6',
                href: 'https://codemirror.net/',
              },
              {
                label: 'D3.js',
                href: 'https://d3js.org/',
              },
              {
                label: 'THREE.js',
                href: 'https://threejs.org/',
              },              
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub Frontend',
                href: 'https://github.com/JerryI/wolfram-js-frontend',
              },
              {
                label: 'GitHub WLJS',
                href: 'https://github.com/JerryI/wljs-interpreter',
              }, 
              {
                label: 'GitHub WLX',
                href: 'https://github.com/JerryI/wl-wlx',
              },                            
            ],
          },
        ],
        copyright: `${new Date().getFullYear()} WLJS`,
      },
      prism: {
        theme: lightCodeTheme,
        additionalLanguages: ['wolfram']
      },
    }),

    markdown: {
      mermaid: true,
    },
    themes: ['@docusaurus/theme-mermaid'],

    plugins: [[ require.resolve('docusaurus-lunr-search'), {
      disableVersioning: true
    }]]


};



module.exports = config;


