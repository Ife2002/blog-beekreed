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
      <div className="mb-8 p-12 font-sans md:mb-16 hover:scale-100">
        <CoverImage slug={slug} title={title} image={coverImage} priority />
        <div className="w-[100%] bg-white">
        <div className="mb-20 p-10 md:grid md: md:gap-x-16 lg:gap-x-8 md:mb-28">
        <div>
        <Date dateString={date} />
          <h3 className="mb-4 font-sans text-black font-medium text-4xl leading-tight lg:text-6xl hover:text-purple-600">
            <Link href={`/posts/${slug}`} className="">
              {title}
            </Link>
          </h3>
          <div>
          <p className="mb-4 font-sans font-normal text-lg leading-relaxed">{excerpt}</p>
          
        </div>
          <div className="mb-4 font-sans mt-[2rem]  font-medium text-[#303030] flex flex-row items-center justify-between text-lg md:mb-0">
          {author && <Avatar name={author.name} picture={author.picture} />}
            <button className=' text-white bg-purple-300 p-2 rounded-[6rem] w-[8rem]'>Read article</button>
          </div>
        </div>
        
      </div>
      </div>
      </div>
      
      
    </section>
  )
}
