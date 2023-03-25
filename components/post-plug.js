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
      <div className="mb-5  overflow-hidden rounded-xl">
        <CoverImage slug={slug} title={title} image={coverImage} />
        <div className="w-[100%] bg-[#424242]">
        <div className=" text-[#c4c2c2] p-5 md:grid md: md:gap-x-16 lg:gap-x-8 ">
        <div className='font-sans mb-4'>
        
          <h3 className="my-4 font-sans text-white font-medium text-[2rem] leading-tight  ">
              {title}
          </h3>
          <Date dateString={date} />
          {/* <div>
          <p className="mb-4 text-white font-sans font-normal text-lg leading-relaxed">{excerpt}</p>
          
        </div> */}
          {/* <div className="mb-4 font-sans mt-[2rem]  font-medium text-[#303030] flex flex-col justify-center text-lg md:mb-0">
          {author && <Avatar name={author.name} picture={author.picture} />}
            <button  className=' text-purple-600 bg-white p-2 rounded-[6rem] w-[8rem]'>Read article</button>
          </div> */}
        </div>
        
      </div>
      </div>
      </div>
      
    </div>
  )
}
