import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <div className='w-[100%]'>
      <div className=" md:mb-16 xl:mt-7 xl:mx-auto max-w-5xl justify-self-center  w-[100%] sm:mx-0">
        <CoverImage title={title} image={coverImage} priority />
      </div>
    <div className="text-white px-5 xl:mx-auto text-[1.2rem] max-w-5xl font-sans md:block md:mb-12">
    
     <PostTitle>{title}</PostTitle>
     <div className='justify-between flex flex-row text-[1rem] md:text-[1.4rem] pb-2 border-b-[0.3rem] border-white'>
      <h1>Written by <span className='font-medium'>{author.name}</span>
      </h1>
      <Date dateString={date} />
     </div>
     

      </div>
      
      
      
      <div className="max-w-2xl mx-auto">
        {/* <div className="block mb-6 md:hidden">
          {author && <Avatar name={author.name} picture={author.picture} />}
        </div> */}
        <div className="mb-6 font-sans text-lg">
          
        </div>
      </div>
    </div>
  )
}
