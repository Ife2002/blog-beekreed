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
    <section className='flex flex-col items-center justify-center bg-white'>
      <div className=" bg-white py-16 font-sans flex pb-6 flex-col items-center justify-center ">
        <h2 className='xl:text-[4rem] text-[2rem] text-center xl:leading-[4.2rem] px-[20%] font-semibold'>The latest insights for you from us</h2>
        <p className='px-[30%] mt-6 text-center'>Orci molestie nam vulputate nunc habitant gravida. Interdum vitae vivamus ipsum aliquet consectetur aliquam.</p>
      </div>
          <div className=" bg-white grid xl:grid-cols-2 max-w-[90%] py-12 items-center justify-center " >
           {/*  */}
       <div className='p-4 bg-white w-[100%] max-w-3xl'>
        <CoverImage slug={slug} title={title} image={coverImage} priority />
        </div>
         <div className="px-4 space-y-2 pr-8 max-w-3xl ">
                                        <span className="block font-sans font-medium text-purple-600 text-sm">
                                          <Date dateString={date} />
                                        </span>
                                        <Link href={`posts/${slug}`}>
                                        <h3 className="text-[1.2rem] mt-4 xl:text-[2rem] xl:leading-[2.4rem] font-sans text-black font-semibold">
                                            {title}
                                        </h3>
                                        <p className="text-gray-800 font-sans mt-4 xl:pr-[30%]">{excerpt}</p>
                                        </Link>
                                    </div>
                                
                            </div>   
      
    </section>
  )
}
