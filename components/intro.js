import { CMS_NAME, CMS_URL } from '../lib/constants'

export default function Intro() {
  return (
    <section className="flex-col pr-8 text-white bg-purple-600 md:flex-col flex items-start md:justify-between mb-16 md:mb-12">
      <h1 className="text-6xl font-sans md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Blog.
      </h1>
      <div className='h-[40vh] w-[100%] '>
      <h3 className='font-sans font-medium mt-[5%] text-[2rem]'> We talk about everything that helps startups scale</h3>
      </div>
      
    </section>
  )
}
