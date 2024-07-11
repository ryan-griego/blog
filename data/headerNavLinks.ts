// const { basePath } = require('next.config');

import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const basePath = publicRuntimeConfig.basePath || '';

const headerNavLinks = [
  { href: '/', title: 'Home' },
  { href: `${basePath}/posts`, title: 'Blog' },
  // { href: '/tags', title: 'Tags' },
 // { href: '/projects', title: 'Projects' },
  { href: `${basePath}/about`, title: 'About' },
  { href: 'https://www.ryangriego.com/', title: 'Portfolio' },
]

export default headerNavLinks
