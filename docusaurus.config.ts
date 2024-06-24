import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'CiviCraft',
  tagline: 'The official wiki of CiviCraft',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://wiki.civicraft.net',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        gtag: {
          trackingID: 'G-J4MMNQVBHQ',
          anonymizeIP: false,
        },
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/sspeedwagonn/civicraft-wiki/blob/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/sspeedwagonn/civicraft-wiki/blob/main',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    metadata: [
      {
        name: 'title',
        content: 'CiviCraft Wiki - Your Ultimate Guide to City Roleplay'
      },
      {
        name: 'description',
        content: 'Explore the CiviCraft Wiki for comprehensive guides, tips, and strategies on city roleplay and RP. Join the CiviCraft community and master your city-building skills!'
      },
      {
        name: 'keywords',
        content: 'CiviCraft, CivCraft, CiviCraft Wiki, City RP, City Roleplay, City Roleplay Wiki, RP Strategies, City-Building Tips, Roleplaying Guide, Civcraft, civcraft wiki, minecraft server, minecraft roleplay, minecraft city roleplay, minecraft cops and robbers'
      },
      {
        property: 'og:title',
        content: 'CiviCraft Wiki - Your Ultimate Guide to City Roleplay'
      },
      {
        property: 'og:description',
        content: 'Discover everything you need to know about CiviCraft city roleplay. From beginner tips to advanced strategies, our comprehensive wiki has it all.'
      },
      {
        property: 'og:url',
        content: 'https://wiki.civicraft.net'
      },
      {
        property: 'og:image',
        content: 'https://wiki.civicraft.net/img/og-image.png' // Replace with actual image URL
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'twitter:title',
        content: 'CiviCraft Wiki - Your Ultimate Guide to City Roleplay'
      },
      {
        name: 'twitter:description',
        content: 'Join the CiviCraft community and learn everything about city roleplay. Access guides, tips, and strategies to excel in your RP adventures.'
      },
      {
        name: 'twitter:image',
        content: 'https://wiki.civicraft.net/img/twitter-image.png' // Replace with actual image URL
      }
    ],
    navbar: {
      title: 'CiviCraft',
      logo: {
        alt: 'CiviCraft logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {to: '/blog', label: 'Discord', position: 'left'},
        {
          href: 'https://github.com/sspeedwagonn/civicraft-wiki',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discord.civicraft.net/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Discord',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © 2024 CiviCraft`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
