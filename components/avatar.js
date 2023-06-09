import Image from 'next/image'
import { urlForImage } from '../lib/sanity'

export default function Avatar({ name, picture }) {
  return (
    <div className="flex flex-col mt-8 font-sans font-normal items-center">
      <div className="relative w-12 h-12 mb-4 ">
        <Image
          src={
            picture?.asset?._ref
              ? urlForImage(picture).height(96).width(96).fit('crop').url()
              : 'https://source.unsplash.com/96x96/?face'
          }
          className="rounded-full"
          height={96}
          width={96}
          alt={name}
        />
      </div>
      <div className="text-[1.3rem] text-white">{name}</div>
    </div>
  )
}
