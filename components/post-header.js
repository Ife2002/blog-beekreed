import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
    <div className="hidden font-sans md:block md:mb-12">
      <Date dateString={date} />
      <div className='my-[1rem]'></div>
        {author && <Avatar name={author.name} picture={author.picture} />}
      </div>
      <PostTitle>{title}</PostTitle>
      
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} image={coverImage} priority />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block mb-6 md:hidden">
          {author && <Avatar name={author.name} picture={author.picture} />}
        </div>
        <div className="mb-6 font-sans text-lg">
          
        </div>
      </div>
    </>
  )
}
