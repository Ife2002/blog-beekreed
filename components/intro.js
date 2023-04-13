import { CMS_NAME, CMS_URL } from '../lib/constants'

export default function Intro() {
  return (
    <section className="flex-col px-8 py-4 text-white bg-white md:flex-col flex items-start justify-center md:">
      <h1 className="xl:text-[2rem] lg:text-[1.8rem] text-[1.5rem] font-sans text-black md:text-[2rem] font-bold tracking-tighter leading-tight md:pr-8">
      Beekreed <span className='font-normal text-gray-600'>Blog</span>
      </h1>
      {/* <div className='bg-purple-200 text-[0.8rem] lg:text-[1.2rem] mb-6 xl:mb-4 mt-[10%] font-sans text-purple-600 font-medium px-4 py-2 rounded-[0.1rem]'>
        Our Blog
      </div> */}
      <div className='w-[100%]'>
      {/* <h3 className='font-sans font-semibold leading-tight text-[1.7rem] text-black lg:text-[4rem]'>Resources for your business</h3>
      <p className='font-sans mt-3 font-normal text-[#7e7e7e] lg:text-[2rem] text-[1.1rem]'>Insigts, guides and ideas</p>
       */}
      </div>
      
    </section>
  )
}
