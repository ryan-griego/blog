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
    imgSrc: 'https://ryangriego.com/images/chatrrg-thumbnail.jpg',
    href: '/posts/three-things-i-learned-from-building-a-chatgpt-clone/',
  },
  {
    title: 'Job Getter',
    description: `I use this app to track my job applications, scrape job postings, and send customized emails to recruiters. This one is built with Nuxt.js and features interactive tables of job posting data.`,
    imgSrc: 'https://ryangriego.com/images/job-getter-thumbnail.jpg',
    href: '/posts/building-a-job-application-tracking-app/',
  },
]

export default projectsData
