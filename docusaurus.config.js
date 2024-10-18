// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion



/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Project-Maker',
  tagline: 'Permettre à tous de se développer',
  favicon: 'img/logoV2.png',
  url: 'https://docs.project-maker.fr', // URL de votre site web
  baseUrl: '/',
  projectName: 'docs.project-maker.fr',
  organizationName: 'ProjectMakerGithub',
  trailingSlash: false,
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
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
        },
      },
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
  themeConfig: {
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
    navbar: {
      title: 'ProjectMaker',
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
          href: '/docs/partner',
          label: 'Partenaires',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},

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
  },
};

module.exports = config;
