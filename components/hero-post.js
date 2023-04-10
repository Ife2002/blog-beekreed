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
      
          <div className=" bg-white flex pb-6 flex-col items-center justify-center " >
           <Link href={`posts/${slug}`}>
       <div className='p-4 bg-white w-[100%] max-w-3xl'>
        <CoverImage slug={slug} title={title} image={coverImage} priority />
        </div>
         <div className="px-4 space-y-2 pr-8 max-w-3xl ">
                                        <span className="block font-sans text-purple-600 text-sm">
                                          <Date dateString={date} />
                                        </span>
                                        <h3 className="text-[1.2rem] xl:text-[1.5rem] font-sans text-black font-semibold">
                                            {title}
                                        </h3>
                                        <p className="text-gray-800 font-sans xl:text-[1.2rem] text-[1rem] ">{excerpt}</p>
                                    </div>
                                </Link>
                            </div>   
      
    </section>
  )
}
