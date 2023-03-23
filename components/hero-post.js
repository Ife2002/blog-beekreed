import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from '../components/cover-image'
import Link from 'next/link'

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <section>
      <div className="mb-8 md:mb-16 hover:scale-105">
        <CoverImage slug={slug} title={title} image={coverImage} priority />
      </div>
      <div className="mb-20 md:grid md: md:gap-x-16 lg:gap-x-8 md:mb-28">
        <div>
          <h3 className="mb-4 font-sans font-semibold text-4xl leading-tight lg:text-6xl hover:text-purple-600">
            <Link href={`/posts/${slug}`} className="">
              {title}
            </Link>
          </h3>
          <div className="mb-4 font-sans text-[#303030] flex flex-row items-center text-lg md:mb-0">
          {author && <Avatar name={author.name} picture={author.picture} />}
          
          <h1 className='mx-[1rem]'>{" • "}</h1>
            <Date dateString={date} />
          </div>
        </div>
        <div>
          <p className="mb-4 font-sans font-normal text-lg leading-relaxed">{excerpt}</p>
          
        </div>
      </div>
    </section>
  )
}
