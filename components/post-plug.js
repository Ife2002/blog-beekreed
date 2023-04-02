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
      <div className="mb-5 font-sans md:flex md:flex-row ">
        <CoverImage slug={slug} title={title} image={coverImage} />
        <div className="w-[100%] flex items-stretch bg-purple-600 p-8">
        <div className="text-[#929292] md:grid md: md:gap-x-16 lg:gap-x-8 ">
        <div>
        <div className='bg-purple-500 w-[5rem] font-sans text-purple-200 font-medium px-4 py-2 rounded-[0.1rem]'>
        Article
        </div>
          <h3 className="mb-4 mt-5 mr-6 font-sans text-white font-semibold text-[1.3rem] leading-tight lg:text-[1.7rem] ">
              {title}
          </h3>
          <div className='text-white'>
          <p className=" mr-9 mb-3 text-white font-sans font-normal text-[1rem] leading-relaxed">{excerpt}</p>
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
      
    </div>
  )
}
