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
      
          <div className="w-full mx-auto group sm:max-w-sm" >
                                <Link href={`posts/${slug}`}>
                                <div className=' bg-white lg:object-cover w-[100%]'>
        <CoverImage slug={slug} title={title} image={coverImage} priority />
        </div> <div className="mt-3 space-y-2">
                                        <span className="block font-sans text-purple-600 text-sm"><Date dateString={date} /></span>
                                        <h3 className="text-lg font-sans text-white duration-150 group-hover:text-indigo-600 font-semibold">
                                            {title}
                                        </h3>
                                        <p className="text-gray-300 font-sans pr-12 text-sm duration-150 group-hover:text-gray-100">{excerpt}</p>
                                    </div>
                                </Link>
                            </div>
          {/* <Date dateString={date} /> */}
        
          {/* 
          <div className="mb-4 font-sans mt-[2rem]  font-medium text-[#303030] flex flex-col justify-center text-lg md:mb-0">
          {author && <Avatar name={author.name} picture={author.picture} />} 
            <button onClick={handleClick} className=' text-white bg-purple-600 p-2 rounded-[6rem] w-[8rem]'>Read article</button>
          </div> */}
        
      
      
    </section>
  )
}
