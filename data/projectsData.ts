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
    imgSrc: '/static/images/google.png',
    href: '/posts/chat-rrg',
    // consider adding a link to the Github repo
  },
  {
    title: 'Job Getter',
    description: `I use this app to track my job applications, scrape job postings, and send customized emails to recruiters. This one is built with Nuxt.js and features interactive tables of job posting data.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/posts/job-getter',
  },
]

export default projectsData
