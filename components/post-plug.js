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
                                <span className="block text-gray-400 text-sm">
                                <Date dateString={date} />
                                </span>
                                <div className="mt-2">
                                    <h3 className="text-xl text-white font-semibold hover:underline">
                                        {title}
                                    </h3>
                                    <p className="text-gray-400 mt-1 leading-relaxed">
                                        {excerpt}
                                    </p>
                                </div>
                                <button className="mt-2 outline-none flex items-center text-[14px] text-purple-600 decoration-purple-600 hover:underline">
                                    READ MORE
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </Link>
                        </div>
    </div>
  )
}
