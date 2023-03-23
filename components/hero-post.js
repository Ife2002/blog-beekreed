import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from '../components/cover-image'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {

  const router = useRouter()
  const handleClick = (e) => {
    e.preventDefault()
    router.push(`/posts/${slug}`)
  }

  return (
    <section>
      <div className="mb-8 md:p-12 font-sans md:mb-16 hover:scale-100">
        <CoverImage slug={slug} title={title} image={coverImage} priority />
        <div className="w-[100%] bg-white">
        <div className="mb-20 text-purple-600 p-10 md:grid md: md:gap-x-16 lg:gap-x-8 md:mb-28">
        <div>
        <Date dateString={date} />
          <h3 className="mb-4 font-sans text-black font-medium text-4xl leading-tight lg:text-6xl ">
              {title}
          </h3>
          <div>
          <p className="mb-4 text-purple-800 font-sans font-normal text-lg leading-relaxed">{excerpt}</p>
          
        </div>
          <div className="mb-4 font-sans mt-[2rem]  font-medium text-[#303030] flex flex-col justify-center text-lg md:mb-0">
          {/* {author && <Avatar name={author.name} picture={author.picture} />} */}
            <button onClick={handleClick} className=' text-white bg-purple-600 p-2 rounded-[6rem] w-[8rem]'>Read article</button>
          </div>
        </div>
        
      </div>
      </div>
      </div>
      
      
    </section>
  )
}
