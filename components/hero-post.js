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
      
      <div className="mb-8 md:p-12 font-sans border-b-[1px] border-[#3a3a3a] hover:scale-100">
      <h1 className="text-6xl my-12 text-white font-sans md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
      Featured posts
      </h1>
        <div className='h-[50vh] w-[100%] overflow-hidden'>
        <CoverImage slug={slug} title={title} image={coverImage} priority />
        </div>
        <div className="w-[100%] ">
        <div className="mb-20 text-[#929292] py-10 md:grid md: md:gap-x-16 lg:gap-x-8 md:mb-28">
        <div>
        
          <h3 className="mb-4 font-sans text-white font-semibold text-4xl leading-tight lg:text-6xl ">
              {title}
          </h3>
          <Date dateString={date} />
          {/* <div>
          <p className="mb-4 text-white font-sans font-normal text-lg leading-relaxed">{excerpt}</p>
          
        </div>
          <div className="mb-4 font-sans mt-[2rem]  font-medium text-[#303030] flex flex-col justify-center text-lg md:mb-0">
          {author && <Avatar name={author.name} picture={author.picture} />} 
            <button onClick={handleClick} className=' text-white bg-purple-600 p-2 rounded-[6rem] w-[8rem]'>Read article</button>
          </div> */}
        </div>
        
      </div>
      </div>
      </div>
      
      
    </section>
  )
}
