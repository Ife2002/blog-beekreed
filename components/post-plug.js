import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPlug({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} image={coverImage} />
      </div>
      <h3 className="mb-3 font-sans font-semibold text-3xl leading-snug">
        <Link href={`/posts/${slug}`} className="">
          {title}
        </Link>
      </h3>
      <div className="mb-4 font-sans text-[#303030] text-lg flex flex-row items-center">
      {author && <Avatar name={author.name} picture={author.picture} />}
      <h1 className='mx-[1rem]'>{" • "}</h1>
        <Date dateString={date} />
      </div>
      <p className="mb-4 font-sans font-normal text-lg leading-relaxed">{excerpt}</p>
      
    </div>
  )
}
