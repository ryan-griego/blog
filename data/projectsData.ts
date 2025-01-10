interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'Chat RRG',
    description: `What if you could have your own Chat GPT app that stores all your chats? This Chat GPT clone uses Next.js to and it's really great.`,
    imgSrc: 'https://res.cloudinary.com/dm7y3yvjp/image/upload/v1736488274/chatrrg-thumbnail_gjmrrs.jpg',
    href: '/posts/three-things-i-learned-from-building-a-chatgpt-clone/',
  },
  {
    title: 'Job Getter',
    description: `I use this app to track my job applications, scrape job postings, and send customized emails to recruiters. This one is built with Nuxt.js and features interactive tables of job posting data.`,
    imgSrc: 'https://res.cloudinary.com/dm7y3yvjp/image/upload/v1736488323/job-getter-thumbnail_ceh28c.jpg',
    href: '/posts/building-a-job-application-tracking-app/',
  },
]

export default projectsData
