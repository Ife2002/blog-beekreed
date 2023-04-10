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
      
      <div className=" font-sans pt-8 md:pt-0" >
                            <Link href={`posts/${slug}`}>
                            <CoverImage slug={slug} title={title} image={coverImage} priority />
                                
                                <div className=" bg-[#fbeaff] px-6 py-[10%]">
                                <span className="block text-gray-400 text-sm">
                                <Date dateString={date} />
                                </span>
                                    <h3 className="text-2xl mt-5 text-black font-medium hover:underline">
                                        {title}
                                    </h3>
                                    <p className="text-gray-400 mt-3 text-md leading-relaxed">
                                        {excerpt}
                                    </p>
                                </div>
                            </Link>
                        </div>
    </div>
  )
}
