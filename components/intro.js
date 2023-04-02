import { CMS_NAME, CMS_URL } from '../lib/constants'

export default function Intro() {
  return (
    <section className="flex-col px-8 lg:px-[15%] py-4 text-white bg-white md:flex-col flex items-start md:justify-between md:">
      <h1 className="lg:text-[1rem] text-[2.5rem] font-sans text-black md:text-[2rem] font-bold tracking-tighter leading-tight md:pr-8">
      Beekreed
      </h1>
      <div className='bg-purple-200 text-[1.5rem] mb-6 xl:mb-4 mt-[10%] font-sans text-purple-600 font-medium px-4 py-2 rounded-[0.1rem]'>
        Our Blog
      </div>
      <div className='w-[100%] mb-[7%]'>
      <h3 className='font-sans font-semibold text-[2.5rem] text-black lg:text-[4rem]'>Resources for your business</h3>
      <p className='font-sans font-normal text-[#7e7e7e] text-[1.5rem]'>Insigts, guides and ideas</p>
      </div>
      
    </section>
  )
}
