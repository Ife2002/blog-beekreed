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
       {/* <h1 className="text-[2rem] my-12 text-white font-sans font-bold tracking-tighter leading-tight md:pr-8">
      Latest post
      </h1> */}
      <div className="mb-1  md:p-12 md:flex md:flex-row font-sans border-b-[1px] border-[#3a3a3a] ">
     
        <div className=' bg-white w-[100%]'>
        <CoverImage slug={slug} title={title} image={coverImage} priority />
        </div>
        <div className="w-[100%] flex items-stretch bg-purple-600 p-8">
        <div className="text-[#929292] md:grid md: md:gap-x-16 lg:gap-x-8 ">
        <div>
        <div className='w-[5rem] font-sans sm:text-[1.1rem] text-purple-200 font-medium  rounded-[0.1rem]'>
       <h1 className='bg-purple-500 px-4 py-2'>Article</h1>
        </div>
          <h3 className="mb-4 mt-5 mr-1 font-sans text-white font-semibold text-[1.3rem] xl:leading-tight lg:text-[1.7rem] ">
              {title}
          </h3>
          <div className='text-white'>
          <p className=" lg:mr-9 mr-7 mb-3 text-[#d4d4d4] font-sans font-medium lg:text-[1rem] text-[1.1rem] leading-relaxed">{excerpt}</p>
          {/* <Date dateString={date} /> */}
        </div>
          {/* 
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
