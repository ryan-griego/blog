
import basePath from 'next/config';


const headerNavLinks = [
  { href: '/', title: 'Home' },
  { href: `${basePath}/posts`, title: 'Blog' },
  // { href: '/tags', title: 'Tags' },
 // { href: '/projects', title: 'Projects' },
  { href: `${basePath}/about`, title: 'About' },
  { href: 'https://www.ryangriego.com/', title: 'Portfolio' },
]

export default headerNavLinks
