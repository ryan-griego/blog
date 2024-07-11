
const baseUrl = process.env.BASE_URL;

const headerNavLinks = [
  { href: '/', title: 'Home' },
  { href: `${baseUrl}/posts`, title: 'Blog' },
  // { href: '/tags', title: 'Tags' },
 // { href: '/projects', title: 'Projects' },
  { href: `${baseUrl}/about`, title: 'About' },
  { href: 'https://www.ryangriego.com/', title: 'Portfolio' },
]

export default headerNavLinks
