/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/img/undraw_open_source.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Skills Workflow', // Title for your website.
  tagline: 'A website for documentation',
  url: 'https://documentation.skillsworkflow.com', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  url: 'https://afonsogcardoso.github.io', // Replace USERNAME with your GitHub username.
  baseUrl: '/documentation-sw/', // The name of your GitHub project.
  projectName: 'documentation-sw',  // The name of your GitHub project. Same as above.
  organizationName: 'afonsogcardoso', // Your GitHub username.
  
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: 'doc1', label: 'Docs' },
    { doc: 'doc4', label: 'API' },
    { page: 'help', label: 'Help' },
    { blog: true, label: 'Blog' }
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/sw_logo_white.png',
  footerIcon: 'img/sw_icon_footer.png',
  favicon: 'img/favicon.ico',

  /* Colors for website */
  colors: {
    primaryColor: '#0072C6',
    secondaryColor: '#828282',
  },

  /* Custom fonts for website */
  // fonts: {
  //   myFont: [
  //     "Varela Round",
  //     "Open Sans"
  //   ]
  //   //,
  //   // myOtherFont: [
  //   //   "-apple-system",
  //   //   "system-ui"
  //   // ]
  // },

  // stylesheets: [
  //   'https://fonts.googleapis.com/css?family=Varela+Round',
  //   'https://fonts.googleapis.com/css?family=Open+Sans'
  // ],

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Skills Workflow`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  // docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  // repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
