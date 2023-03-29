import { CMS_NAME, CMS_URL } from '../lib/constants'

export default function Intro() {
  return (
    <section className="flex-col px-[15%] py-4 text-white bg-white md:flex-col flex items-start md:justify-between md:">
      <h1 className="text-[1rem] font-sans text-black md:text-[2rem] font-bold tracking-tighter leading-tight md:pr-8">
      Beekreed
      </h1>
      <div className='bg-purple-200 mb-4 mt-[10%] font-sans text-purple-600 font-medium px-4 py-2 rounded-[0.1rem]'>
        Our Blog
      </div>
      <div className='w-[100%] mb-[7%]'>
      <h3 className='font-sans font-semibold text-black text-[4rem]'>Resources for your business</h3>
      <p className='font-sans font-normal text-black text-[1.3rem]'>Insigts, guides and ideas</p>
      </div>
      
    </section>
  )
}
