import { CMS_NAME, CMS_URL } from '../lib/constants'

export default function Intro() {
  return (
    <section className="flex-col px-[5%] py-[5%] text-white bg-purple-600 md:flex-col flex items-start md:justify-between md:">
      <h1 className="text-2xl font-sans md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
      Beekreed Blog.
      </h1>
      <div className='w-[100%] '>
      <h3 className='font-sans font-medium mt-[5%] text-[1.5rem]'> We talk about everything that helps startups scale</h3>
      </div>
      
    </section>
  )
}
