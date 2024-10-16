import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    // <Link
    //   href={`/tags/${slug(text)}`}
    //   className="mr-3 text-md font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
    // >
    //   {text.split(' ').join('-')}
    // </Link>
    <span className="mr-3 text-md font-medium uppercase text-primary-500">
      {text.split(' ').join('-')}
    </span>
  )
}

export default Tag
