// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Project-Maker',
  tagline: 'Propulsons ensemble vos projets !',
  favicon: 'img/logoV2.png',

  // Set the production url of your site here
  url: 'https://docs.project-maker.fr',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ProjectMakerfr', // Usually your GitHub org/user name.
  projectName: 'docs.project-maker.fr', // Usually your repo name.


  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          admonitions: {
            keywords: [
              'note',
              'tip',
              'info',
              'caution',
              'danger',
              'nouvellesfonctionnalites',
              'ameliorations',
              'correctionsbugs',
              'misesajoursecurite',
              'changementsmajeurs',
              'modificationsui',
              'amelioreperformances',
              'compatibilite',
              'documentation',
              'retraits',
              'ajouts',
              'changementsmineurs',
              'versionnote',
              'discord',
            ],
          },
          // lastVersion: '1.1.0',  // Indique que la version 1.1.0 est la version la plus récente.
          // versions: {
          //   current: {
          //     label: 'beta 🚧',
          //     path: 'next',
          //     banner: 'unreleased',  // Indique que la version 'Next' est encore en cours de développement.
          //   },
          //   "1.1.0": {
          //     label: 'v1.1.0',
          //     banner: 'none',
          //     // banner: 'unmaintained',
          //   },
          // },
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ProjectMakerfr/docs.project-maker.fr/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'ignore',
          onInlineAuthors: 'ignore',
          onUntruncatedBlogPosts: 'ignore'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/logoV2.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(37, 194, 160)',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#000',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: '/img/logoV2.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: '/img/logoV2.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#000',
          },
        ],
      },
    ],
  ],
  

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({

      algolia: {
        appId: 'UTJHF69BBL',
        apiKey: '930bf92704c8cb55e4f9e2e49ad812fb',
        indexName: 'project-maker',
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      // announcementBar: {
      //   id: 'support_us',
      //   content:
      //     '<div id="support_us">🎉 Bienvenue à notre documentation! Consultez les dernières <a target="_blank" rel="noopener noreferrer" href="https://example.com">mises à jour</a>.</div>',
      //   backgroundColor: '#fff',
      //   isCloseable: true
      // },
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Project-Maker.fr',
        hideOnScroll: true,
        logo: {
          alt: 'My_Site_Logo',
          src: 'img/logoV2.png',
        },
        items: [
          {
            type: 'doc',
            position: 'left',
            docId: 'intro', // Assurez-vous que le chemin est correct
            label: 'Docs',
          },
          {
            type: 'doc',
            position: 'left',
            docId: 'guide/intro', // Assurez-vous que le chemin est correct
            label: 'Guides',
          },
          {
            type: 'doc',
            position: 'left',
            docId: 'api/intro', // Assurez-vous que le chemin est correct
            label: 'API',
          },
          {
            type: 'doc',
            position: 'left',
            docId: 'support/intro', // Assurez-vous que le chemin est correct
            label: 'Communauté',
          },
          // {
          //   type: 'docsVersionDropdown',
          //   position: 'right',
          // },
          {
            href: 'https://uptime.project-maker.fr/',
            label: 'ProjectMaker Uptime Checker',
            position: 'right',
          },
          {
            href: 'https://project-maker.fr/discord',
            label: 'Discord',
            position: 'right',
          },
          {
            type: 'docsVersion',
            to: '/docs/partner',
            label: 'Partenaires',
            position: 'left',
          },
          // {
          //   href: '/docs/partner',
          //   label: 'Partenaires',
          //   position: 'left',
          // },
          { to: 'blog', label: 'Blog', position: 'left' },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Communauté',
            items: [
              {
                label: 'Discord',
                href: 'https://project-maker.fr/discord',
              },
            ],
          },
          {
            title: 'Plus',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/ProjectMakerGithub/docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Project-Maker. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
