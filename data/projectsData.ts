interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'Trizify',
    description: `Using OpenAI's LLM, TRIZify will use the TRIZ principles to help you systematically solve complex problems, innovate efficiently, and overcome contradictions. This application is built using Next.js, and connects to the OpenAI API.`,
    imgSrc: 'https://res.cloudinary.com/dm7y3yvjp/image/upload/v1740601806/trizify-thumbnail-projects_vlef2g.jpg',
    href: 'https://github.com/ryan-griego/trizify',
  },
  {
    title: 'Job Getter',
    description: `I use this app to track my job applications, scrape job postings, and send customized emails to recruiters. This one is built with Nuxt.js and features interactive tables of job posting data.`,
    imgSrc: 'https://res.cloudinary.com/dm7y3yvjp/image/upload/v1736488323/job-getter-thumbnail_ceh28c.jpg',
    href: '/posts/building-a-job-application-tracking-app/',
  },
]

export default projectsData
